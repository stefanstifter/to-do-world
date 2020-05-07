import React from 'react';

function ButtonSubmit(props) {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button 
        type="submit" 
        className="inline-flex items-center px-4 py-2 border text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 border-transparent text-white bg-teal-600 hover:bg-teal-500 focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700"
      >
        { props.children }
      </button>
    </span>
  );
}

export default ButtonSubmit;
