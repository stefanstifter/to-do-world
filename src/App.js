import React from 'react';

function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-300">
      <header className="">
        <h1 className="font-sans text-xl font-semibold">Is there something to do?</h1>
      </header>
      <ul>
        <li>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
              Header
            </div>
            <div class="px-4 py-5 sm:p-6">
              Body
            </div>
          </div>
        </li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}

export default App;
