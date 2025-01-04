const employees = [
    {
      "id": 1,
      "firstName": "Arjun",
      "email": "a@a.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update website",
          "taskDescription": "Revamp the homepage design to enhance user engagement and include the latest promotional banners.",
          "taskDate": "2024-10-12",
          "category": "Update"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client meeting",
          "taskDescription": "Conduct a detailed discussion with the client to finalize project requirements and timelines.",
          "taskDate": "2024-10-10",
          "category": "Meeting"
        },
        {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Build website",
            "taskDescription": "Design the home design and include the latest promotional banners.",
            "taskDate": "2024-10-12",
            "category": "Design"
          },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix bugs",
          "taskDescription": "Identify and resolve high-priority bugs reported in the issue tracker to ensure system stability.",
          "taskDate": "2024-10-14",
          "category": "Development"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Sneha",
      "email": "s@s.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Database optimization",
          "taskDescription": "Analyze and optimize database queries to improve application performance and reduce load times.",
          "taskDate": "2024-10-11",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Design new feature",
          "taskDescription": "Create wireframes and mockups for a new feature that addresses user feedback.",
          "taskDate": "2024-10-09",
          "category": "Design"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Ravi",
      "email": "r@r.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare presentation",
          "taskDescription": "Prepare comprehensive slides for an upcoming client meeting to showcase project milestones and deliverables.",
          "taskDate": "2024-10-13",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Code review",
          "taskDescription": "Perform a thorough review of the existing codebase, focusing on readability, performance, and potential refactoring opportunities.",
          "taskDate": "2024-10-12",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Testing",
          "taskDescription": "Test the latest build for functionality, performance, and edge-case handling before the next release.",
          "taskDate": "2024-10-08",
          "category": "QA"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Priya",
      "email": "p@p.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write documentation",
          "taskDescription": "Update the project documentation to reflect recent changes, including API updates and feature enhancements.",
          "taskDate": "2024-10-13",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Set up CI/CD",
          "taskDescription": "Implement a continuous integration and delivery pipeline to automate testing and deployments.",
          "taskDate": "2024-10-11",
          "category": "DevOps"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Karan",
      "email": "k@k.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "UI redesign",
          "taskDescription": "Redesign the user interface of the main application for a more modern and intuitive experience.",
          "taskDate": "2024-10-14",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Deploy new build",
          "taskDescription": "Deploy the latest production build, ensuring all release notes are updated and the build is tested in staging.",
          "taskDate": "2024-10-09",
          "category": "DevOps"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Client feedback",
          "taskDescription": "Gather and document client feedback post-product launch for future enhancements.",
          "taskDate": "2024-10-12",
          "category": "Support"
        }
      ]
    }
  ];
  

  
  
    const admin = [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ];

    export const  setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))

    }
    export const getLocalStorage = () =>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
    
        return {employees, admin}
    }
    