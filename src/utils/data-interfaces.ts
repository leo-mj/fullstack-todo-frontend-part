export interface ToDoItem {
  title: string;
  description: string;
  completed: boolean;
}

export interface ToDoItemWithId extends ToDoItem {
  id: number;
}
