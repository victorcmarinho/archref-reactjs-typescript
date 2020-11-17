# React Reference Architecture

## Develop
`npm start`
[https://localhost:3000]

## Build
`npm run build`

## Unit Tests
`npm test`

**This is your source code tree:**

```
src
|-- assets
|-- components
|-- pages
|-- routes
|-- services
|-- utils
|-- App.tsx
|-- index.tsx
...
```

Every item created inside components,  pages... will be a folder with their code, the tests file, and to keep your code simple and short you can add extra files for helpers or styles it this folder. The folder structure will look like this:

```
...
components
|-- YourComponent
    |-- index.tsx
    |-- styles.ts
    |-- YourComponent.test.ts
...
```

`./assets`

Here will be all your project assets as images, icons...

`./components`

Components are presentational only elements, grouping UI items

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

`./services`

Services are responsible to handle the connection with all external elements, like APIs

`./utils`

Directory to keep all utils functions to share all over the project
