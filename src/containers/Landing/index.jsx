import React from 'react';
import Faq from './components/Faq';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import Header from './components/Header';
import AddFriendDiscoverParks from './components/AddFriendDiscoverParks';
import StepsSection from './components/StepsSection';
import style from './landing.scss'; 

function Landing() {
  return (
    <>
      <Header />
      <HomeSection />
      <StepsSection />
      <AddFriendDiscoverParks />
      <Faq />
      <Footer />
    </>
  );
}

export default Landing;
