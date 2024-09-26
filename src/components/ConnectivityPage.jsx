import React from 'react';
import { Route, Routes , useLocation} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Vision from './Vision';
import Approach from './Approach';
import Signup from './Signup';
import LoginPage from './LoginPage';
import Products from './Products';
import AddProducts from './AddProducts';
import Carts from './Carts';
import ManageProducts from './ManageProducts';
import Admin from './Admin';
import Orders from './Orders'; // Import Orders component
import Dashboard from './Dashboard';

function ConnectivityPage() {


  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const showHeader = isAdminRoute 

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      {!showHeader && (
        <div className='sticky top-0 z-50'>
          <Header />
        </div>
      )}

      {/* Main content with padding to prevent overlap */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            {/* Nested routes inside admin */}
            <Route path="orders" element={<Orders />} />
            <Route path="manageproducts" element={<ManageProducts />} />
            <Route path="addproducts" element={<AddProducts />} />
            <Route path="dashboard" element={<Dashboard />} />

          </Route>
        </Routes>
      </main>

      {!showHeader && <Footer />}
    </div>
  );
}

export default ConnectivityPage;
