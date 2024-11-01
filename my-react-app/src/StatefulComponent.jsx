import React, { useState } from 'react';
function StatefulComponent() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>Stateful Component</h2>
      <p>Кількість: {count}</p>
      <button onClick={increment}>Кнопка</button>
    </div>
  );
}

export default StatefulComponent;