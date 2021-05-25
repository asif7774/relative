import React from "react";
import PropTypes from "prop-types";

import { Navbar} from "../components/layout";

const HomeLayout = ({ children, navbar, props }) => (
  <React.Fragment>
    {!navbar && <Navbar />}
    <main>
      {children} 
    </main>
  </React.Fragment>
);

HomeLayout.propTypes = {
  navbar: PropTypes.bool
};

HomeLayout.defaultProps = {
  navbar: false
};

export default HomeLayout;