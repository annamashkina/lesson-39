import React from 'react';
function StatelessComponent({ message }) {
  return (
    <div>
      <h2>Stateless Component</h2>
      <p>{message}</p>
    </div>
  );
}

export default StatelessComponent;