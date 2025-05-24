import { task } from "../db/task";
import { Task } from "../db/task";

class TaskService {
  constructor() {}

  saveTask(newTask: Task): Task {
    try {
      task.push(newTask);
      return newTask;
    } catch (error) {
      console.error("Error saving task:", error);
      throw error;
    }
  }

  findTaskById(id: string): Task | undefined {
    try {
      return task.find(item => item.id === id);
    } catch (error) {
      console.error("Error finding task by ID:", error);
      return undefined;
    }
  }

  findTaskByNameAndTime(name: string): Task | undefined {
    try {
      const targetDate = new Date().toISOString().split('T')[0];

      return task.find(item => {
        const itemDate = new Date(item.createdAt).toISOString().split('T')[0];
        return item.name === name && itemDate === targetDate;
      });
    } catch (error) {
      console.error("Error finding task by name and time:", error);
      return undefined;
    }
  }
  updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | string {
  try {
    const taskIndex = task.findIndex(t => t.id === id);
    if (taskIndex === -1) return 'Task not found';

    const existingTask = task[taskIndex];
    const updatedTask: Task = {
      ...existingTask,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    task[taskIndex] = updatedTask;
    return updatedTask;
  } catch (error) {
    console.error('Error updating task:', error);
    return 'An error occurred';
  }
}

 getAllTask() {
  try {
    return task;
  } catch (error) {
    console.error("Error getting all tasks:", error);
  }
}


 getPaginatedTasks(page: number = 1, limit: number = 10) {
  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedTasks = task.slice(startIndex, endIndex);
    
    return {
      currentPage: page,
      totalTasks: task.length,
      totalPages: Math.ceil(task.length / limit),
      tasks: paginatedTasks,
    };
  } catch (error) {
    console.error("Error paginating tasks:", error);
    return null;
  }
}



  deleteTask(id: string): string {
    try {
      const index = task.findIndex(t => t.id === id);
      if (index === -1) return 'Task not found';
      task.splice(index, 1);
      return 'Task deleted';
    } catch (error) {
      console.error("Error deleting task:", error);
      return 'An error occurred';
    }
  }
}

export default TaskService;
