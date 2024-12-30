import { Check, Pencil, Trash2, X } from 'lucide-react';
import { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-violet-200 transition-colors">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          autoFocus
        />
        <button
          onClick={handleEdit}
          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-colors"
          aria-label="Save"
        >
          <Check className="h-5 w-5" />
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors"
          aria-label="Cancel"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div className={`group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-violet-200 transition-all ${
      todo.completed ? 'bg-gray-50' : ''
    }`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 rounded-full border-gray-300 text-violet-600 focus:ring-violet-500 transition-colors"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
          aria-label="Edit"
        >
          <Pencil className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors"
          aria-label="Delete"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}