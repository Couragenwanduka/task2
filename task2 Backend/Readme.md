
# 📝 Task Management API

A RESTful API for managing tasks. It supports CRUD operations, validation, and pagination.

---

## 📦 Base URL

```
http://localhost:8080
```

---

## 📚 Endpoints

### ✅ Create Task

* **URL:** `/tasks`
* **Method:** `POST`
* **Body:**

```json
{
  "name": "Implement authentication",
  "description": "Set up JWT for login and signup",
  "status": "todo", // "todo" | "in-progress" | "done"
  "dueDate": "2025-06-15T23:59:59Z",
  "priority": "high", // "low" | "medium" | "high"
  "isCompleted": false
}
```

* **Validation:** Joi schema ensures required fields and value constraints.
* **Response:**

```json
{
  "message": "Task created successfully",
  "data": { ...taskObject }
}
```

---

### 📥 Get All Tasks

* **URL:** `/tasks`
* **Method:** `GET`
* **Response:**

```json
[
  {
    "id": "task-id",
    "name": "Implement authentication",
    ...
  }
]
```

---

### 🔍 Get Task by ID

* **URL:** `/tasks/:id`
* **Method:** `GET`
* **Example:** `/tasks/24d7SmB597yu72025`
* **Response:**

```json
{
  "id": "24d7SmB597yu72025",
  "name": "Task title",
  ...
}
```

---

### ✏️ Update Task

* **URL:** `/tasks/:id`
* **Method:** `PUT`
* **Example:** `/tasks/24g4Ex05fdNZV2025`
* **Body:**

```json
{
  "priority": "low"
}
```

* **Response:**

```json
{
  "message": "Task updated successfully",
  "data": { ...updatedTask }
}
```

---

### ❌ Delete Task

* **URL:** `/tasks/:id`
* **Method:** `DELETE`
* **Example:** `/tasks/24vTXmB5aeWjD2025`
* **Response:**

```json
{
  "message": "Task deleted successfully"
}
```

---

### 📄 Paginate Tasks

* **URL:** `/tasks/paginate`
* **Method:** `GET`
* **Query Parameters:**

  * `page`: Page number (e.g. `1`)
  * `limit`: Number of tasks per page (e.g. `3`)
* **Example:** `/tasks/paginate?page=1&limit=3`
* **Response:**

```json
{
  "page": 1,
  "limit": 3,
  "total": 10,
  "tasks": [ ... ]
}
```

---

## ✅ Joi Validation Schema

```ts
const taskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(5).max(500).required(),
  status: Joi.string().valid("todo", "in-progress", "done").required(),
  dueDate: Joi.date().optional(),
  priority: Joi.string().valid("low", "medium", "high").optional(),
  isCompleted: Joi.boolean().default(false)
});
```

---

## 📂 Project Structure

```
.
├── controller/
├── middleware/
├── routes/
├── schema/
├── utils/
└── index.ts
```

---

## 🧪 Test with Postman

You can import the provided Postman collection or use this request sample:

```
POST http://localhost:8080/tasks
```

Body:

```json
{
  "name": "Write README",
  "description": "Document the Task API",
  "status": "todo",
  "priority": "medium"
}
```


