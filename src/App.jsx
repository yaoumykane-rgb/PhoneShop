import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Delivery from './pages/Delivery';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Checkout />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/delivery" element={<Delivery />} />

        <Route
          path="/order-confirmation"
          element={<OrderConfirmationPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;