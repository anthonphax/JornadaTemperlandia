import React from 'react';

const Client_Button = () => {
  return (
    <div>
    <button className="bg-white p-3 flex flex-col rounded-md dark:bg-gray-800 shadow">
      <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
        <img 
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" 
          className="w-7 h-7 mr-2 rounded-full" 
          alt="profile"
        />
        Cliente Rolândia
      </div>
      <div className="flex items-center w-full">
        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">
          Temperado
        </div>
        <div className="ml-auto text-xs text-gray-400">$0.00</div>
      </div>
    </button>
    </div>
  );
};

export default Client_Button;
