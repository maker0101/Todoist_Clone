# General

This project is a clone attempt of Todoist: https://todoist.com

It is inspired by a YouTube tutorial of Karl Hadwen - though significant changes have been made: https://youtu.be/HgfA4W_VjmI

It's under heavy development at the moment and much is missing still.

## Features implemented

- [x] Clone Todoist styling
- [x] Firebase/Firestore setup & get tasks and projects dynamically from Firestore
- [x] Add new tasks
- [x] Delete tasks
- [x] Check tasks
- [x] Counts tasks per project
- [x] Preserve tasks in order of time created
- [x] Filter tasks by project
- [x] Sidebar: Toggle show/hide
- [x] Due dates for tasks

## Questions

#### 1. Error on initial load because `selectedProject.name` not defined

In `Project.js` (ca. line 28) I have to include `{selectedProject && selectedProject.name}`, otherwise I get an error.

I think the reason is the follwoing: When I `console.log(selectedProject)` I see that the state is correctly initialized at first as empty string, but then becomes `undefined` for a moment and only then gets updated with the selected project. But why is there a phase of undefined? How to avoid it, so I can just write `{selectedProject.name}`?

Or is it ok and done in real life to write `{selectedProject && selectedProject.name}` because its unavoidable?

#### 2. Passing the same props over and over

In `Content.js`(and in many other places) I'm passing the same props over and over to it's child components, e.g.:

```javascript
tasks={props.tasks}
setTasks={props.setTasks}
projects={props.projects}
setProjects={props.setProjects}
```

This does not seem to go well with the DRY principle. Is this still acceptable and common in the real world? Or do techniques exist to deal with it? I could only think of passing the props as a single object to child components as a potential workaround.

#### 3. Defining state on highest App.js level (for tasks, projects)

I've raised the state of tasks and projects to App.js, because I noticed I'll need it's information in multiple parts of my application. Is this common practice to have states in App.js or should it be lower and passed differently from component to component instead of passing it down from the top?

## Known issues/bugs

- [ ] Adding multiple tasks in Inpox view not working
- [ ] Sidebar: Project dots colors not working anymore -> always yellow
- [ ] Overflow for long task lists -> Add scrollbar

## Planned Features

- [ ] Edit existing Tasks
- [ ] CRUD for projects
- [ ] Sidebar: Turn Projects section into working accordeon
- [ ] Adding Tests

## Maybe

- [ ] Make app responsive
- [ ] Remember user settings (e.g Sidebar hidden, last navitem/project selected, ...)
- [ ] User authentification
- [ ] Search, dynamic sorting and filtering, ... https://listjs.com/?ref=vanillalist
- [ ] Drag and drop projects and tasks: https://shopify.github.io/draggable/
- [ ] Keyboard shortcuts: https://github.com/madrobby/keymaster?ref=vanillalist
