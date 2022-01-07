# General

This project is a clone attempt of Todoist: https://todoist.com

It is inspired by a YouTube tutorial of Karl Hadwen - though significant changes have been made: https://youtu.be/HgfA4W_VjmI

It's under heavy development at the moment and much is missing still.

## Features implemented

- [x] Todoist styling
- [x] Firebase/Firestore setup & get tasks and projects dynamically from Firestore
- [x] Add new Tasks
- [x] Delete Tasks
- [x] Check Tasks
- [x] Preserve Tasks in order of time created

## Questions

#### 1.) How to modularize code in Content.js

To keep my code DRY, simple and reusable I would like to seperate the returned JSX code into seperate Components as well as create seperate files for each CRUD function (createTask, getTasks, ...) into seperate (custom hook) files?

However, due to the variable, state and function references all over the place I find it hard to come up with ways to do that.
Do you have any recommendations or could point me to a simple project where I can see how it's done or something else?

#### 2) Filter Tasks List based on selected project in Sidebar

I've started thinking now about how to filter the Tasks List based on the selected Project in the Sidebar. However, I'm struggling coming up with a good idea for an approach...maybe routing or creating a selected project state? What would be your recommended approach?

I haven't been able to learn about all React hooks...so maybe I'm missing something obvious here.

## Open Todos

- [ ] Add due dates to tasks
- [ ] Edit existing Tasks
- [ ] Sidebar: Add real task counts to projects
- [ ] Filter Tasks List based on Sidebar Selection (Nav items or projects)
- [ ] CRUD for projects
- [ ] Sidebar: Turn Projects section into working accordeon
- [ ] Sidebar: Toggle show/hide

## Maybe

- [ ] Search, dynamic sorting and filtering, ... https://listjs.com/?ref=vanillalist
- [ ] Drag and drop projects and tasks: https://shopify.github.io/draggable/
- [ ] Keyboard shortcuts: https://github.com/madrobby/keymaster?ref=vanillalist
