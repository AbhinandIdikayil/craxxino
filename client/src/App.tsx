import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import CreateAccount from './pages/CreateAccount'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<CreateAccount />} />
        <Route path='user/:id' element={<UserDetails />} />
      </Route>
    </Routes>

  )
}

export default App
