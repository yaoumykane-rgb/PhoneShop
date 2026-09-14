import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'
import ProtectedRoute from './components/ProtectedRoute'
import AccountLayout from './components/AccountLayout'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AccountLayout>
              <Profile />
            </AccountLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <AccountLayout>
              <Orders />
            </AccountLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <AccountLayout>
              <OrderDetails />
            </AccountLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App