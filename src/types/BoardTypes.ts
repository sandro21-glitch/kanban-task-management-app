export interface BoardState {
  boards: {
    id: number;
    name: string;
    isActive: boolean;
    boardTodos: {
      todoId: string;
      todoName: string;
      todoTasks: {
        taskName: string;
        taskDesc: string;
        taskId: string;
        subtasks: {
          subtaskId: string;
          subtaskName: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
  }[];
}

export interface SingleBoard {
  id: number;
  name: string;
  isActive: boolean;
  boardTodos: {
    todoId: string;
    todoName: string;
    todoTasks: {
      taskName: string;
      taskDesc: string;
      taskId: string;
      subtasks: {
        subtaskId: string;
        subtaskName: string;
        isCompleted: boolean;
      }[];
    }[];
  }[];
}

export interface BoardTodos {
  todoId: string;
  todoName: string;
  todoTasks: {
    taskName: string;
    taskDesc: string;
    taskId: string;
    subtasks: {
      subtaskId: string;
      subtaskName: string;
      isCompleted: boolean;
    }[];
  }[];
}

export interface TaskType {
  taskName: string;
  taskDesc: string;
  taskId: string;
  subtasks: {
    subtaskId: string;
    subtaskName: string;
    isCompleted: boolean;
  }[];
}
export interface SubtaskType {
  subtaskId: string;
  subtaskName: string;
  isCompleted: boolean;
}
export interface SingleTaskTypes {
  taskName: string;
  taskDesc?: string;
  taskId: string;
  subtasks: SubtaskType[];
  todoId: string;
}
