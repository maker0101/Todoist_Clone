# Questions

### 1. Memory leak Error

When creating, deleting or checking a task as done, I sometimes (not always) get the follwing error message:

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`

Of course I tried to google it and read some interesting material about it, like: https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i

However, I'm unable to locate the specific piece of code that's causing the error and thus I'm unable to start thinking about solving it. Could you please help me out with this one? And teach me how I can find and fix it next time by myself?

### 2. Question: Why do I run into a "RangeError: Maximum call stack size exceeded" when uncommenting the lines in useProject?

### 3. Is it ok to have useEffect inside a function which is inside a custom hook (see useModal))?

### 3. state/setState as function arguments (example below needs to be updated)

If I understood your past comments correctly, you advice against passing state and setState as arguments to another function. I agree that it doesn't look elegant. But what to do in a situation like in "AddTask.js":

`handleTaskFormOpen(isTaskFormOpen, setIsTaskFormOpen)`

Here I have the folliwing situation:

- the state `isTaskFormOpen`is defined in `AddTask.js` (it's not in a context, thus hard to access from `useTaskForm.js`)
- `handleTaskFormOpen` is defined in `useTaskForm.js` (and thus can not directly access `isTaskFormOpen` and `setIsTaskFormOpen`)
- `handleTaskFormOpen` is doing more than just open the taskForm. Thus toggling the taskform directly in `AddTask.js` is not an option

I know I could put `isTaskFormOpen` and `setIsTaskFormOpen` in a React context or use another state management library, but this has it's downsides as well.

**How can I avoid passing the state/setState in a situation like this?**

### 4. Pure functions or less code? (example below needs to be updated)

In `useCrudTasks.js` I noticed that all my functions (e.g. createTasks, deleteTasks, ...) have `db`as argument. I am importing `db`in the file as well.

From the perspective of pure functions it seems right to leave `db` in as function argument. But it's unnecessary code I could remove.

What would you recommend in situations like these. Leave argument in and have pure functions, or remove argument and have less code?

### 5. Which State Management Library should I learn first

I'm slowly feeling the pain and limitations of React regarding state management.

Which state management library should I learn (first)? There seems to be a huge variety.

From what I've read so far:

- Redux: most popular, but a bit dated and clunky
- Zustand: supposed to be great
- Jotai: seems great too
- Immer.js: Don't really know if it fits

What I'm looking for at the moment is a way to define my most important states in a central space somewhere and then being able to get and set these states from anywhere in my application easily.


