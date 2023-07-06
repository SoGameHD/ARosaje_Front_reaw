/* eslint-disable react-hooks/exhaustive-deps */
import Expand from 'expand-template'
import _ from 'lodash'
import { PropTypes } from 'prop-types'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import frFR from '../lang/fr-FR'

const langData = {
  'fr-FR': frFR
}
const noTranslation = 'No translation...'
const langList = ['fr-FR']
const defaultLang = 'fr-FR'

export const LangContext = React.createContext({
  lang: '',
  switchLang: () => {}
})

export const useLang = (path) => {
  const { getLg } = useContext(LangContext)

  const lg = useMemo(() => {
    return getLg(path)
  }, [path, getLg])

  return lg
}

const ex = new Expand()

export const LangProvider = ({ children, ...initOptions }) => {
  const [lang, setLang] = useState(window.localStorage.getItem('appUILang'))

  useEffect(() => {
    const selectedLang = window.localStorage.getItem('appUILang')

    if (lang) {
      if (langList.includes(lang)) {
        if (lang !== selectedLang) {
          window.localStorage.setItem('appUILang', lang)
        }
      } else {
        setLang(defaultLang)
      }
    } else {
      let x = 0
      _.each(langList, (ln) => {
        if (ln.indexOf(window.navigator.language) >= 0) {
          setLang(ln)
          x++
          return false
        }
      })
      if (x === 0) {
        setLang(defaultLang)
      }
    }
  }, [lang])

  const switchLang = useCallback(
    (ln) => {
      setLang(ln)
    },
    [langData]
  )

  const getEntry = useCallback(
    (path) => {
      return _.get(langData, `[${lang}].${path}`)
    },
    [lang, langData]
  )

  const getLabel = useCallback(
    (path, args = null) => {
      const x = _.get(langData, `[${lang}].${path}`)
      if (x) {
        if (args) {
          return ex(x, args)
        }
        return x
      }
      console.warn('Missing translation', `[${lang}].${path}`)

      if (lang !== defaultLang) {
        const y = _.get(langData, `[${defaultLang}].${path}`)
        if (y) {
          if (args) {
            return ex(y, args)
          }
          return y
        }
      }
      return noTranslation
    },
    [lang, langData]
  )

  const getLabelFunc = useCallback(
    (basePath) => {
      const x = _.get(langData, `[${lang}].${basePath}`)
      if (x) {
        return (path, args = null, returnIfNotFound = null) => {
          const y = _.get(x, path)
          if (y) {
            if (args) {
              return ex(y, args)
            }
            return y
          }

          if (returnIfNotFound === null) {
            console.warn('Missing translation', `[${lang}].${basePath}.${path}`)
            return noTranslation
          } else {
            return returnIfNotFound
          }
        }
      }

      console.warn('Missing base translation', `[${lang}].${basePath}`)

      return () => noTranslation
    },
    [lang, langData]
  )

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        lg: getLabel,
        getLg: getLabelFunc,
        getEntry
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

LangProvider.propTypes = {
  children: PropTypes.object
}
