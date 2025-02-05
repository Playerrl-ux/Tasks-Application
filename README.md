# Task Manager

Task Manager is a project that allows you to manage your tasks efficiently. Tasks are stored in a MongoDB database and are retrieved via a RESTful API. The project consists of two main parts:

- **Front End:** Built with Angular 18.  
- **Back End (API):** Developed in Java 21 using Spring Boot.

## Technologies Used

- **Front End:** Angular 18  
- **Back End:** Java 21 (Spring Boot)  
- **Database:** MongoDB  

## Features

- Create, read, update, and delete tasks.
- Responsive UI for managing tasks.
- API integration between the front end and back end.

## Database Requirements

The project requires the following MongoDB collections:

- **`Tasks` Collection:** Used to store task-related data.  
- **`Users` Collection:** Intended for user authentication and management. However, the authentication feature is currently disabled.

Ensure that your MongoDB instance has these collections. If they do not exist, they will be automatically created when tasks or users are first added.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)  
- [Angular CLI](https://angular.io/cli) (v18)  
- [Java JDK 21](https://jdk.java.net/21/)  
- [Maven](https://maven.apache.org/) (or Gradle, if preferred)  
- [MongoDB](https://www.mongodb.com/try/download/community)  

## Get Started

### 1. Back End Setup

#### Configure `application.properties`

Before starting the Java API, open the `application.properties` file located in `src/main/resources/`. Update the MongoDB configuration to match your local setup:

```properties
# MongoDB connection URI (modify if your MongoDB instance is hosted elsewhere)
spring.data.mongodb.uri=mongodb://localhost:27017/task-manager

# (Optional) Specify the database name
spring.data.mongodb.database=task-manager
```

#### Start the Back End

Navigate to the back-end project directory and run:

```bash
mvn spring-boot:run
```

This command starts the API server. By default, it runs on port **8080** unless specified otherwise in the configuration.

### 2. Front End Setup

Navigate to the front-end project directory and install the dependencies:

```bash
npm install
```

Then, start the Angular application with:

```bash
ng serve
```

This will compile the Angular application and serve it on your browser at [http://localhost:4200](http://localhost:4200).

## Running the Project

1. **Back End:**  
   - Ensure MongoDB is running on your machine.  
   - Make sure the `Tasks` and `Users` collections are present in your MongoDB database.  
   - Start the API using the Maven command above.

2. **Front End:**  
   - Run the Angular application with `ng serve`.  
   - Open your browser and navigate to [http://localhost:4200](http://localhost:4200) to interact with the Task Manager.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have improvements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).
