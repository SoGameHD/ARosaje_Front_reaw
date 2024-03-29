import { Navigate, Route, Routes } from 'react-router-dom'
import UserPlantsView from '../UserPlants/UserPlantsView'
import PlantsBeingKeptView from '../PlantsBeingKept/PlantsBeingKeptView'
import GeneralShowPlantsBeingKept from '../PlantsBeingKept/GeneralShowPlantsBeingKept'
import Dashboard from '../Dashboard/Dashboard'
import GeneralShowView from '../ShowUserPlants/GeneralShowView'
import GeneralShowPlantsToKeep from '../PlantsToKeep/GeneralShowPlantsToKeep'
import PlantsCreate from '../PlantsCreate/PlantsCreate'
import UserRegister from '../User/Register/UserRegister'
import UserLogin from '../User/Login/UserLogin'
import UserProfil from '../User/Profil/UserProfil'
import { useEffect, useState } from 'react'
import { checkToken } from '../../services/auth.service'
import Cgu from '../CGU/cgu'
import ConversationList from '../Conversation/ConversationList'
import Conversation from '../Conversation/Conversation'

const Navigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const isValid = checkToken()

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté ici
    const loggedIn = isValid === true ? true : false
    setIsAuthenticated(loggedIn)
  }, [isValid])

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/connexion" />} />
      <Route path="/plantes-a-garder/:id" element={isAuthenticated ? <GeneralShowPlantsToKeep /> : <Navigate to="/connexion" />} />
      <Route path="mes-plantes" element={isAuthenticated ? <UserPlantsView /> : <Navigate to="/connexion" />} />
      <Route path="mes-plantes/:id" element={isAuthenticated ? <GeneralShowView /> : <Navigate to="/connexion" />} />
      <Route path="plantes-gardees" element={isAuthenticated ? <PlantsBeingKeptView /> : <Navigate to="/connexion" />} />
      <Route path="plantes-gardees/:id" element={isAuthenticated ? <GeneralShowPlantsBeingKept /> : <Navigate to="/connexion" />} />
      <Route path="ajouter-une-plante" element={isAuthenticated ? <PlantsCreate /> : <Navigate to="/connexion" />} />
      <Route path="inscription" element={<UserRegister />} />
      <Route path="connexion" element={<UserLogin />} />
      <Route path="profil" element={isAuthenticated ? <UserProfil /> : <Navigate to="/connexion" />} />
      <Route path="traitement-des-données" element={<Cgu />} />
      <Route path="conversation" element={<ConversationList />} />
      <Route path="conversation/:id" element={<Conversation />} />
    </Routes>
  )
}

export default Navigator
