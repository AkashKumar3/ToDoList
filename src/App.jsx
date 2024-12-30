
import { Plus } from 'lucide-react';
import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/ToDoList'


function App() {

  const [todos, setTodos] = useState([]);
  const [newKaam, setNewKaam] = useState('');

  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const addTodo = (e) => {
    e.preventDefault();
    if (newKaam.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newKaam.trim(),
          completed: false,
        },
      ]);
      setNewKaam('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };


  return (
    <>
  
    <Header/>

    <div className="w-full max-w-2xl mx-auto p-6">
    
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Progress</h2>
        <span className="text-sm text-gray-500">
          {completed} of {total} tasks completed
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>


    <form onSubmit={addTodo} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={newKaam}
          onChange={(e) => setNewKaam(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 flex items-center gap-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Add Task
        </button>
      </div>
    </form>
    <main className="container mx-auto py-8">
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </main>
    </div>
    </>
  )
}

export default App
