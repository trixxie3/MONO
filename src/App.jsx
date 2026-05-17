import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './pages/HomePage/HomePage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import AccountPage from './pages/AccountPage/AccountPage';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import AboutStorePage from './pages/AboutStorePage/AboutStorePage';
import Footer from './components/Footer/Footer';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { useState } from 'react';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import DeliveryAddressPage from './pages/DeliveryAddressPage/DeliveryAddressPage';
import DiscountsBonusesPage from './pages/DiscountsBonusesPage/DiscountsBonusesPage';
import ContactInfoPage from './pages/ContactInfoPage/ContactInfoPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/account"
              element={
                <AccountPage
                  currentUser={currentUser}
                  onLogin={handleLogin}
                  onLogout={handleLogout}
                />
              }
            >
              <Route index element={<Navigate to="order-history" replace />} />
              <Route path="order-history" element={<OrderHistoryPage />} />
              <Route
                path="delivery-address"
                element={<DeliveryAddressPage />}
              />
              <Route
                path="discounts-bonuses"
                element={<DiscountsBonusesPage />}
              />
              <Route path="contact-info" element={<ContactInfoPage />} />
            </Route>
            <Route
              path="/register"
              element={<RegisterPage onLogin={handleLogin} />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  currentUser={currentUser}
                  onLogout={handleLogout}
                />
              }
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutStorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
