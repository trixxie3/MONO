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
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SubCategoryPage from './pages/SubCategoryPage/SubCategoryPage';

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

  const handleUpdateUser = (updatedUser) => {
    const currentUserEmail = currentUser?.email;

    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((user) =>
      user.email === currentUserEmail ? updatedUser : user,
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
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
                element={
                  <DeliveryAddressPage
                    currentUser={currentUser}
                    onUpdateUser={handleUpdateUser}
                  />
                }
              />
              <Route
                path="discounts-bonuses"
                element={<DiscountsBonusesPage />}
              />
              <Route
                path="contact-info"
                element={
                  <ContactInfoPage
                    currentUser={currentUser}
                    onUpdateUser={handleUpdateUser}
                  />
                }
              />
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
            <Route path="/category" element={<Navigate to="/category/1" replace />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route
              path="/subcategory"
              element={<Navigate to="/category/1/subcategory/1" replace />}
            />
            <Route
              path="/category/:categoryId/subcategory/:subcategoryId"
              element={<SubCategoryPage />}
            />
            <Route path="/about" element={<AboutStorePage />} />
            <Route path="/contacts" element={<ProfilePage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
