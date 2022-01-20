# General

This project is a clone attempt of Todoist: https://todoist.com

## Features implemented

- [x] Clone Todoist styling
- [x] Firebase/Firestore setup & get tasks and projects dynamically from Firestore
- [x] Add new tasks
- [x] Delete tasks
- [x] Check tasks as done
- [x] Display task count per project
- [x] Preserve tasks in order of time created
- [x] Assign and Filter tasks by project
- [x] Sidebar: Toggle show/hide
- [x] Due dates for tasks

## Questions

### 1. Memory leak Error

When creating, deleting or checking a task as done, I sometimes (not always) get the follwing error message:

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`

Of course I tried to google it and read some interesting material about it, like: https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i

However, I'm unable to locate the specific piece of code that's causing the error and thus I'm unable to start thinking about solving it. Could you please help me out with this one? And teach me how I can find and fix it next time by myself?

### 2. Moving state inside custom hooks and export/import state freely from there -> Why is this pattern not more often recommended?

Seems elegant, avoids problems of "Props drilling", avoids negative effects of useContext and lessens need for additional tools like Redux.
Why is this pattern not recommended all over the internet? I couldn't find it in any of the materials I studied so far.

### 3. Exporting via wrapper function

I saw the pattern of exporting values and functions from inside a wrapper function first time when using custom hooks. I somehow find this approach elegant and are wondering if it's considered good practice to import anything like this, e.g. utility functions, constants etc. Or should it be restricted to custom hooks and maybe has negative side effects I'm unaware of?

## Known issues/bugs

- Remove setters from inside getTasks and getProjects and move into useEffect hooks
- Overdue tasks need to be sorted by due date and years need to be considered

## Planned Features

- [ ] Edit existing Tasks
- [ ] CRUD for projects
- [ ] Adding Tests

## Maybe

- [ ] Make app responsive
- [ ] Remember user settings (e.g Sidebar hidden, last navitem/project selected, ...)
- [ ] User authentification
- [ ] Search, dynamic sorting and filtering, ... https://listjs.com/?ref=vanillalist
- [ ] Drag and drop projects and tasks: https://shopify.github.io/draggable/
- [ ] Keyboard shortcuts: https://github.com/madrobby/keymaster?ref=vanillalist
