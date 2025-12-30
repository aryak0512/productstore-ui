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

#### Step 2: Add the @tailwindcss/vite plugin to your Vite configuration.

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