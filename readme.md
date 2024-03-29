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

## 4 - Create a new interface
No fancy scripts to generate new type definitions using react.
```
// src/app/housinglocation.ts on Angular
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
```
```
// src/types/index.ts on React
... same as with Angular
```
In practice, local type definitions are sometimes found on component folders on many React projects, but when starting a new project, like in this case, we will declare it on index file of types.

### Creating a mock house
Ok here's where the fun starts. In Angular we would declare the class and specify the data the component receives as input.
```
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
```
In React, using functional components, we declare that as we would do with any parameters of any given function. Those params are named [props]('https://react.dev/learn/passing-props-to-a-component') by convention, and there are several different ways to do that, a matter of convenience:
```
import { HousingLocation as HousingLocationProps } from '../types'
...
const HousingLocation = (props: HousingLocationProps) => {
  ...
}
```
You can later request those `props` or `function arguments values` as `props.city` or just deconstruct them when declaring them. This way you have better visibility but linters will ruin your life if you are not using **ALL** of them in this file after declaring them.
```
import { HousingLocation as HousingLocationProps } from '../types'
...
const HousingLocation = ({
  id,
  name,
  city
  ...
}: HousingLocationProps) => {
  ...
}
```
This way you could access them just like `city`.

By the way, I named the interface as `HousingLocationProps` instead of `HousingLocation` since component and interface were named the same in Angular, and here, we can not re-declare same variable.

At this stage, Angular app renders but React app will crash. That's because `src/components/Home.tsx` is rendering `src/components/HousingLocation.tsx` and expected props are not passed yet. We can also make those props optional but there's no point to do so here.

## 5, 6 and 7 - Adding input parameter to the component, Adding a property binding to a component’s template and adding dynamic values to templates.
```
// src/app/housing-location.component.ts in Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
```

```
// src/components/HousingLocation.tsx in React
import './HousingLocation.css'
import { HousingLocation as HousingLocationProps } from '../types'

const HousingLocation = (props: HousingLocationProps) => {
  return (
    <section className="listing">
      <img className="listing-photo" src={props.photo} alt={`Exterior of ${props.name}`} />
      <h2 className="listing-heading">{props.name}</h2>
      <p className="listing-location">{`${props.city}, ${props.state}`}</p>
    </section>
  )
}

export default HousingLocation
```
New things to note:
- We access properties which in this case are function parameters as explained on previous point. The syntax here requires a pair of curled brackets only.
- On official angular tutorial the `alt` attribute was redundant and didn't followed best practices. Screen-readers already announce `img` tags as image, therefore is redundant to use words such as "picture", "photo" or "image" when naming them.
```
// Angular
<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
```
```
// React
<img className="listing-photo" src={props.photo} alt={`Exterior of ${props.name}`} />
```
```
// src/app/home/home-component.ts in Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

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
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
    `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
```
```
// src/components/Home.tsx in React
import './Home.css'
import HousingLocation from './HousingLocation'
import { HousingLocation as HousingLocationProps } from '../types';

const baseUrl = 'https://angular.io/assets/images/tutorials/faa'

const hardcodedHousingLocationProps: HousingLocationProps = {
  id: 9999,
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: `${baseUrl}/example-house.jpg`,
  availableUnits: 99,
  wifi: true,
  laundry: false,
};

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
        <HousingLocation {...hardcodedHousingLocationProps} />
      </section>
    </>
  )
}

export default Home
```

## 8 - Use *ngFor to list objects in component
```
// src/app/home/home.component.ts in Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

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
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
    `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [// hardcoded array]
}
```
```
// src/components/Home.tsx in React
import './Home.css'
import HousingLocation from './HousingLocation'
import { HousingLocation as HousingLocationProps } from '../types';

const baseUrl = 'https://angular.io/assets/images/tutorials/faa'

const mockLocations = [// hardcoded array]

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
        {mockLocations.map((location: HousingLocationProps) => (
          <HousingLocation {...location} />
        ))}
      </section>
    </>
  )
}

export default Home
```
New things to note:
- *ngFor is cool, javascript array methods are better.

## 9 Angular services

```
// src/app/housing.service.ts in Angular
import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
```
```
// src/services/housing.ts in React
import { HousingLocation } from '../types'

const baseUrl = 'https://angular.io/assets/images/tutorials/faa'

const MOCK_HOUSING_LOCATION_LIST: HousingLocation[] = [
  {
    id: 0,
    name: 'Acme Fresh Start Housing',
    city: 'Chicago',
    state: 'IL',
    photo: `${baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    availableUnits: 4,
    wifi: true,
    laundry: true
  },
  {
    id: 1,
    name: 'A113 Transitional Housing',
    city: 'Santa Monica',
    state: 'CA',
    photo: `${baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    availableUnits: 0,
    wifi: false,
    laundry: true
  },
  {
    id: 2,
    name: 'Warm Beds Housing Support',
    city: 'Juneau',
    state: 'AK',
    photo: `${baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    availableUnits: 1,
    wifi: false,
    laundry: false
  },
  {
    id: 3,
    name: 'Homesteady Housing',
    city: 'Chicago',
    state: 'IL',
    photo: `${baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    availableUnits: 1,
    wifi: true,
    laundry: false
  },
  {
    id: 4,
    name: 'Happy Homes Group',
    city: 'Gary',
    state: 'IN',
    photo: `${baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    availableUnits: 1,
    wifi: true,
    laundry: false
  },
  {
    id: 5,
    name: 'Hopeful Apartment Group',
    city: 'Oakland',
    state: 'CA',
    photo: `${baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    availableUnits: 2,
    wifi: true,
    laundry: true
  },
  {
    id: 6,
    name: 'Seriously Safe Towns',
    city: 'Oakland',
    state: 'CA',
    photo: `${baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
    availableUnits: 5,
    wifi: true,
    laundry: true
  },
  {
    id: 7,
    name: 'Hopeful Housing Solutions',
    city: 'Oakland',
    state: 'CA',
    photo: `${baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
    availableUnits: 2,
    wifi: true,
    laundry: true
  },
  {
    id: 8,
    name: 'Seriously Safe Towns',
    city: 'Oakland',
    state: 'CA',
    photo: `${baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
    availableUnits: 10,
    wifi: false,
    laundry: false
  },
  {
    id: 9,
    name: 'Capital Safe Towns',
    city: 'Portland',
    state: 'OR',
    photo: `${baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
    availableUnits: 6,
    wifi: true,
    laundry: true
  }
]

const getAllHousingLocations = (): HousingLocation[] => {
  return MOCK_HOUSING_LOCATION_LIST;
}

const getHousingLocationById = (id: number): HousingLocation | undefined => {
  return MOCK_HOUSING_LOCATION_LIST.find(housingLocation => housingLocation.id === id);
}

const housingService = {
  getAllHousingLocations,
  getHousingLocationById
}

export default housingService
```

## 10 Add routing
Here I'll use most populart React library for routes: react-router. Although React was made to build SPA and most of the work I've seen requiring dynamic routes where also SSR projects built with NextJS, React-router still very common for CSR projects.

```
// src/main.ts in Angular
/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));
```
```
// src/app/routes.ts in Angular
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
```
```
// src/app/app.component.ts in Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
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
// src/app/details/details.component.ts in Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <p>
      details works!
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
```
In contrast in React:
```
// src/index.tsx in React
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppRoot from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Details from './components/Details'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
  },
  {
    path: "details/:id",
    element: <Details />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
```
```
// src/components/Details.tsx in React
const Details = () => {
  return (
    <p>Details works!</p>
  )
}

export default Details
```