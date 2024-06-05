import React from 'react'
import Header from '../Header/Header';
import SecondHeader from '../MainSection/SecondHeader/SecondHeader';
import Footer from '../Footer/Footer';

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <SecondHeader />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout;