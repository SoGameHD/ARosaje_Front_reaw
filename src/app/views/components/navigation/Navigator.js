import { Route, Routes } from 'react-router-dom'
import UserPlantsView from '../UserPlants/UserPlantsView'
import PlantsBeingKeptView from '../PlantsBeingKept/PlantsBeingKeptView'
import GeneralShowPlantsBeingKept from '../PlantsBeingKept/GeneralShowPlantsBeingKept'
import Dashboard from '../Dashboard/Dashboard'
import GeneralShowView from '../ShowUserPlants/GeneralShowView'
import GeneralShowPlantsToKeep from '../PlantsToKeep/GeneralShowPlantsToKeep'
import PlantsCreate from '../PlantsCreate/PlantsCreate'


const Navigator = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/plantes-a-garder/:id' element={<GeneralShowPlantsToKeep />} />
      <Route path='mes-plantes' element={<UserPlantsView />} />
      <Route path='mes-plantes/:id' element={<GeneralShowView />} />
      <Route path='plantes-gardees' element={<PlantsBeingKeptView />} />
      <Route path='plantes-gardees/:id' element={<GeneralShowPlantsBeingKept />} />
      <Route path='ajouter-une-plante' element={<PlantsCreate />} />
    </Routes>
  )
}

export default Navigator
