import React from 'react';

function StatusBadge() {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800">
      <svg className="-ml-1 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      <span className="ml-2">
        not done yet
      </span>
    </span>
    );
  }

  export default StatusBadge;
