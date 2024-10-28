import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <label>Enter your name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter your name" 
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
}

export default App;
