import { Fragment, useState, useEffect } from 'react';

import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import ProductsList from './components/Products/ProductsList';
import About from './components/Layout/About';
import ServicesList from './components/Services/ServicesList';
import ReviewsList from './components/Reviews/ReviewsLIst';
import Contact from './components/Layout/Contact';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import Snackbar from './components/UI/Snackbar';
import AlertBox from './components/AlertBox/AlertBox';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarName, setSnackbarName] = useState('');

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showSnackbarHandler = (name) => {
    setShowSnackbar(true);
    setSnackbarName(name);
  };

  const reportHandler = () => {
    hideCartHandler();
    showSnackbarHandler('report sended');
  };

  useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  });

  let cart;
  let snackbar;

  if (cartIsShown) {
    cart = <Cart
      onReport={reportHandler}
      onClose={hideCartHandler} />
  }

  if (showSnackbar) {
    snackbar = <Snackbar content={snackbarName} />
  }

  return (
    <Fragment>
      {cart}
      <AlertBox />
      <Header />
      <Home />
      <ProductsList onShow={() =>
        showSnackbarHandler('coming soon')} />
      <About />
      <ServicesList />
      <ReviewsList onShowCart={showCartHandler}
        showSnackbar={() =>
          showSnackbarHandler('copied to clipboard')} />
      <Contact />
      <Footer />
      {snackbar}
    </Fragment>
  );
};

export default App;