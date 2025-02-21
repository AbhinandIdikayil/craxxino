import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import CreateAccount from './pages/CreateAccount'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<CreateAccount />} />
      </Route>
    </Routes>

  )
}

export default App
