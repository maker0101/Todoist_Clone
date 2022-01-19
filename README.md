# General

This project is a clone attempt of Todoist: https://todoist.com

It is inspired by a YouTube tutorial of Karl Hadwen - though significant changes have been made: https://youtu.be/HgfA4W_VjmI

It's under heavy development at the moment and much is missing still.

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

### 1. Additional setter inside of getter functions

I have problems removing them getTasks and getProjects (line 17 & 18)

### 2. Error after moving tasks and projects state inside custom hooks

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`

### 3. Moving state inside custom hooks and export/import state from there -> Why is this pattern not more often recommended

Seems elegant and avoids problems of "Props drilling" and negative effects of useContext.
Why is it not described and recommended all over the internet?

## Known issues/bugs

Overdue tasks need to be sorted by due date and years need to be considered

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
