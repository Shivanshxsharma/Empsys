const employees = [
  {
    "name": "Aarav Sharma",
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Submit Report",
        "description": "Submit the weekly sales report.",
        "date": "2025-03-15",
        "category": "Reporting",
        "active": true,      // Only one status true
        "completed": false,
        "new_task": false,   // new_task set to false since task is accepted
        "failed": false,
        "status": "active"   // status prop reflects the true flag
      },
      {
        "task_title": "Client Meeting",
        "description": "Discuss project updates with the client.",
        "date": "2025-03-16",
        "category": "Meetings",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false,
        "status": "active"
      }
    ],
    "task_count": {
      "active": 2,
      "new_task": 0,
      "failed": 0,
      "completed": 0
    }
  },
  {
    "name": "Priya Verma",
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Update Website",
        "description": "Make necessary updates to the company website.",
        "date": "2025-03-17",
        "category": "Development",
        "active": false,
        "completed": true,
        "new_task": false,
        "failed": false,
        "status": "completed"
      },
      {
        "task_title": "Security Check",
        "description": "Perform a security audit on internal systems.",
        "date": "2025-03-18",
        "category": "Security",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false,
        "status": "active"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 0,
      "failed": 0,
      "completed": 1
    }
  },
  {
    "name": "Rahul Iyer",
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Onboarding Training",
        "description": "Train new employees on company policies.",
        "date": "2025-03-19",
        "category": "HR",
        "active": false,
        "completed": true,
        "new_task": false,
        "failed": false,
        "status": "completed"
      },
      {
        "task_title": "Quarterly Budget Review",
        "description": "Analyze the department budget and prepare a report.",
        "date": "2025-03-20",
        "category": "Finance",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false,
        "status": "active"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 0,
      "failed": 0,
      "completed": 1
    }
  },
  {
    "name": "Neha Kapoor",
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Server Maintenance",
        "description": "Perform routine maintenance on the server.",
        "date": "2025-03-21",
        "category": "IT",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false,
        "status": "active"
      },
      {
        "task_title": "Backup Data",
        "description": "Ensure all company data is backed up properly.",
        "date": "2025-03-22",
        "category": "IT",
        "active": false,
        "completed": true,
        "new_task": false,
        "failed": false,
        "status": "completed"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 0,
      "failed": 0,
      "completed": 1
    }
  },
  {
    "name": "Vikram Singh",
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Product Testing",
        "description": "Test the new product features and document issues.",
        "date": "2025-03-23",
        "category": "Quality Assurance",
        "active": false,
        "completed": false,
        "new_task": false,
        "failed": true,
        "status": "failed"
      },
      {
        "task_title": "Customer Feedback Analysis",
        "description": "Review customer feedback and prepare a report.",
        "date": "2025-03-24",
        "category": "Customer Service",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false,
        "status": "active"
      }
    ],
    "task_count": {
      "active": 1,
      "new_task": 0,
      "failed": 1,
      "completed": 0
    }
  }
];



  

  const admin=[{
    "name":"Admin",
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  
  export const setLocalStorage=(emp,ad)=>{
    localStorage.setItem('employees',JSON.stringify((emp)?emp:employees))
    localStorage.setItem('admin',JSON.stringify((ad)?ad:admin))
  }

 


  export const getLocalStorage=()=>{
   const obj ={
    emp:JSON.parse(localStorage.getItem('employees')),
    ad:JSON.parse(localStorage.getItem('admin'))}

   return obj;
   
  }
  export const updateStorage=(newemployee)=>{
    let emp=JSON.parse(localStorage.getItem('employees'));
   if (emp) {
    emp.push(newemployee);
    localStorage.setItem('employees',JSON.stringify(emp))
    window.location.reload();
    
   }else{
    employees.push(newemployee);
    localStorage.setItem('employees',JSON.stringify(employees))
    window.location.reload();
   }   
    return JSON.parse(localStorage.getItem('employees'));
    
  }
  export const updateStorageontask=(newemployee)=>{
   employees.forEach((e,i)=>{
    if (e.name==newemployee.name) {
      employees[i]=newemployee;
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem("loggedinuser",JSON.stringify({role:'employee',userdata:newemployee}));

    window.location.reload();
    }
   })
    
  }
  