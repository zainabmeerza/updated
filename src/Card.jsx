import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Card = () => {
  const location = useLocation();
  return (
    <div className="w-56 pb-2 mt-8 mx-4 bg-white rounded-md border border-gray-200 overflow-hidden shadow-lg">
      <Link
        to={{
          pathname: '/contact/person-1',
          state: { background: location },
        }}
      >
        <div className="flex flex-col items-center py-4 px-2 bg-gray-300">
          <span className="w-10 h-10 rounded-full overflow-hidden inline-block">
            <img
              src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
              alt=""
            />
          </span>
          <h1 className="text-lg font-medium text-gray-600 mt-2">
            Settings Page
          </h1>
        </div>
      </Link>

      <div className="px-2 py-2">
        <p className="text-sm text-gray-600 mt-1 flex items-center">
          Explorer Settings
        </p>
      </div>
    </div>
  );
};

export default Card;
