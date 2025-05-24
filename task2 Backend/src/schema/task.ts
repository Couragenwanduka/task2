import Joi from 'joi';

export const taskSchema = Joi.object({
  id: Joi.string().optional(), // usually auto-generated
  name: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.base': 'Name must be a string',
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 3 characters long',
      'string.max': 'Name must be at most 100 characters long',
      'any.required': 'Task name is required',
    }),

  description: Joi.string()
    .min(5)
    .max(500)
    .optional()
    .messages({
      'string.base': 'Description must be a string',
      'string.min': 'Description must be at least 5 characters long',
      'string.max': 'Description must be at most 500 characters long',
    }),

  status: Joi.string()
    .valid('todo', 'in-progress', 'done')
    .required()
    .messages({
      'any.only': 'Status must be one of: todo, in-progress, or done',
      'string.empty': 'Status is required',
      'any.required': 'Task status is required',
    }),

  createdAt: Joi.string().isoDate().optional(),
  updatedAt: Joi.string().isoDate().optional(),

  dueDate: Joi.string().isoDate().optional().messages({
    'string.isoDate': 'Due date must be a valid ISO date string',
  }),

  priority: Joi.string()
    .valid('low', 'medium', 'high')
    .optional()
    .messages({
      'any.only': 'Priority must be one of: low, medium, or high',
    }),

  isCompleted: Joi.boolean().optional().messages({
    'boolean.base': 'isCompleted must be a boolean value',
  }),
});
