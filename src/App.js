import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import SvgSprite from "./utility/SvgSpriteLoader";
//App routes
import routes from "./routes";

import './ant.less';

//Svg Sprite
import svgFile from './assets/images/svg/svg-sprite.svg';


class App extends React.Component { 
  render(){
    return (
      <React.Fragment>
        <SvgSprite url={svgFile} />
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <React.Fragment>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  }}
                />
              );
            })}
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
