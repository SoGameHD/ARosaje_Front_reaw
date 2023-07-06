import './App.css'
import Home from './app/views/components/Home/Home'
import { LangProvider } from './app/contexts/lang-context'
import createTheme from '@mui/material/styles/createTheme'
import { Color, ColorRgb } from './app/constant'
import { ThemeProvider } from '@mui/material/styles'
import { frFR } from '@mui/material/locale'

const theme = createTheme(
  {
    palette: {
      primary: {
        light: `rgba(${ColorRgb.PRIMARY}, 0.3)`,
        main: `rgba(${ColorRgb.PRIMARY}, 1)`,
        dark: Color.PRIMARY
      },
      secondary: {
        light: `rgba(${ColorRgb.SECONDARY}, 0.3)`,
        main: `rgba(${ColorRgb.SECONDARY}, 1)`,
        dark: Color.SECONDARY
      }
    }
  },
  frFR
)

const App = () => {
  return (
    <div className="App">
			<ThemeProvider theme={theme}>

			<LangProvider>
      	<Home />
			</LangProvider>
			</ThemeProvider>
    </div>
  )
}

export default App
