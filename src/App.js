import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import SystemStatus from './systemStatus';
import SystemConfig from './systemConfig';
import Measurements from './measurements';
import BMSCompiler from './bmsCompiler';
import Network from './network';
import NetworkConfig from './networkConfig';
import DMH from './DMH';
import Charts from './charts';
import Settings from './Settings';

import Modal from './Modal';
import './style.css';

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="w-full bg-gray-200 px-4 relative">
      <Switch location={background || location}>
        <Route path="/" exact component={SystemStatus} />
        <Route path="/systemConfig" exact component={SystemConfig} />
        <Route path="/measurements" exact component={Measurements} />
        <Route path="/bmsCompiler" exact component={BMSCompiler} />
        <Route path="/network" exact component={Network} />
        <Route path="/networkConfig" exact component={NetworkConfig} />
        <Route path="/DMH" exact component={DMH} />
        <Route path="/charts" exact component={Charts} />
      </Switch>

      {background && <Route path="/:name" children={<Settings />} />}
      {background && (
        <Route path="/systemConfig/:name" children={<Settings />} />
      )}
      {background && (
        <Route path="/measurements/:name" children={<Settings />} />
      )}
      {background && (
        <Route path="/bmsCompiler/:name" children={<Settings />} />
      )}
      {background && <Route path="/network/:name" children={<Settings />} />}
      {background && (
        <Route path="/networkConfig/:name" children={<Settings />} />
      )}
      {background && <Route path="/DMH/:name" children={<Settings />} />}
      {background && <Route path="/charts/:name" children={<Settings />} />}
    </div>
  );
}
