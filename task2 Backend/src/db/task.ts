export interface Task {
  id: string;
  name: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  isCompleted: boolean;
}


export const task:Task[] = []