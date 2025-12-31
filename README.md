### Create react app:

```shell
npm create vite@latest productstore-ui
```

### Run the project in dev mode:

```shell
npm run dev
```

### Download all modules:

```shell
npm install
```

### Build the project for production:

```shell
npm run build
```

### Catch bad practices

```shell
npm run lint
```

## Notes :

1. React can only understand crateElement syntax, it does not take responsibility of converting JSX to Javascript
   Process of converting JSX to JS is called transpilation. Babel, Webpac, Esbuild are the well known transpilation
   tools.
2. Vite uses 'esbuild' for transpilation, it is faster than babel & written in Golang
3. public VS static folder : Vite will not optimise public folder, it will only optimise contents of src/assets

### Installing fontawesome library

```shell
npm i --save @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

### Installing tailwindcss:

#### Step 1:

```shell
npm install tailwindcss @tailwindcss/vite
```

#### Step 2: Add this line to App.css

```shell
@import "tailwindcss";
```

#### Step 3: Add the @tailwindcss/vite plugin to your Vite configuration.

```shell
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

#### Installing Axios:

```shell
npm i axios
```

### React hooks:

```shell
  1. useEffect(setup, dependencies?)
```

- lets you synchronise the component with an external system. Eg API call during mounting of DOM

```shell
  2. const [var, setVar] useState(initialValue)
```

- The set() function of `useState()` triggers a re-render of the component
- The initial value for `useState()` can be a setUp method as well. E.g. : `() => populateTodos()`

```shell
  3. const [cachedValue] = useMemo(calculation, dependencies)
```

- Used when we want to cache certain expensive calculations/operations during re-rendering of components
- calculation can be a method

### Dark mode

- Step 1 : Add `@custom-variant dark (&:where(.dark, .dark *));` to the css file where `@import "tailwindcss"` is
  mentioned (App.css)
- Step 2 : Add prefix `dark:` to all tailwind utility classes
- Step 3 : Add or remove `dark` from top level HTML element as per state value