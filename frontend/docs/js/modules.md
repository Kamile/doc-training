# Modules

It is not very practical to have a `reducers` folder, a `sagas` folder, a `selector` folder and a `actions` folder when the `login` saga uses the `login` actions and the `login` selectors to interact with the `login` reducer.

Rather, it is better to colocate those in a common folder following the architecture below:

```
modules/
├─ language/
├─ routing/
├─ login/
   ├─ tests/
   ├─ login.actions.js
   ├─ login.reducer.js
   ├─ login.sagas.js
   ├─ login.selectors.js
   ├─ login.services.js
```

We keep `login` in the file names for the only reason that it makes them **much** easier to find in an IDE or editor. Feel free to edit the generator if you don't like that.

The `.services.js` is used to put services in, functions that are useful but don't quite fit in a component or a redux file.
