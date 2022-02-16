# Questions

### 1. Uncommenting line 19 in `SignUp.jsx` throws errors

When uncommening line 19 in `SignUp.jsx`and visiting `/signup`, errors are thrown, e.g.:

- `Uncaught FirebaseError: Function where() called with invalid data...`
- `useTasks.js:23 Uncaught TypeError: Cannot read properties of null (reading 'uid')`

I guess it's happening, because when trying to 'import' `seedDb` from `useSeedDb`, useSeedDb is executed and in turn executes `useProjects` which then executes a useEffect where `getProjectsFromDB` is executed without having a `user` state set yet (which is ok, becasue after all we are on the SignUp page and want to create a user).

Now, I can't figure out what to do about it. How to import a function from a hook without executing it and all it's dependencies?

### 2. Pure functions vs. less code

A more general questions that I'm asking myself for some time now: What to do in a pseudo code situation like this:

- I have multiple functions that take in the same (global) parameter (e.g. db) and are defined in the same file (e.g. taskCRUD.js)
- These functions are called from many different places in the codebase.

Now I can define these functions with 2 approaches:

1. Pure function approach (add db as parameter to all of them)
2. Single import approach (import parameter only once int the file where functions are declared)

#### Approach 1: Pure functions

taskCRUD.js

```js
export const addTask = (db, ...) => {...db...}
export const updateTask = (db, ...) => {...db...}
export const deleteTask = (db, ...) => {...db...}
```

Pro:

- functions are pure and tus easier to unit test, debug, ...

Con:

- Function has more parameters -> this can hurt code readability quite a bit, especially when parameter names are longer and many more parameters are needed (e.g. for each setter fucntion invoked). It hurts readability in the place where the function is defined, but also where it is called.
- Significantly more 'boilerplate' code in all files, where functions get invoked (e.g. when parameter comes from Context...then I need to import useContext, the Context itself, call useContext etc.)

#### Approach 2: Single import

taskCRUD.js

```js
import db from '...'

export const addTask = (...) => {...db...}
export const updateTask = (...) => {...db...}
export const deleteTask = (...) => {...db...}
```

Pro:

- see above

Con:

- unpure

What would you recommend in situations like these? Many thanks :-)!
