# General

This project is a clone attempt of Todoist: https://todoist.com

It is inspired by a YouTube tutorial of Karl Hadwen - though significant changes have been made: https://youtu.be/HgfA4W_VjmI

It's under heavy development at the moment and much is missing still.

## Features implemented

- [x] Todoist styling
- [x] Firebase/Firestore setup
- [x] get Tasks dynamically from Firestore
- [x] get Projects dynamically from Firestore
- [x] Add new Tasks
- [x] Delete Tasks
- [x] Check Tasks

## Questions

#### 1.) How to modularize Content.js into seperate JSX Components & How to extract CRUD functions into seperate hook files?

To keep code maintainable and reuse components and functions elsewhere, I need to modularize my code.

However, due to the variable and function references between JSX components, state, hooks etc. I find it really hard to achieve without breaking the code.

## Open Todos

- [ ] Sidebar: Add real task counts to projects
- [ ] Edit Tasks
- [ ] Filter tasks based on Sidebar Selection
- [ ] Add new Projects
- [ ] Delete Projects
- [ ] Edit Projects
- [ ] Add due dates to tasks
- [ ] Sidebar: Turn Projects section into working accordeon
- [ ] Sidebar: Toggle show/hide
- [ ] Sort tasks & projects to preserve order created in

## Maybe

- [ ] Search, sort, filter, ... https://listjs.com/?ref=vanillalist
- [ ] Drag and drop projects and tasks: https://shopify.github.io/draggable/
- [ ] Keyboard shortcuts: https://github.com/madrobby/keymaster?ref=vanillalist
