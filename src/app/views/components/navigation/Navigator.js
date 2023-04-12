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


const Navigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isValid = checkToken();

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté ici
    const loggedIn = checkLoginStatus();
    setIsAuthenticated(loggedIn);
  }, []);

  function checkLoginStatus() {
    // Vérifiez les informations d'authentification de l'utilisateur ici
    // Si l'utilisateur est connecté, renvoyez true
    // Sinon, renvoyez false
    if (isValid === true) {
      return true
    } else {
      return false;
    }
  }

  return (
    <Routes>
      <Route path='/' element={isAuthenticated ? <Dashboard /> : <Navigate to="/connexion" />} />
      <Route path='/plantes-a-garder/:id' element={isAuthenticated ? <GeneralShowPlantsToKeep /> : <Navigate to="/connexion" />} />
      <Route path='mes-plantes' element={isAuthenticated ? <UserPlantsView /> : <Navigate to="/connexion" />} />
      <Route path='mes-plantes/:id' element={isAuthenticated ? <GeneralShowView /> : <Navigate to="/connexion" />} />
      <Route path='plantes-gardees' element={isAuthenticated ? <PlantsBeingKeptView /> : <Navigate to="/connexion" />} />
      <Route path='plantes-gardees/:id' element={isAuthenticated ? <GeneralShowPlantsBeingKept /> : <Navigate to="/connexion" />} />
      <Route path='ajouter-une-plante' element={isAuthenticated ? <PlantsCreate /> : <Navigate to="/connexion" />} />
      <Route path='inscription' element={<UserRegister />} />
      <Route path='connexion' element={<UserLogin />} />
      <Route path='profil' element={isAuthenticated ? <UserProfil /> : <Navigate to="/connexion" />} />
      <Route path='traitement-des-données' element={<Cgu />} />
    </Routes>
  )
}

export default Navigator
