import PropTypes from 'prop-types';

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function PublicLayout({children}){
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  )
}