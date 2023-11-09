import React, { useEffect, useState } from 'react';
let i=1;
function Alert() {
  const x = [
    { id: 1, title: "hi" },
    { id: 2, title: "hello" },
    { id: 3, title: "howdy" }
  ];

  const [t, setT] = useState([]);

  useEffect(() => {
    setT([...x]);
  },[x]);

  return (
    <div>
      <div>
        {t.map((item) => (
          <div key={item.id}>{item.id +' '+ item.title}</div>
        ))}
      </div>
      <AlertButton/>
    </div>
  );
}



function AlertButton() {
 
  const handleButtonClick = () => {
 
    const x=i++
    alert(`Button clicked! times ${x}`);
  };

  return (
    <div>
    
      <button onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
}
export default Alert
