import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    const newValue = e.target.value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
    setNum1(newValue);
  };

  const handleNum2Change = (e) => {
    const newValue = e.target.value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
    setNum2(newValue);
  };

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtract = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiply = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivide = () => {
    if (parseFloat(num2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Calculator</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
          style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
          pattern="[0-9.]+"
        />
        <input
          type="text"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
          style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
          pattern="[0-9.]+"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleAdd} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>+</button>
          <button onClick={handleSubtract} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>-</button>
          <button onClick={handleMultiply} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>*</button>
          <button onClick={handleDivide} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>/</button>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '3px', fontWeight: 'bold' }}>Result: {result}</div>
      </div>
    </div>
  );
};

export default Calculator;