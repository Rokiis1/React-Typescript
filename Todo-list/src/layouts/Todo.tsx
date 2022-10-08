import { ChangeEvent, useState } from "react";
import TodoTask from "../components/TodoTask";
import { Task } from "../interfaces/todo";

const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState<Task[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <input
        onChange={handleChange}
        name="task"
        type="text"
        value={task}
        placeholder="Add a task"
      />
      <input
        onChange={handleChange}
        name="deadline"
        type="Number"
        value={deadline}
        placeholder="Deadline (in Days)..."
      />
      <button onClick={addTask}>Add task</button>
      <div>
        {todo.map((task: Task, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
