import React, { useState } from 'react';

function PartManager() {
  const [partInfo, setPartInfo] = useState({
    barcode: '',
    specifications: '',
    status: ''
  });

  const handleInputChange = (e) => {
    setPartInfo({ ...partInfo, [e.target.name]: e.target.value });
  };

  const savePart = () => {
    console.log(partInfo);
  };

  return (
    <div>
      <h2>Gerenciar Peças</h2>
      <label>
        Código de Barras: 
        <input type="text" name="barcode" onChange={handleInputChange} />
      </label>
      <label>
        Especificações: 
        <input type="text" name="specifications" onChange={handleInputChange} />
      </label>
      <label>
        Status: 
        <input type="text" name="status" onChange={handleInputChange} />
      </label>
      <button onClick={savePart}>Salvar Peça</button>
    </div>
  );
}

export default PartManager;
