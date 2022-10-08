import { Task } from "../interfaces/todo";

type Props = {
  task: Task;
  completeTask(taskNameToDelete: string): void;
};

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div>
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
