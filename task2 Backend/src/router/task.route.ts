import express from 'express'
import TaskController from '../controller/task.controller'
import { validator } from '../middleware/validator';
import { taskSchema } from '../schema/task';

const taskRouter = express.Router();
const task = new TaskController();

taskRouter.get('/task/pagnate', task.getPaginatedTasks.bind(task));
taskRouter.post('/tasks',  [validator(taskSchema)],task.createTask.bind(task));
taskRouter.get('/tasks', task.allTask.bind(task));
taskRouter.get('/tasks/:id', task.findTaskById.bind(task));
taskRouter.put('/tasks/:id', task.updateTask.bind(task));
taskRouter.delete('/tasks/:id', task.deleteTask.bind(task));



export default taskRouter