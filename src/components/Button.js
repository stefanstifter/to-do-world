import React from 'react';

function Button(props) {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button type="button" 
        onClick={ props.onClick }
        className={ 
          "inline-flex items-center px-4 py-2 border text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 " + (props.secondary ? 'border-gray-300 text-gray-500 bg-white hover:text-gray-500 hover:bg-gray-50 hover:border-gray-300 active:border-gray-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50' : 'border-transparent text-white bg-teal-600 hover:bg-teal-500 focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700') 
        }
      >
        { props.text }
      </button>
    </span>
  );
}

export default Button;
