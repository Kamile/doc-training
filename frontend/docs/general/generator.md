This boilerplate contains a code generator to help you code faster in a more standardized way. Below is the list of commands available and their effect.

## Component

```
yarn generate component
```

Generates a folder containing a component. For exemple, generating a component named Foo will create the following:

```
components/
├─ Foo/
   ├─ tests/
      ├─ Foo.test.js
      ├─ FooWrapper.test.js
   ├─ Foo.js
   ├─ FooWrapper.js
   ├─ index.js
```

And you'll be able to import Foo with `import Foo from 'components/Foo'` (or better, `import { Foo } from 'components'` if you export Foo from `components/index.js`).

## Nested component

```
yarn generate component:nest
```

Generates a component inside an existing component folder. For exemple, generating a connected component named Bar and choosing the Foo folder will create the following:

```
components/
├─ Foo/
   ├─ tests/
      ├─ Bar.test.js
      ├─ BarWrapper.test.js
      ├─ Foo.test.js
      ├─ FooWrapper.test.js
   ├─ Bar.js
   ├─ BarWrapper.js
   ├─ Foo.js
   ├─ FooWrapper.js
   ├─ index.js
```

You may optionally edit `Foo/index.js` to export Bar as a named export, which allows you to import it from elsewhere with `import { Bar } from 'components/Foo'`.

## Redux saga

```
yarn generate module:saga
```

Generates a saga and the folder containing it, if necessary. For example, to generate a saga taking care of login:

```
yarn generate module:saga
? What should it be called? login
```

Which will create the following:

```
modules/
├─ login/
   ├─ login.saga.js
```

## Redux actions

Similarly to the saga/reducer/selectors/services:

```
yarn generate module:actions
? What should it be called? login
```

## Redux reducer

Similarly to the saga/actions/selectors/services:

```
yarn generate module:reducer
? What should it be called? login
```

## Redux selectors

Similarly to the saga/actions/reducer/services:

```
yarn generate module:selectors
? What should it be called? login
```

## Services

Similarly to the saga/actions/reducer/selectors:

```
yarn generate module:services
? What should it be called? login
```
