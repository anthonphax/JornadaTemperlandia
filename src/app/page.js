// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import SideClients from './components/side_clients.jsx';
import DataGrid from '@mui/material/Button';
import Datagrid_units from './components/datagrid_tmp.jsx'




export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
        <div className="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
          
          <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
            <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"></button>
            <button className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </button>
            <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <line x1="12" y1="11" x2="12" y2="17"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
              </svg>
            </button>
            <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-hidden h-full flex flex-col">
          <div className="ml-auto flex items-center space-x-7">
            <button className="flex items-center">
              <span className="relative flex-shrink-0">
                <Image className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" width={28} height={28} />
                <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
              </span>
              <span className="ml-2">Administrador</span>
              <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="flex-grow flex ">
            <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
              <div className="text-xs text-gray-400 tracking-wider">CLIENTES</div>
              <div className="relative mt-2">
                <input type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Pesquisar" />
                <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
          <React.StrictMode>
            <SideClients />
          </React.StrictMode>,
        </div>
        <DataGrid
  density="compact"
  hideFooter
  rows={[
    {
      desk: 'D-985',
      commodity: 'Adzuki bean',
      traderName: 'Roy Green',
      quantity: '83,996',
      filledQuantity: 1,
      status: 'PartiallyFilled',
    },
  ]}
  columns={[ // column definition example
    {
      field: 'filledQuantity',
      headerName: 'Filled',
      editable: true,
      renderCell: (params) => <ProgressBar value={Number(params.value)} />,
      renderEditCell: (params) => <EditProgress {...params} />,
    },
  ]}
/>
      </div>

    </>
  );
}
