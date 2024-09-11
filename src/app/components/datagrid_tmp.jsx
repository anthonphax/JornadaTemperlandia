import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const ProgressBar = ({ value }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${value}%`,
          backgroundColor: 'green',
          height: '10px',
        }}
      ></div>
    </div>
  );
};


const EditProgress = (props) => {
    return (
      <input
        type="number"
        {...props}
        style={{
          width: '100%',
          padding: '4px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    );
  };

const Datagrid_units = () => {
  const rows = [
    {
      id: 1, // Ensure each row has a unique `id`
      desk: 'D-985',
      commodity: 'Adzuki bean',
      traderName: 'Roy Green',
      quantity: '83,996',
      filledQuantity: 1,
      status: 'PartiallyFilled',
    },
  ];

  const columns = [
    {
      field: 'filledQuantity',
      headerName: 'Filled',
      editable: true,
      renderCell: (params) => <ProgressBar value={Number(params.value)} />,
      renderEditCell: (params) => <EditProgress {...params} />,
    },
    // Add more columns as needed
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        density="compact"
        hideFooter
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default Datagrid_units;
