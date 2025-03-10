const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix UI alignment issue in the dashboard.",
          "taskDate": "2025-03-10",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review pull requests from the frontend team.",
          "taskDate": "2025-03-12",
          "category": "Code Review",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize slow-running SQL queries.",
          "taskDate": "2025-03-11",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Security Audit",
          "taskDescription": "Perform security checks on API endpoints.",
          "taskDate": "2025-03-13",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true
        },
        {
          "taskTitle": "Testing",
          "taskDescription": "Write unit tests for the authentication module.",
          "taskDate": "2025-03-15",
          "category": "Testing",
          "active": false,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Discuss project updates with the client.",
          "taskDate": "2025-03-09",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        },
        {
          "taskTitle": "Frontend Fixes",
          "taskDescription": "Fix broken buttons on mobile view.",
          "taskDate": "2025-03-11",
          "category": "UI/UX",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Performance Testing",
          "taskDescription": "Analyze API response times.",
          "taskDate": "2025-03-14",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failedTask": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Feature Development",
          "taskDescription": "Implement dark mode for the app.",
          "taskDate": "2025-03-10",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Code Documentation",
          "taskDescription": "Update API documentation.",
          "taskDate": "2025-03-12",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Server Maintenance",
          "taskDescription": "Upgrade the production server to the latest version.",
          "taskDate": "2025-03-11",
          "category": "IT",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failedTask": false
        },
        {
          "taskTitle": "Client Report",
          "taskDescription": "Prepare the monthly report for stakeholders.",
          "taskDate": "2025-03-15",
          "category": "Management",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failedTask": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
  }
  