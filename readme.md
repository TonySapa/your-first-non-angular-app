# Stupid challenge for fun: "Your first non-angular app"
The goal is to go through the official angular tutorial on https://angular.io/tutorial/first-app named "Your first angular app" and try to achieve same outcome but using React/TypeScript instead of Angular/TypeScript while observing and noting similarities and differences between Angular and React. Why? I don't know... I'm just bored 🤷🔫🪀🎲🎮🕹️🏓

## Introduction https://angular.io/tutorial/first-app#build-your-first-angular-app

React is not a framework so we will skip this step.

## 1 - Hello World https://angular.io/tutorial/first-app/first-app-lesson-01#lesson-1-hello-world

In order to replicate the initial boilerplate and other code provided at the beginning of the tutorial I will chose the most popular boilerplate to start a react application with TypeScript: https://create-react-app.dev/docs/adding-typescript/ It comes with a few dependencies but none of them are irrelavant for this project
```
...
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^13.0.0",
"@testing-library/user-event": "^13.2.1",
"@types/jest": "^27.0.1",
"@types/node": "^16.7.13",
"@types/react": "^18.0.0",
"@types/react-dom": "^18.0.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
"typescript": "^4.4.2",
"web-vitals": "^2.1.0"
...
```

We start the project using that boilerplate by using command
`yarn create react-app your-first-non-angular-app --template typescript`

Now lets replicate the initial codebase and folder structure but in a way that makes sense for React applications. A few things to note:

- Assets found on `src/assets` of the Angular project will be located on `public` folder right on the root of the project.
- `src/app.component.css` will be renamed to `src/App.css` and we will update imports. The reason to do these is purely convention. In React, all components are named **Uppercase** (When declaring them, and also as file names) and these would be the styles of the top parent component, the `App` component. Just to be a little picky we will rename `src/styles.css` to `src/index.css`
- Next I'll re-write `src/app.component.ts`
```
// In Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Default</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
```
```
// In React as a functional component
const AppRoot = () => {
  return (
    <h1>Default</h1>
  )
}

export default AppRoot
```
Without forgetting to update `src/index.tsx` import right afterwards.
OK. Ready to start!

#### Replacing title element
React also generates a main html file, this part is similar, we just update `src/public/index.html`

#### Modifying rendered title
Since React functional components are precisely that: functions that returns JSX content, this part is even easier:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Hello world!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
```
```
// In React as a functional component
const AppRoot = () => {
  return (
    <h1>Default</h1>
  )
}

export default AppRoot
```

## 2 - Create Home component
React package itself doesn't come with these handy commands such as `ng generate component home --inline-template --skip-tests` but you can always create your own ones:
- https://github.com/TonySapa/script-init-component
- https://www.npmjs.com/package/@tonisanchez.dev/init-component
- https://yarnpkg.com/package?q=%40tonisanche&name=%40tonisanchez.dev%2Finit-component

#### Updating imports on `src/app/app.component.ts` aka `src/App.tsx` yep, jsx file with typescript
```
// src/app/app.component.ts In Angular
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Updating imports
  imports: [
    HomeComponent,
  ],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home />
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
```

```
// src/App.tsx In React
import Home from './components/Home'

const AppRoot = () => {
  return (
    <main>
      <header className="brand-name">
        <img className="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section className="content">
        <Home />
      </section>
    </main>
  )
}

export default AppRoot
```
Since we haven't created yet the Home component, App will crash at this point until there's a default export on `src/components/Home.tsx`

Things to notice on this step:
- As always, React doesn't need to import the core functionality for components.
- With Angular you will update `template` field of the component class, in React you will just edit what response you want the component to give you, using JSX syntax.
- In React, CSS classes selectors on html tags are named `className` instead of `class`
- Notice `img` element, JSX baby, closed tags.
- In React, assets are on `public` directory and can be reached as `/`
- In Angular, we import the styles by updating `styleUrls` field of the component class. In React we import the stylesheet on top as `import './App.css'`

#### Creating Home component
```
// In Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
```
```
// In React as a functional component
import './Home.css'

const Home = () => {
  return (
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button className="primary" type="button">Search</button>
      </form>
    </section>
  )
}

export default Home
```
Things to note on this step:
- As always, React doesn't need to import the core functionality for components.
- With Angular you will update `template` field of the component class, in React you will just edit what response you want the component to give you, using JSX syntax.
- Notice `input` element, JSX baby, closed tags.
- In Angular, we import the styles by updating `styleUrls` field of the component class. In React we import the stylesheet on top as `import './Home.css'`

### So far:
![Captura de pantalla 2024-01-25 192230](https://github.com/TonySapa/your-first-non-angular-app/assets/49716479/4ee1d4a5-252f-4227-b12a-9fb4a7b24440)

## 3 - Create and use `housing-location` component
```
// src/app/housing-location.component.ts in Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

}
```
```
// src/components/HousingLocation.tsx in React
const HousingLocation = () => {
  return (
    <p>HousingLocation works!</p>
  )
}

export default HousingLocation
```
Nothing new to add about Angular/React that hasn't been said on previous step.
Next, the update of Home component:

```
// src/app/home.component.ts in Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
    `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

}
```
```
// src/components/Home.tsx in React
import './Home.css'
import HousingLocation from './HousingLocation'

const Home = () => {
  return (
    <>
      <section>
        <form>
          <input type="text" placeholder="Filter by city" />
          <button className="primary" type="button">Search</button>
        </form>
      </section>
      <section className="results">
        <HousingLocation />
      </section>
    </>
  )
}

export default Home
```
New things to note on this step:
- Since JSX require a parent element I wrapped both section elements making use of [React Fragments]('https://react.dev/reference/react/Fragment')
- The component is imported on top and wrote as a self-closed tag using JSX syntax.