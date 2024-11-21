import React, { useState } from 'react';

function AlarmsManager() {
  const [alertParams, setAlertParams] = useState({});

  const handleInputChange = (e) => {
    setAlertParams({ ...alertParams, [e.target.name]: e.target.value });
  };

  const saveSettings = () => {
    // Salvar configurações no estado ou enviar para backend
    console.log(alertParams);
  };

  return (
    <div>
      <h2>Gerenciar Alarmes</h2>
      <label>
        Tempo ocioso para Pedido X: 
        <input type="number" name="pedidoX" onChange={handleInputChange} />
      </label>
      <label>
        Tempo ocioso para Pedido Y: 
        <input type="number" name="pedidoY" onChange={handleInputChange} />
      </label>
      <button onClick={saveSettings}>Salvar Configurações</button>
    </div>
  );
}

export default AlarmsManager;
