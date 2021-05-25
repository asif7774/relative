import React from "react";
import PropTypes from "prop-types";

import { Navbar, Footer} from "../components/layout";

const DefaultLayout = ({ children, navbar, footer, props }) => (
  <React.Fragment>
    {!navbar && <Navbar />}
    <main>
      {children} 
    </main>
    {!footer && <Footer />}
  </React.Fragment>
);

DefaultLayout.propTypes = {
  navbar: PropTypes.bool,
  footer: PropTypes.bool
};

DefaultLayout.defaultProps = {
  navbar: false,
  footer: false
};

export default DefaultLayout;