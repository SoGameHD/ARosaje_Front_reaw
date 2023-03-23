import { Route, Routes } from 'react-router-dom'
import UserPlantsView from '../UserPlants/UserPlantsView'
import PlantsBeingKeptView from '../PlantsBeingKept/PlantsBeingKeptView'
import CardPlantsBeingKept from '../PlantsBeingKept/CardPlantsBeingKept'
import Dashboard from '../Dashboard/Dashboard'
import GeneralShowView from '../ShowUserPlants/GeneralShowView'
import GeneralShowPlantsToKeep from '../PlantsToKeep/GeneralShowPlantsToKeep'
import PlantsCreate from '../PlantsCreate/PlantsCreate'
import UserRegister from '../User/Register/UserRegister'
import UserLogin from '../User/Login/UserLogin'
import UserProfil from '../User/Profil/UserProfil'


const Navigator = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/plantes-a-garder/:id' element={<GeneralShowPlantsToKeep />} />
      <Route path='mes-plantes' element={<UserPlantsView />} />
      <Route path='mes-plantes/:id' element={<GeneralShowView />} />
      <Route path='plantes-gardees' element={<PlantsBeingKeptView />} />
      <Route path='plantes-gardees/:id' element={<CardPlantsBeingKept />} />
      <Route path='ajouter-une-plante' element={<PlantsCreate />} />
      <Route path='inscription' element={<UserRegister />} />
      <Route path='connexion' element={<UserLogin />} />
      <Route path='profil' element={<UserProfil />} />
    </Routes>
  )
}

export default Navigator
