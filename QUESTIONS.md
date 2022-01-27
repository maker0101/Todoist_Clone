# Questions

### 1. Memory leak Error

When creating, deleting or checking a task as done, I sometimes (not always) get the follwing error message:

`Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.`

Of course I tried to google it and read some interesting material about it, like: https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i

However, I'm unable to locate the specific piece of code that's causing the error and thus I'm unable to start thinking about solving it. Could you please help me out with this one? And teach me how I can find and fix it next time by myself?

### 2. RangeError

Why do I run into a "RangeError: Maximum call stack size exceeded" when uncommenting the line 24 in `useProjects`?

### 3. useEffect inside a function inside custom hook

Is it ok to have useEffect inside a function which is inside a custom hook (see `useModal` line 6))?
