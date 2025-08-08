
# SmartTask Pro – Full-Stack Task Management App

A full-stack Task Manager web application built using **Java Spring Boot** (backend) and **React.js** (frontend). This app allows users to add, view, update, and delete tasks, with real-time UI updates and persistent backend storage.

---

## 🚀 Features

- Add, update, delete, and view tasks  
- Mark tasks as completed or pending  
- Fully responsive UI using Bootstrap  
- RESTful API integration between frontend and backend  
- In-memory H2 database for rapid development and testing  

---

## 🛠️ Tech Stack

### Backend:
- Java 17  
- Spring Boot  
- Spring Web  
- Spring Data JPA  
- H2 Database  

### Frontend:
- React.js  
- Axios  
- Bootstrap  

---

## 📁 Project Structure

### Backend:
```

task-manager/
├── controller/
├── model/
├── repository/
├── service/
└── TaskManagerApplication.java

```

### Frontend:
```

frontend/
├── src/
│   ├── components/
│   │   ├── AddTask.js
│   │   └── TaskList.js
│   ├── App.js
│   └── index.js

````

---

## ⚙️ How to Run

### Prerequisites:
- Node.js  
- Maven  
- Java 17 or higher  

### Run Backend:
```bash
cd task-manager
mvn spring-boot:run
````

### Run Frontend:

```bash
cd frontend
npm install
npm start
```

---

## 📌 API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /tasks      | Get all tasks     |
| POST   | /tasks      | Add a new task    |
| PUT    | /tasks/{id} | Update task by ID |
| DELETE | /tasks/{id} | Delete task by ID |

---

## ✍️ Author

Built with ❤️ by **Harsh Mukund Zele**
MS CS @ USC
Contact: [LinkedIn](https://linkedin.com/in/...)

---

## 📝 License

This project is licensed for learning and demonstration purposes.

