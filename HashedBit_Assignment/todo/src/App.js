import React, { useState } from 'react';
const TodoList = () => {
const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('');
const [editingIndex, setEditingIndex] = useState(-1);
const [editingText, setEditingText] = useState('');
const addTodo = () => {
if (newTodo.trim()) {
setTodos([...todos, newTodo.trim()].sort());
setNewTodo('');
}
};
const deleteTodo = (index) => {
const updatedTodos = [...todos];
updatedTodos.splice(index, 1);
setTodos(updatedTodos.sort());
};
const editTodo = (index) => {
setEditingIndex(index);
setEditingText(todos[index]);
};
const saveEdit = (index) => {
const updatedTodos = [...todos];
updatedTodos[index] = editingText.trim();
setTodos(updatedTodos.sort());
setEditingIndex(-1);
setEditingText('');
};
const handleKeyDown = (event) => {
if (event.key === 'Enter') {
addTodo();
}
};
return (
<div style={{ backgroundColor: '#ffcccc', padding: '20px' }}>
<h1 style={{ color: '#333', textAlign: 'center' }}>To Do List</h1>
<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
<input
type="text"
value={newTodo}
onChange={(e) => setNewTodo(e.target.value)}
onKeyDown={handleKeyDown}
placeholder="What Will You Do?"
style={{ padding: '8px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', flex: '1', marginRight: '10px' }}
/>
<button onClick={addTodo} style={{ padding: '8px 16px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
Add
</button>
</div>
<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<thead>
<tr style={{ backgroundColor: '#333', color: '#fff' }}>
<th style={{ padding: '10px', textAlign: 'left' }}>Task</th>
<th style={{ padding: '10px' }}>Actions</th>
</tr>
</thead>
<tbody>
{todos.map((todo, index) => (
<tr key={index}>
<td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
{editingIndex === index ? (
<input
type="text"
value={editingText}
onChange={(e) => setEditingText(e.target.value)}
style={{ padding: '5px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
/>
) : (
todo
)}
</td>
<td style={{ padding: '10px', borderBottom: '1px solid #ccc', textAlign: 'right' }}>
{editingIndex === index ? (
<button onClick={() => saveEdit(index)} style={{ padding: '8px 16px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
Save
</button>
) : (
<button onClick={() => editTodo(index)} style={{ padding: '8px 16px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
Edit
</button>
)}
<button onClick={() => deleteTodo(index)} style={{ padding: '8px 16px', backgroundColor: '#ff3333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
};
export default TodoList;