import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SystemConfig = () => {
  const location = useLocation();

  return (
    <div className="w-full h-screen flex flex-col  ">
      <h1 className="text-center text-3xl text-gray-600 font-medium"></h1>

      <Link to="/">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          System Status
        </button>
      </Link>

      <Link to="/systemConfig">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          System Config
        </button>
      </Link>

      <Link to="/measurements">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          BMS Measurements
        </button>
      </Link>

      <Link to="/bmsCompiler">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          BMS Config
        </button>
      </Link>

      <Link to="/network">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          Network
        </button>
      </Link>

      <Link to="/networkConfig">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          Network Config
        </button>
      </Link>

      <Link to="/DMH">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          DMH
        </button>
      </Link>

      <Link to="/charts">
        <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">
          Charts
        </button>
      </Link>

      <Link
        to={{
          pathname: '/Settings',
          state: { background: location },
        }}
      >
        <button className="rounded-lg bg-red-400 px-4 py-2 mt-4 text-white font-bold hover:bg-red-500">
          Settings
        </button>
      </Link>

      <h1 className="text-2xl font-semibold text-gray-600 text-center">
        This is the System Config Page
      </h1>
    </div>
  );
};

export default SystemConfig;
