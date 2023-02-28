import { Route, Routes } from 'react-router-dom'
import UserPlantsView from '../UserPlants/UserPlantsView'
import PlantsBeingKeptView from '../PlantsBeingKept/PlantsBeingKeptView'
import CardPlantsBeingKept from '../PlantsBeingKept/CardPlantsBeingKept'
import CardUserKeptPlants from '../UserPlants/CardUserKeptPlants'
import CardUserNotKeptPlants from '../UserPlants/CardUserNotKeptPlants'
import Dashboard from '../Dashboard/Dashboard'


const Navigator = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='mes-plantes' element={<UserPlantsView />} />
      <Route path='mes-plantes-gardées/:id' element={<CardUserKeptPlants />} />
      <Route path='mes-plantes-non-gardées/:id' element={<CardUserNotKeptPlants />} />
      <Route path='plantes-gardées' element={<PlantsBeingKeptView />} />
      <Route path='plantes-gardées/:id' element={<CardPlantsBeingKept />} />
    </Routes>
  )
}

export default Navigator
