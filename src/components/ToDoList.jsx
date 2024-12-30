import TodoItem from "./ToDoItem";

export default function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <p className="text-gray-500 mb-2">Your task list is empty</p>
        <p className="text-sm text-gray-400">Add your first task above to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
