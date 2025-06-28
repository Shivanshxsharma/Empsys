# Employee Task Management System
A pure React-based task management application that runs entirely in the browser using localStorage for data persistence. Enables administrators to assign tasks to employees and allows employees to manage their assigned tasks efficiently without requiring any backend server.

## Features

### Admin Features
- **Task Creation**: Create and assign tasks to employees
- **Employee Management**: View all employees and their task status
- **Task Monitoring**: Monitor all tasks across the organization with real-time status updates
- **Task Deletion**: Remove pending tasks before employee acceptance

### Employee Features
- **Task Dashboard**: View task statistics (New, Active, Completed, Failed)
- **Task Management**: Accept new tasks, mark tasks as completed or failed
- **Task Timeline**: Track tasks with due dates and descriptions
- **Profile Management**: View personal information and task counts

### Authentication
- **Dual Login System**: Separate login for admins and employees
- **User Registration**: New employee signup functionality
- **Session Management**: Persistent login sessions using localStorage
- **Role-based Access**: Different dashboards based on user role

## Quick Start

Simply open the `index.html` file in your web browser - that's it! No installation, no setup, no server required. The app runs entirely in your browser with all data stored locally.

## Project Structure
```
src/
├── components/
│   ├── auth/
│   │   ├── Login.jsx          # User login component
│   │   └── Signup.jsx         # Employee registration
│   ├── dashboard/
│   │   ├── Admindash.jsx      # Admin dashboard
│   │   ├── Empdash.jsx        # Employee dashboard
│   │   └── others/
│   │       ├── Header.jsx     # Dashboard header
│   │       ├── Task.jsx       # Task statistics display
│   │       ├── Alltask.jsx    # All tasks overview
│   │       └── Taskplate.jsx  # Individual task template
│   └── tasklist/
│       ├── Tasklist.jsx       # Main task list container
│       ├── Newtask.jsx        # New task card
│       ├── Accepttask.jsx     # Active task card
│       ├── Completetask.jsx   # Completed task card
│       └── Failedtask.jsx     # Failed task card
├── context/
│   ├── AuthProvider.jsx       # Authentication context
│   └── Taskcontext.jsx        # Task management context
├── utils/
│   ├── localstorage.jsx       # Local storage utilities
│   └── employees.json         # Sample employee data
├── App.jsx                    # Main application component
├── App.css                    # Main styles
├── index.css                  # Global styles
├── input.css                  # Tailwind imports
└── main.jsx                   # Application entry point
```

## Technology Stack
- **Frontend**: React 18+ (Pure client-side application)
- **Styling**: Tailwind CSS
- **State Management**: React Context API + useState/useEffect
- **Data Storage**: Browser localStorage (No backend required)
- **Authentication**: Custom implementation with localStorage sessions

## Default Login Credentials

### Admin Access
- **Email**: admin@example.com
- **Password**: 123

### Employee Access
- **Employee 1**: employee1@example.com / 123
- **Employee 2**: employee2@example.com / 123
- **Employee 3**: employee3@example.com / 123
- **Employee 4**: employee4@example.com / 123
- **Employee 5**: employee5@example.com / 123

## Data Management
The application uses browser localStorage exclusively for data persistence - no server or database required. All employee data, tasks, and authentication sessions are stored locally in your browser.

### Key localStorage Items:
- `employees` - Array of all employee data and their tasks
- `admin` - Admin user credentials
- `loggedinuser` - Current session information

### Employee Data Structure
```javascript
{
  "name": "Employee Name",
  "id": 1,
  "email": "employee@example.com",
  "password": "123",
  "tasks": [...],
  "task_count": {
    "active": 0,
    "new_task": 0,
    "failed": 0,
    "completed": 0
  }
}
```

### Task Data Structure
```javascript
{
  "task_title": "Task Name",
  "description": "Task description",
  "date": "2025-03-15",
  "category": "Task Category",
  "active": false,
  "completed": false,
  "new_task": true,
  "failed": false,
  "status": "new"
}
```

## Styling & UI
- **Framework**: Tailwind CSS for utility-first styling
- **Design**: Dark theme with green accent colors (#4E9F3D)
- **Responsive**: Mobile-friendly design
- **Animations**: Smooth hover effects and transitions
- **Icons**: Emoji-based icons for better visual appeal

## Task Workflow
1. **Admin creates task** → Task status: new
2. **Employee accepts task** → Task status: active
3. **Employee completes/fails task** → Task status: completed/failed

## Key Features

### Pure Frontend Application
- No backend server, database, or API required
- **Browser-Only Storage**: All data is stored in browser localStorage
- **Instant Setup**: Just open in browser - no configuration needed
- **Data Isolation**: Each browser/device has its own independent data
- **Data Persistence**: Data persists between sessions until browser data is cleared
- **No Network Required**: Works offline after initial load

## Known Limitations
- **Browser-Specific Data**: Data doesn't sync across different browsers/devices
- **No Data Backup**: Clearing browser data will reset everything
- **Single Instance**: No multi-user collaboration across different sessions
- **Storage Limits**: Subject to browser localStorage size limitations (~5-10MB)

## Security Considerations
- **Development Purpose**: Designed for learning and demonstration
- **Local Storage Only**: Passwords stored in plain text in localStorage
- **Client-Side Only**: All authentication logic runs in the browser
- **No Network Security**: No server-side validation required
