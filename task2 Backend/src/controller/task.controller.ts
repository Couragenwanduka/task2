import TaskService from "../service/task.service";
import { Request, Response, NextFunction } from 'express';
import BadRequest from "../error/error";
import createId from "../utils/createId";

class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description, status, dueDate, priority } = req.body;

      // Check if task already exists for today
      const existingTask = this.taskService.findTaskByNameAndTime(name);
      if (existingTask) {
        throw new BadRequest('Task already exists for today');
      }

      // Ensure unique ID
      let id = createId();
      while (this.taskService.findTaskById(id)) {
        id = createId(); // Regenerate if duplicate
      }

      const now = new Date().toISOString();

      const task = this.taskService.saveTask({
        id,
        name,
        description,
        status,
        dueDate,
        priority,
        createdAt: now,
        updatedAt: now,
        isCompleted: false,
      });

      res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
      next(error);
    }
  }

  findTaskById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const findExisitingTask = this.taskService.findTaskById(id);
      if (!findExisitingTask) {
        throw new BadRequest("No Task");
      }

      res.status(200).json({ task: findExisitingTask });
    } catch (error) {
      next(error);
    }
  }

  updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const {  name, description, status, dueDate, priority, isCompleted } = req.body;

      const task = this.taskService.findTaskById(id);
      console.log(task)
      if (!task) {
        throw new BadRequest('Task not found')
      }

      // Update only fields that are provided in the request
      if (name !== undefined) task.name = name;
      if (description !== undefined) task.description = description;
      if (status !== undefined) task.status = status;
      if (dueDate !== undefined) task.dueDate = dueDate;
      if (priority !== undefined) task.priority = priority;
      if (isCompleted !== undefined) task.isCompleted = isCompleted;

      task.updatedAt = new Date().toISOString();

      res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
      next(error);
    }
  }

  deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const deleted = this.taskService.deleteTask(id);

      if (deleted === 'Task not found') {
       throw new BadRequest('Task not found')
      }

      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      next(error);
    }
  }

  allTask(req: Request, res: Response, next: NextFunction) {
    try{
        const task = this.taskService.getAllTask()
        res.status(200).json(task)
    }catch(error){
        next(error)
    }
  }

  getPaginatedTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = this.taskService.getPaginatedTasks(page, limit);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

}

export default TaskController;
