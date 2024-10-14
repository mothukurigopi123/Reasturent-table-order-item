// src/components/TableSelection.js
import React from 'react';

const TableSelection = ({ selectedTable, setSelectedTable }) => {
  const tables = [1, 2, 3, 4, 5]; // Example table numbers

  return (
    <div>
      <h2>Select a Table</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {tables.map(table => (
          <button
            key={table}
            onClick={() => setSelectedTable(table)}
            style={{
              backgroundColor: selectedTable === table ? '#4CAF50' : '#008CBA',
              color: 'white',
              padding: '15px',
              margin: '5px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s',
            }}
          >
            Table {table}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableSelection;
