import React from 'react';

function Card(props) {
  return (
    <div className="mb-6 bg-white overflow-hidden shadow rounded-lg">
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        { props.header }
      </div>

      <div className="px-4 py-5 sm:p-6">
        { props.body }
      </div>

      <div className={ "border-t border-gray-200 px-4 py-4 sm:px-6 " + (props.footer ? 'block' : 'hidden') }>
        { props.footer }
      </div>
    </div>  
  );
}

export default Card;
