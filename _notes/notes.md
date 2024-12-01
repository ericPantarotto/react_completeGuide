<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD024 -->
# React - The Complete Guide 2024 (incl. NextJS, Redux)

## Getting Started

### What is React.js?

**React.js is a JavaScript library for building user intefaces**.

As you navigate around React websites, you'll see that all these transitions are super smooth, pretty much instant, and you never have this effect where you seem to load a new page.

To some extent, it therefore feels like a mobile app, because in mobile apps, getting instant feedback and having smooth transitions is pretty much the standard.

#### Using "just JavaScript" typically isn't a great option

- writing complex JavaScript code quickly becomes cumbersome
- complex JavaCcript code quickly become error-prone
- complex JavaCcript code often is hard to maintain or edit

### ReactJS vs "Vanilla JavaScript"

With React, in the example provided, in that app.js file, we just got that HTML code with  dynamic elements blended into the HTML code. It defines different states of the different HTML elements, such as an active CSS class added to a button.

- React , you define the target UI states - not the steps to go there (Declarative)
- with JavaScript, you define the steps, not the goal (Imperative)

### Course Resources

**<span style='color: #a3842c'>Link:** [https://github.com/academind/react-complete-guide-course-resources](https://github.com/academind/react-complete-guide-course-resources)

### Creating React Projects

**<span style='color: #a3842c'>Link:** [Codesandbox_react](react.new)

---

if you prefer to use **VSCode** editor, you need to have installed *NodeJS*, as *ReactJS* uses tool such as *Vite*

**<span style='color: #a3842c'>Link:** [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

`npm create vite@latest first_react_app -- --template react`

- `cd` into project
- `npm i`
- `npm run dev`

#### ESLINT REACT/VITE

By using `npm create vite...` above, you also enable **eslinting**.

**<span style='color: #a3842c'>Link:** [https://eslint.org/docs/latest/use/getting-started](https://eslint.org/docs/latest/use/getting-started)

#### ESLINT NEXTJS

**<span style='color: #a3842c'>Link:** *NextJS*: [https://www.youtube.com/watch?v=AsM0oxyJ6I8]

```bash
npx create-next-app@latest 25_nextjs_foodies //NOTE: to avoid any conflict, DON'T set-up Eslint in the configuration menu
npm init @eslint/config@latest
npm i @next/eslint-plugin-next //NOTE: optional     
```

If you have not configured eslint from the `npx` command above, and not run `@next/eslint-plugin-next`, the `eslint.config.mjs` should be like below, after adding the *react-in-jsx-scope* rule:

```javascript
/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
```

**<span style='color: #875c5c'>IMPORTANT:** make sure to add your rules at the end, so that they don't get overriden by other **recommended rules of other plugins**. **<span style='color: #a3842c'>Link:** [https://stackoverflow.com/questions/72295153/how-to-turn-off-react-react-in-jsx-scope-rule]

Eslint react/prop-types: [https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md]
Eslint react/react-in-jsx-scope: [https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md]

`npm run lint`

`CTRL+SHIFT+P: Eslint Restart Eslint Server`

PropTypes validation:

- **<span style='color: #a3842c'>Link:** *npm package prop-types*: [https://www.npmjs.com/package/prop-types]
- **<span style='color: #a3842c'>Link:** *Legacy React Typechecking migraiton v15.5*: [https://legacy.reactjs.org/docs/typechecking-with-proptypes.html]
- **<span style='color: #a3842c'>Link:** *ESLint react/proptypes*: [https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md]

**<span style='color: #a3842c'>Link:** *NextJS/Typescript*: [https://www.youtube.com/watch?v=ILzEhHJVAQ4]

#### JavaScript in Visual Studio Code

- param

```javascript
export default function Signup() {
  /**
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // ...
  }
// ...
}
```

- local variable

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  /**
   @type {string}
    */
  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;

  const emailIsInvalid = !enteredEmail.includes('@');
  console.info(enteredEmail, enteredPassword);
};
```

**<span style='color: #a3842c'>Link:** [https://code.visualstudio.com/Docs/languages/javascript#_intellisense] (<https://code.visualstudio.com/Docs/languages/javascript#_intellisense>)

**<span style='color: #a3842c'>Link:** [https://jsdoc.app/](https://jsdoc.app/)

### Why do we need a special project setup?

Because when writing React code,

you'll use this special HTML in JavaScript feature, this syntax is called **JSX**.

It unfortunately doesn't work in the browser, So therefore the code you write actually must be transformed to code that does run in the browser.

![image info](./1_sc1.png)

That's the reason why you need to create React projects with extra tools like *Vite*.

because it's those tools which do transform your code to code that can be executed efficiently in the browser.

That's why you can't just create a basic HTML and script file but why you instead do need those extra tools.

## JavaScript Refresher

### Adding JavaScript to a Page & How React Projects differ

#### JavaScript can be executed in many environments

![image info](./2_sc1.png)

#### Adding JavaScript Code to a Website

- between `<script>` tags
- via `<script>` **Import**

`<script src="assets/scripts/app.js" defer type="module"></script>` unlocks 1 very important syntax: *ES6 Import* syntax.

**<span style='color: #495fcb'> Note:** when you're working on a React project, you will almost never add these script tags to your HTML file on your own, because React projects almost always use a build process which as part of that build process, injects these script tags into the HTML code for you.

### React Projects use a Build Process

`react-scripts` package provides a bunch of tools that take your code and transform it behind the scenes before it's then injected into the browser. Or to be precise, before it's then injected with help of a script tag into the HTML file.

if you inspect a web page, you can find script elements, generated and injected into this HTML file automatically behind the scenes by this built process that's running in the background.

#### Your code is transformed before it's handed off to the browser / Why React projects typically require a build process that transforms your code

**<span style='color: #495fcb'> Note:** *Vite*, *create-react-app, ... , give you such a build process (no custom setup or tweaking needed)

- raw unprocessed React Code won't execute in the browser, mostly because *ReactJS* uses this special `JSX` feature (HTML code written in JavaScript files, this is not a standard JavaScript feature).
- In addition, the could would not be optimized for production (e.g, not minified, though valid code that's highly optimized to be as short and small as possible to reduce the amount of code that has to be downloaded by the website visitor)

It's this development server which is watching your source code behind the scenes, and which is then also kind of transforming that source code behind the scenes and which is then adjusting the HTML file to contain these script elements that do then load that transformed source code.

**<span style='color: #495fcb'> Note:** that's also the reason why you also need to install NodeJS on your system in order to work on React projects.

Because NodeJS is not just used to install packages with the NPM command or to create projects with the NPX command, but instead it's also used behind the scenes by these tools that are used by that build process that's running behind the scenes.

So NodeJS is also needed and used behind the scenes to make sure that your React code gets transformed.

### Import & Export

When working in React projects, you will actually see that the extension, `.js` typically, is omitted. That's the case again, because of that build process that's running behind the scenes, which will add the extension.

If you are writing just JavaScript code without such a build process, you do need to add it on your own.

For React projects, if you explore the automatically injected script text, you don't find this type module attribute on them.

The reason for that simply is that this build process will actually take all your imports and exports and basically merge all these separate files that you have during development into one big file or a bunch of big files, which are then imported with the old school syntax in the right order.

This is done to also make this code execute in browsers that don't natively support this import export syntax, and also so that the browser doesn't have to download dozens of small JavaScript files, but instead just a couple of bigger files, which typically is more efficient.

But if you have a vanilla JavaScript app without such a build process, you do need to add this type module attribute here.

**<span style='color: #875c5c'>IMPORTANT:** If you use the default syntax, you must have only one `default export` per file.

with the default export and the respective import syntax, it is especially useful if you only have one one function, or one value in the file to export.

### Variables & Values

#### There are different types of values

- string (text)
- number (positive or negative , with decimal point (float) or without (integer))
- boolean
- Null & undefined

Variables store data, they are data containers, they have:

- variable identifier
- value (with a type)

#### Why use variables?

- reusability
- readability

if that value ever needs to change, I only need to change it in one place instead of multiple places.

**<span style='color: #495fcb'> Note:** constants (`const`) work like variables (`let`), they are data containers. But the key differences that constants must not be reassigned.

### Functions & Parameters

Functions must only have one return statement at most, functions without `return` implicitly return `undefined`

### More on the Arrow Function Syntax

to return a JS object with an arrow function:

```javascript
number => ({ age: number }); // wrapping the object in extra parentheses
```

### Object & Classes

JS Objects can have:

- fields
- methods

You can access fields and methods within this object using the `this` keyword.

As an alternative to JS Objects, you can also create blueprints by using the special `class` keyword, that can then later be used to create the actual objects.

### Arrays & Array Methods

you can have arrays of arrays

- push
- findIndex
- map

**<span style='color: #495fcb'> Note:** `npx live-server` allows you to run *live-server*.

*npx* runs a command from a local or remote npm package

### Destructuring

**<span style='color: #a3842c'>Link:** [mdn webdocs/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Destructuring in Function Parameter Lists

The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:

```javascript
function storeOrder(order) {
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
}
```

Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

```javascript
function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}
```

### Spread Operator

**<span style='color: #a3842c'>Link:** [mdn webdocs/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Manipulating DOM

Being able to reach out to the loaded website and read and manipulate DOM Elements at runtime is of course a strength of JavaScript.

But it is also something we won't do when using React, because React will do it for us, because we write React code in that declarative way

### Functions as values

if you define a function in advance and you pass it by just using its name,so you don't add parentheses here.

You omit those parentheses because by just using the name here you're passing the function as a value to this function.

If you would add parentheses here, you would instead make sure that this function handleTimeout here gets executed immediately at the point of time when this timer is set, in this case here, and therefore it would be the return value of that function.

```javascript
//anonymous function
setTimeout(() => console.info(' Timed Out! Anonymous function'), 2000);

// equivalent to:
function handleTimeOut() {
  console.info(' Timed Out! Function as value.');
}
setTimeout(handleTimeOut, 2000);

// equivalent to:
const handleTimeOut2 = (_) => console.info(' Timed Out! Function as value.');

setTimeout(handleTimeOut2, 2000);
```

When you define such an anonymous function, you're also not executing it yet. Instead, you're also just defining it, and you're passing that defined function to set.Timeout. **You're passing a handler to that function, you're not executing it.**

**<span style='color: #875c5c'>IMPORTANT:** passing functions as values is not limited to built-in functions such as `setTimeout()`, but also to your own functions.

### Functions Defined inside of functions

you can execute the inside function within the parent function, but you can't execute it outside.

Because it's scoped inside its parent function, which means it's only available in there, just as a variable you would define inside a scope would only be available inside of the scope it was defined in and not outside of it.

### Reference vs. Primitives

Strings, numbers, Booleans are all primitives.

What's special about primitives in JavaScript is that we can't edit them.

a new primitive is created each time:

- you think you update them
- apply any native methods to such types

Arrays / Objects in JavaScript are so-called reference values, simply means that in a variable you don't store the value, but instead the address of that value in memory.

So that array is stored somewhere in memory, so in the memory of your computer, and it's the address of that place in memory that's stored in this constant.

If you apply any native methods on an Array. The array in memory changes, the address does not. That's all the reason why I can edit an array despite using declaration `const`.

With primitive values like this string, you could instead say that the string itself is stored in the variable.

#### Reference Value

![image info](./2_sc2.png)

### JS Array Functions

- map()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
- find()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find>
- findIndex()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex>
- filter()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>
- reduce()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b>
- concat()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b>
- slice()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice>
- splice()  => <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice>

## React Essentials: Components, JSX, Props, State & More

### It's all about Components

So React apps are in the end built by combining Components.

A component wraps:

- HTML
- CSS
- JavaScript Logic

**<span style='color: #495fcb'> Note:** And together, those languages and code pieces then define and control a part of the UI.

This allows you, the developer, to split up complex user interfaces into smaller, more manageable parts, which, at least potentially, may also be reused in different places of the UI.

#### Why Components?

- Reusable Building blocks: Create small building blocks & Compose the UI from them.  
  If needed: Reuse a building block in different parts of the UI
- Related Code lives together: HTML + CSS + JS. Since JS influences the output, storing JS  + HTML together makes sense
- separation of concerns: different components handle different data & logic. vastly simplifies the process of working on complex apps.

### Setting-up the Project

`npm outdated -l --include-dev`

### JSX & React Components

**<span style='color: #a8c62c'> index.html** loads a javascript file

```html
<script type="module" src="/src/index.jsx"></script>
```

**<span style='color: #a8c62c'> index.jsx**,

```javascript
ReactDOM.createRoot(entryPoint).render(<App />);
```

`.jsx`: JavaScript Synntax Extension, used to describe & crate HTML elements in JavaScript in a **declarative** way, but that browsers do not support.

React projects come with a build process that transforms JSX code to code that work in *browsers*. **It's important to understand that it's really just that build process that cares about this extension**.

`App.jsx` is a React component, which are JavaScript functions. **Component Functions must follow 2 rules**:

- name must start with an uppercase
- returns **renderable** content (the function must return a value that can be rendered; displayed on screen by React)

### Components & File Extensions

you'll also find React projects that don't use .jsx but instead just .js as a file extension. And in those .js files, you'll also find JSX code. Because it simply depends on the underlying build process which extension is expected when using this JSX syntax in a file.

### How React handles Component & How it builds a Component Tree

#### How Components get rendered

- `Root component`: the first component to be analyzed & rendered by React
- `Nested component`: a child component of its parent component

**<span style='color: #495fcb'> Note:** each component could then contain even more child components. ultimately you end up with a component hierarchy, which is often called a tree of components, a structure of components, which is then rendered to the screen via React.

**<span style='color: #875c5c'>IMPORTANT:** But what's important to understand about this tree of components is that your custom components are not showing up in the actual rendered DOM though. So your tree of components is just analyzed by React. And React then combines all the JSX code from all those components to generate the overall DOM.

But as a developer, you have the convenience of working with those individual building blocks instead of a single potentially huge file that contains all markup.

- Built-in elements like div, image, or header start with lowercase characters (these are **valid, officially defined HTML elements**, and rendered as **DOM nodes** by React).
- Custom components on the other hand, so components built by you or other developers must start with an uppercase character to tell React that it's not a built-in component. React traverses the component tree until it has only built-in components left

### Using & Outputting Dynamic Values

- static content
  - content that's hardcoded into JSX code
  - can't change at run time
- dynamic content
  - logic that produces the actual value is added to JSX
  - content/value is derived at runtime

**<span style='color: #875c5c'>IMPORTANT:** when using the `{}` syntax in JSX file, you can only use expressions that directly produce a value (if-statements, for-loops, function definitions and other block statements are not allowed here!)

### Setting HTML Attributes Dynamically & Loading Image Files

We optimize the import and loading of the image, thanks to the build process (this is not something you can normally do in JavaScript)

### Making Components Reusable with Props

React allows you to pass data to components via a concept called `Props`.

#### Props accept all value types

- string value
- number value
- object value
- array value

### More Prop Syntaxes

Beyond the various ways of setting and extracting props about which you learned in the previous lecture, there are even more ways of dealing with props.

#### Passing a Single Prop Object

If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

I.e., instead of

```javascript
    <CoreConcept
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}  
      image={CORE_CONCEPTS[0].image} />
```

or

```javascript
    <CoreConcept
      {...CORE_CONCEPTS[0]} />
```

you could also pass a single concept (or any name of your choice) prop to the CoreConcept component:

```javascript
    <CoreConcept
      concept={CORE_CONCEPTS[0]} />
```

In the CoreConcept component, you would then get that one single prop:

```javascript
    export default function CoreConcept({ concept }) {
      // Use concept.title, concept.description etc.
      // Or destructure the concept object: const { title, description, image } = concept;
    }
```

It is entirely up to you which syntax & approach you prefer.

#### Grouping Received Props Into a Single Object

You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.

I.e., if a component is used like this:

```javascript
    <CoreConcept
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}  
      image={CORE_CONCEPTS[0].image} />
```

You could group the received props into a single object like this:

```javascript
    export default function CoreConcept({ ...concept }) { 
      // ...concept groups multiple values into a single object
      // Use concept.title, concept.description etc.
      // Or destructure the concept object: const { title, description, image } = concept;
    }
```

If that syntax is a bit confusing - worry not! You'll also see concrete examples for this syntax (and for why you might want to use it in certain situations) throughout the course!

#### Default Prop Values

Sometimes, you'll build components that may receive an optional prop. For example, a custom Button component may receive a type prop.

So the Button component should be usable either with a type being set:

```html
    <Button type="submit" caption="My Button" />
```

Or without it:

```html
    <Button caption="My Button" />
```

To make this component work, you might want to set a default value for the type prop - in case it's not passed.

This can easily be achieved since JavaScript supports default values when using object destructuring:

```javascript
    export default function Button({ caption, type = "submit" }) { 
      // caption has no default value, type has a default value of "submit"
    }
```

### Storing Components Style Files Next to Components

in **<span style='color: #a8c62c'> Header.jsx**, when we import the .css

`import './Header.css';`

it's important to know that importing a CSS file in a Component file will not scope these styles to that Component, which simply means that if we would use a header element somewhere else on our page those styles here would be applied to that header element as well.

There's a solution to scope style to a particular component.

### Component Composition; Special "children" Prop

The content between component opening and closing tags is used as a value for the special `children` prop.

#### Children Prop

React automatically passes a special prop named `children` to every custom component

Where your Components can wrap other Components or other content is called component composition. You can pass complex HTML elements using the children prop.

### Reacting to Events

When working with React as a developer, we really don't wanna start interacting with the DOM and with the page (**imperative code**). Instead, we wanna let React do that (**declarative code**).

In React, you instead add event listeners to elements by adding a special attribute, a special prop to those elements. Those built-in elements are also just components, that are already provided and understood by React.

**<span style='color: #495fcb'> Note:** You would typically use *inner-functions*, the advantage of defining these event handler functions inside the component function is that they then have access to the components props and state.

### Passing Functions as Values to Props

**<span style='color: #a8c62c'> App.jsx**,

```javascript
const handleSelect = ()=> { console.info('click - onSelect')}

<TabButton onSelect={handleSelect}>Components</TabButton>
```

**<span style='color: #a8c62c'> TabButton.jsx**,

```javascript
export default ({ children, onSelect }) => (
  <li>
    <button onClick={onSelect}>{children}</button>
  </li>
);
```

We're passing a pointer at this `handleSelect` function. We're passing the function as a value, to the `onSelect` prop.

And in our custom component, we're then in the end forwarding that function to the `onClick` prop (**React built-in**).

### How to NOT Update the UI - A look at behind the scenes of React

**<span style='color: #875c5c'>IMPORTANT:** By default, React components execute **only once** (first time it is encountered in the JSX file). You have to *tell* React if a component should be executed again.

#### How React checks if UI Update are needed

React compares the old output (*old JSX code*) of your component function to the new output (*new JSX code*) and applies any differences to the actual website UI.

### Managing State & Using Hooks

**<span style='color: #495fcb'> Note:****<span style='color: #495fcb'> Note:** All functions starting with ***use\**** are React hooks. They're technically regular functions but they must only be called inside of React component functions or inside of other React Hooks.

#### Rules of Hooks

- only call hooks inside of component functions
- only call hooks on top level

`useState` Hook is one of the most important Hooks offered by React because that's the Hook that will allow us to manage some component specific state which is simply some data stored by React, which when changed, will trigger this component function to which this Hook belongs to re-execute, to be reevaluated by React.

`useState()` yields an array with 2 elements

- the first element in this array will be the current data snapshot for this component execution cycle (**current state value**)
- second element will always be a function; A function provided by React that can be executed to update this state, so to update this stored value. **<span style='color: #875c5c'>IMPORTANT:** calling this special function, this second element, will also tell React that this component function must be executed again.

**<span style='color: #495fcb'> Note:** this logs the previous state even if it is logged after updating the state:

```javascript
const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.info(selectedTopic); 
  };
```

The updated value will only be available after this app component function executed again. Only then the new value is available

### Deriving & Outputting Data Based on State

We get an error in the console when the page first loads, because we're not selecting a valid element here.

Our initial state is this *please click a button* text, And this is therefore what this program tries to find as a property name in this `examples` object.

```javascript
<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic]?.title || 'Please click a button'}</h3>
            <p>{EXAMPLES[selectedTopic]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic]?.code}</code>
            </pre>
          </div>
```

### Rendering Content Conditionally

**<span style='color: #495fcb'> Note:** `null` is something you can output in JSX code, it'll simply lead to nothing being rendered here.

```javascript
{!selectedTopic ? <p>Please select a topic.</p> : null}
```

- solution 1

```javascript
{!selectedTopic ? (
  <p>Please select a topic.</p>
) : (
  <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
)}
```

- solution 2

```javascript
 {!selectedTopic && <p>Please select a topic.</p>}
{selectedTopic && (
  <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
)}
```

- solution 3

```javascript
  const tabContent = !selectedTopic ? (
    <p>Please select a topic.</p>
  ) : (
    <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
///...
</menu>
{tabContent}
</section>
```

### CSS Styling & Dynamic Styling

in **JSX**, the class attribute is `className`, while in HTML it is `class`. most other attributes are the same though.

### Outputting List Data Dynamically

*JSX* is capable of dealing with array of renderable data:

- array of `string`: `['Hello', 'World']`
- array of `JSX elements`: `[<p>Hello</p>, <p>World</p>]`

However JSX is not able to output an array of `JXS objects`.

But since JSX is capable of outputting an array of JSX elements, we could try to transform this array of objects to an array of JSX elements.

**<span style='color: #875c5c'>IMPORTANT:** that's another super useful feature and pattern because as it turns out, in React apps, you will often output lists of data. And you will almost always do that by using the `map` method to transform your data to JSX code.

**<span style='color: #495fcb'> Note:** Warning: *Each child in a list should have a unique "key" prop*.

```javascript
{CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} /> )}
```

## Reacts Essentials - Deep Dive

### You don't have to use JSX

but it's convinient, you could use standard JavaScript features, such as `createElement` method exposed by React.

### Working with Fragments

in our **<span style='color: #a8c62c'> App.jsx** component, we may think that this `div` is not necessary, but if we remove it, we get an error from `React.JSX.Element`: *JSX expression must have one parent element*. if we remove this `div`, we end up with 2 siblings elements: `<Header>` & `<main>`

```javascript
 return (
    <div>
      <Header />
      <main>
      //...
      </main>
    </div>
  );
```

It's the same in *JavaScript* if you use a `return` statement in a function, you can return only one value. and JSX is just some synthetic sugar, code that you use in dev, but JavaScript rules apply! the below JavaScript alternative would fail too!

```javascript
 return (
    React.createElement(Header)
    React.createElement('main')
  );
```

But of course this limitation or restriction also means that you do end up with an extra div in your DOM structure. If you inspect your code with the dev tools, you can see that extra div here.

**<span style='color: #495fcb'> Note:** that's why React gives you an alternative. It gives you a special **fragment component**, which you can use as a wrapper if you do need a root component to wrap some sibling components, but you don't wanna render an actual element to the screen.

```javascript
return (
    <Fragment>
      <Header />
      <main>
      </main>
    </Fragment>
  );
```

**<span style='color: #875c5c'>IMPORTANT:** you can use `<>` as an alternative to `<Fragment>`

### Splitting Components By Feature & State

After having split into sub-components, as we click the tabs, the text up here doesn't change anymore because now we're managing this selected topic state inside of the `Examples` component and therefore it's this component function that gets executed again whenever this state changes.

And the `App` component function on the other hand is not going to be executed again. And therefore now this `Header` component function also isn't executed again anymore.

### Problem: Props Are Not Forwarded To Inner Elements

In React, when you are setting props, so attributes, on a custom component, those props are not automatically forwarded to the `JSX` code used inside of that component.

**<span style='color: #495fcb'> Note:** destructuring each props inside your inner component to which they are forwarded is not very convinient nor scalable.

### Forwarding Props to Wrapped Elements

The alternative pattern is called **forwarded props**, or **proxy props**.

`...props`: this JavaScript feature is called *rest property*. This syntax groups all remaining object properties into a new object (you can choose its name, here we took *props*).

```javascript
export default ({title, children, ...props}) => (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
)
```

the first `...` operator is grouping in one variable (*rest operator*), while the second one is the *spread operator*.

### Working with Multiple JSX Slots

**<span style='color: #875c5c'>IMPORTANT:** we can pass as a prop not only string, number, JavaScript objects, but even **JSX code**.

And that is something you can do in React because JSX elements are in the end just regular values that can be used like values in your code.

### Setting Component Types Dynamically

- Custom components must be passed as a prop as a dynamic value, So with curly braces, and then your function name: `{Section}`
- for built-in elements like `<menu>`, you simply pass the identifier as a string: `"menu"`

For a prop to be usable as a custom component in the receiving component, it must start with an uppercase character or it must be remapped to a constant or a variable that starts with an uppercase character.

### Not all Content must go into Components

**<span style='color: #495fcb'> Note:** with React, it's too easy to forget that you don't have to put everything into your component.

Most of your web application's markup is going to go into your components, and all of your web application's logic is going to go in there.

But if you have some static markups, some static data like a simple header, which does not depend on any data and which does not need to change, you can also put it right into that index.html file.

### Closer Look: public / assets for Image Storage

#### The public/ Folder

As shown in the previous lecture you can store images in the `public/` folder and then **directly reference** them from inside your `index.html` or `index.css` files.

The reason for that is that images (or, in general: files) stored in `public/` are made **publicly available** by the underlying project development server & build process. Just like `index.html`, those files can directly be visited from inside the browser and can therefore also be requested by other files.

If you try loading `localhost:5173/some-image.jpg`, you'll be able to see that image (if it exists in the public/ folder, of course).

#### The src/assets/ Folder

You can also store images in the `src/assets/` folder (or, actually, anywhere in the `src` folder).

So what's the difference compared to `public/`?

Any files (of any format) stored in `src` (or subfolders like `src/assets`/) are not made available to the public. They can't be accessed by website visitors. If you try loading `localhost:5173/src/assets/some-image.jpg`, you'll get an error.

Instead, files stored in `src/` (and subfolders) can be used in your code files. Images imported into code files are then picked up by the underlying build process, potentially optimized, and kind of "injected" into the `public/` folder right before serving the website. Links to those images are automatically generated and used in the places where you referenced the imported images.

#### Which Folder Should You Use?

You should use the `public/` folder for any images that should **not be handled by the build process** and that should be **generally available**. Good candidates are images used directly in the `index.html` file or favicons.

On the other hand, images that are used inside of components should typically be stored in the `src/` folder (e.g., in `src/assets/`).

### Concept Repetition: Working with State

When wer're updating the state, calling this `state` updating function, it will then also cause React to re-execute this component function and it will cause React to reevaluate this JSX code and see if anything changed.

And if anything did change, those changes will be reflected to the real DOM and other component functions.

if some child component like this `Player` component changes, the `App` component, which is a parent component to the player component does not care about that and will not reevaluate.

### Component Instances work in Isolation

**<span style='color: #875c5c'>IMPORTANT:** whenever you are using or reusing a component, React will basically create a new isolated instance.

### Best Practise: Updating State based on old state correctly

In React, when updating your state based on the previous value of that state, you should not do it like this:

`setIsEditing(!isEditing);`

The problem with this code here is that React behind the scenes is, in the end, scheduling those state updates you're triggering with those state updating functions, So this state update here is not performed instantly. Instead, it's scheduled by React to be performed in the future.

so duplicating this line would cause issue as React is scheduling these state updates, both based on the current value of the variable used, and that state is not immmediately changed

```javascript
setIsEditing(!isEditing);
setIsEditing(!isEditing);
```

Instead, when updating your state based on the previous value of that state, you should pass a function to that state updating function. Because this function which you pass here will be called by React and it will automatically get the current state value.
So the value before this state update here as an input.

`setIsEditing(editing => !editing);`

duplicating the line using the function form would yield the expected result (nothing happening, as the second schedule would reverse the previous one correctly)

**<span style='color: #495fcb'> Note:** By using this way of updating, the function form, you simply have a guarantee by React that you'll always be working with the latest available state value.

**<span style='color: #875c5c'>IMPORTANT:** we should use this anonymous function form each time the new state depends on the old state

### User Input & Two-Way-Binding

the `value` property of the `input` html element, blocks any input from a user. `defaultValue` allows for editing the input.

a default approach is necessary as we need to get the changes the user tries to apply to that value

### Best Practise: Updating Object State Immutability

```javascript
const handelSelectSquare = (rowIndex, colIndex) => {
  setGameBoard((prevGameBoard) => {
    prevGameBoard[rowIndex][colIndex] = 'X';
    return prevGameBoard;
  });
};
```

**<span style='color: #875c5c'>IMPORTANT:** **Object & Arrays** (which technically are objects) are reference values in JavaScript. You should therefore not mutate them directly - instead create a **(deep) copy** first. And it's that copy, not the original object, which is changed/updated.

>**<span style='color: #495fcb'> Note:** And the reason for that recommendation is that if your state is an object or array you are dealing with a reference value in JavaScript.  
And therefore if you would be updating it like this you would be updating the old value in-memory immediately, even before this scheduled state update was executed by React.  
And this can again lead to strange bugs or side effects if you have multiple places in your application that are scheduling state updates for the same state.

**Updating the state in an immutable way**:

```javascript
const handelSelectSquare = (rowIndex, colIndex) => {
  setGameBoard((prevGameBoard) => {
    const updatedBoard = [...prevGameBoard].map((innerArray) => [
      ...innerArray,
    ]);
    updatedBoard[rowIndex][colIndex] = 'X';
    return updatedBoard;
  });
};
```

```javascript
const handelSelectSquare = (rowIndex, colIndex) => {}
<button onClick={handelSelectSquare}>{playerSymbol}</button>` 
```

**<span style='color: #495fcb'> Note:** we can use our trick with an anonymous function (which is pass as a value to `onClick` function) as we need to pass `rowIndex` and `colIndex` as arguments, so that we have full control over how `handleSelectSquare` will be called.

### Lifting State Up

both `Player` and `GameBoard` components will need to know the active player. For such situation, we must **lift the state up to the closest ancencestor componment that has access to all components that need to work with that state**.

- Ancestor passes the state value via props to the child component.
- Ancestor passes a function that eventually changes the state via props to the child component. this allows the child component to initiate the state change.

in our case this is the `App` component, which can then pass the information which player is currently active to both the Player and the GameBoard components via *props*.

### Avoiding Intersecting States

Adding a new state to store kind of the same information, just with a little bit of extra data, is something you typically wanna avoid as a React developer.

### Prefer Computed Values & avoid unnecessary State Management

`setGameTurns(prevTurns => {
      const updatedTurns = [{  square: {row: rowIndex, col: colIndex }, player: activePlayer },...prevTurns]
    })
`

to make sure that when the schedule state update is performed, we are definitely working with the latest state but we don't have that guarantee for activePlayer because that's from a different state. Therefore, a better way of deriving the symbol of the currently activePlayer is to add a new variable

### Deriving State from Props

We are producing some derived state, some computed value; `Gameboard` is a computed value that is derived from some state.

**<span style='color: #875c5c'>IMPORTANT:** In React, you should manage as little state as needed and try to derive as much information and as many values as possible from that state.

### Reducing State Management & Identifying Unnecessary State

**<span style='color: #875c5c'>IMPORTANT:** when writing React code, You wanna manage as little state as possible, and derive and compute as many values as needed.

### Why Immutability Matters - Always

our game is controlled by this `gameTurns` state.

That's our single source of truth for this entire game.

It's this `gameTurns` state which we use to derive the `gameBoard`.It's this state which we use to derive the `activePlayer` and it's this state which we use to check for a winner, and create `log`.

And therefore, restarting the game simply means that we should reset `gameTurns` to an empty array and all the rest will automatically adjust since we're deriving all the other data from this state.

**<span style='color: #875c5c'>IMPORTANT:** we have a bug, our board

>Arrays, like objects in JavaScript, are **reference values** and that means that they're stored in memory.  
And if we're then using them, even if they're stored in different variables, we're always editing that same object or array in memory.

in our code **<span style='color: #a8c62c'> App.jsx**,

```javascript
 let gameBoard = initialGameBoard;

gameTurns.forEach((turn) => {
  const {
    square: { row, col },
    player,
  } = turn;
  gameBoard[row][col] = player;
});
```

The problem is that the gameBoard where we're setting this value is based on this initialGameBoard.

And therefore, when I set a certain row-column combination of the `gameBoard` to the `player` symbol, I'm doing that in that original array in memory.

Solution is to create a deep copy.

`let gameBoard = [...initialGameBoard.map(arr => [...arr])];`

### When NOT to lift State Up

**<span style='color: #a8c62c'> Player.jsx**,

`const [playerName, setPlayerName] = useState(initialName);`

f we would move it out of the `Player` component, that would mean that the entire `App` component is reevaluated on every keystroke, which also means that the entire game board is reevaluated on every keystroke.

## Styling React Components

### Module Introduction

- Styling with **Vanilla CSS**
- **Scoping** Styles with **CSS MOodules**
- **CSS-in-JS** Styling with **Styled Components**
- Styling with **Tailwind CSS**
- Static & **Dynamic (Conditional)** Styling

### Splitting CSS Cde Across Multiple Files

in a typical React project, which uses Vite as an underlying development and build tool, you can import CSS files into JavaScript files like this.

**<span style='color: #a8c62c'> main.jsx**: `import './index.css';`

And the build tool, so Vite in this case here, will identify such imports and in the end simply make sure that the CSS file you are trying to import here gets dynamically injected into the webpage / to the DOM,

```html
<style type="text/css" data-vite-dev-id="/home/ecr/react_completeGuide/6_styling/src/index.css">* { }
```

and you can of course include as many vanilla CSS files as you want. You don't have to go with a single CSS file.  
Therefore you could also split this file into multiple files where you attach the individual files to the Components to which they belong.

```html
<style type="text/css" data-vite-dev-id="/home/ecr/react_completeGuide/6_styling/src/components/Header.css">header {}
```

### Styling React Apps with Vanilla CSS - Pros & Cons

When using the **Vanilla-CSS** solution, then that code and those CSS rules are not scoped to components, which means you can have styling clashes between different components if you are using CSS rules that may affect JSX code stored in different components.

### Vanilla CSS Styles Are NOT Scoped To Components

**<span style='color: #875c5c'>IMPORTANT:** it's really important to understand that even if you do split your CSS code in multiple files, and you then do import some of these files into certain component files, the CSS rules in those files will not be scoped to the components to which they belong, because they don't really belong to these components.

Instead, if you open the developer tools again, keep in mind that all these styles are in the end just injected into the head section here by Vite, And therefore, they are applied globally to this page.

The style prop does not take a string. as in *HTML*

One advantage of this inline styling approach is of course that these styles here really only affect the JSX element on which you add them.

### Dynamic & Conditional Inline Styles

The disadvantage with inline styling still is that you often end up with a lot of duplication and that all your CSS code goes into the JSX code, which also isn't ideal.

### Dynamic & Conditional Styling with CSS Files & CSS classes

When adding a CSS class conditionally, it's just important to note that you should then use ternary expression and add `undefined` as a class name. You can't use `&&`, which will assign `false` as a class when negative and error.

### Scoping CSS Rules with CSS Modules

#### vanilla CSS with file-specific scoping

if you now rename the header CSS file to `header.module.CSS`, This `.module` naming pattern here is basically a signal for the underlying build process, Vite build tool, to process this file here slightly differently because now we also have to import it differently, because now we must import something from this header.module file and that something will be a JavaScript object that will be generated by that underlying build process.

If you take a look at the class that's actually applied in the rendered DOM, the class name here was in the end generated by the built build tool automatically.

```javascript
import classes from './Header.module.css'

<p className={classes.paragraph}>A community of artists and art-lovers.</p>
```

#### CSS Modules

+: your CSS code is decoupled from your JSX code
+: you write vanilla-CSS code, as you know it
+: CSS classes are scoped to the component (files) which import them -> no CSS class name clashes

**<span style='color: #a3842c'>Link:** [https://styled-components.com/](https://styled-components.com/)

### Introducing Styled Components (third-party package)

And the idea behind this popular package is that you do not define your CSS rules and styles in separate CSS files, but also not as inline styles,but instead in special components that are built with help of that package.

#### Tagged Templates

**<span style='color: #a3842c'>Link:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

```javascript
const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;
```

And what this overall code will give you will be a component, a React component that automatically returns a div that has these styles applied to it.

And it will be a div that internally also uses the special children prop so that it can be wrapped around other content.

We can see that the styles were correctly applied to `<ControlContainer>`

![image info](./6_sc1.png)

Under the hood, this styled-components package simply also creates unique CSS class names and defines the rules for these classes in the head section where this gets injected here. And then it also adds those created classes to your elements.

### Creating Flexible Components with Styled Components

since I'm now using styled components, though as you can, of course, see, for example, on the header, you can mix and match styled components with other styling approaches like CSS modules without problems, though typically, you will likely go for one approach that you then use for the entire app but you can mix them if you want to.

These styled components, which you build with `styled.` do not just use the children prop so that you can wrap them around content like this texture.

But in addition, they also forward all props you're setting on this styled component to the underlying *built-in JSX element (HTML)*, like `<label>`.

### Dynamic & Conditional Styling with Styled Components

The general idea behind **styled components**: it's all about building these small wrappers which you can then use in your application and which you of course also can reuse.

And that's the advantage compared to inline styles. The styles now are closer to the JSX code, but they are not inside of the JSX code and we got no duplication in the JSX code.

Instead, we just get these little wrapper components that we built with help of styled components.

**<span style='color: #495fcb'> Note:** And as mentioned, even though you can blend styled components and vanilla CSS as we're doing it here, you will typically go for one solution which you then use for everything in your React projects.

`<Label className={`label ${emailNotValid ? 'invalid' : ''}`}>`

>**<span style='color: #495fcb'> Note:** one thing to note about injecting props into styled components is that you of course should make sure that you don't accidentally clash with default built-in props that might exist on certain elements.

**Dev Tools**: *Warning: Received `false` for a non-boolean attribute `invalid`.*

and it turns out that the `invalid` prop we used, on the HTML `input` element, is a built-in prop.

Now to work around that, since all the props you are setting on your styled components will be forwarded to the underlying built-in components, It is a common convention to *prefix* those props with a `$` sign

### Styled Components: Pseudo Selectors, Nested Rules & Media Queries

You don't need to convert every element to a styled component just to style it.

Instead, you can just convert one wrapping parent component and then add the styles to it like that. And now for pseudo selectors, it's pretty similar.

### Creating Reusable Components & Component Combinations

The `ControlContainer` component is unlikely to be used in other parts of the application. And in such cases, storing it here in that same file is fine.

But for the `label` and the `input` and the `button` it's not unlikely that in a bigger application I might need those same components with the same styles in other parts of the application as well. And therefore you could consider creating separate component files for such kinds of components.

It's so common to this combination of `label` and `input` that we might wanna merge them to gather into one single component.

**<span style='color: #495fcb'> Note:** The main takeaway from this lecture, as a React developer, you should always look for opportunities like this where you can either outsource reusable components that have a certain styling applied to them, which you might need in different parts of the application, and/or components that maybe have certain combinations of JSX elements that you might need to reuse in other parts of the application.

#### Styled Components: Advantages & Disadvantages

- +: quick and easy to add
- +: you continue thinking in React (configurable style functions)
- +: styles are automatically scoped to components -> no CSS rule clashes

- -: no strong separation of React & CSS code
- -: you end up with many relatively small 'wrapper' components, nonetheless, creating all these extra small components just for styling purposes can sometimes also be annoying.

### Introducing Tailwind CSS For React App Styling

**<span style='color: #a3842c'>Link:** [https://tailwindcss.com/]

*Tailwind* is all about adding tiny utility CSS classes to HTML elements to apply styles step by step and therefore then style the overall component.

In addition, *Tailwind* also sets up some base styles that will affect the overall document, but the main idea behind Tailwind really is to add these tiny utility classes.

> **<span style='color: #495fcb'> Note:** *Tailwind* can look pretty ugly, you're going to add a lot of CSS classes into your JSX code.And for many developers working with Tailwind CSS is actually pretty **convenient**, because you don't need to know CSS in order to use it. That's the idea behind CSS frameworks like this.

#### Installation

**<span style='color: #a3842c'>Link:** [https://tailwindcss.com/docs/installation/framework-guides]

**<span style='color: #875c5c'>IMPORTANT:** to get *VSCode intellisence*, add **Tailwind CSS IntelliSence** extension.

How should you know which class names exist and which class names do what? Well, with help of the **official documentation**, of course.

### Tailwind CSS: Advantages & Disadvantages

- +: you don't need to know a lot about CSS
- +: rapid development
- +: no style clahes between components since you don't define any CSS rules
- +: highly configurable & extensible

- -: relatively long className values
- -: any style changes require editing JSX
- -: you end up with relatively small 'wrapper' components or lots of copy & pasting

## Debugging React Apps

### VSCode Integrated Debugger (web app)

**<span style='color: #a3842c'>Link:** [youtube_debug_react](https://www.youtube.com/watch?v=FOXNlZFkbPk)

### Using the Browser Debugger & Breakpoints

in the browser, go to `Sources` tab

### Understanding React's 'Strict Mode'

Using `StrictMode` typically begins in Index.jsx.

Though you can also enable it just for parts of your application if you wanted to, because StrictMode, in the end is simply a component you import from React, a built-in component provided by *React*.

**<span style='color: #495fcb'> Note:** To be precise, it is a component that's meant to be wrapped around other components.

You can wrap any single component, though it's not uncommon to wrap the **root component**.

For example, one of the most important things the StrictMode component does is that it will execute every component function twice instead of just once. Now, it only does that during development.

So if you would prepare your application for production and you would upload it to some server, StrictMode would no longer execute every component twice as this of course does slightly impact the performance of your application.

And the error here is stemming from the fact that in my `Results` component, I'm creating this Results array outside of the component function and therefore only once because whilst this component function will be re-executed by React whenever the state in apparent component changes, but the creation of this array, will not be re-executed

## Working with Refs & Portals

### Repetition: Fragments

**When writing JSX code, there's one important rule: A JSX value must have only one root element.**

For example, the following code would be invalid and cause an error:

```javascript
return (
  <h2>Welcome!</h2>
  <p>React is awesome!</p>
);

// So would this code:
const content = (
  <h2>Welcome!</h2>
  <p>React is awesome!</p>
);
```

One solution would be to add a `div`. But it has a downside: You now have that extra `<div>` in your DOM - even though you don't really need it (besides for getting rid of the this error). That's why React offers a better solution: A special JSX element called **"React Fragment"**.

It can be used as a wrapper to ensure that there's only one root JSX element whilst at the same time not rendering any DOM element.

```javascript
import { Fragment } from 'react';
return (
  <Fragment>
    <h2>Welcome!</h2>
    <p>React is awesome!</p>
  </Fragment>
);

// Most React projects (e.g., projects created with Vite or create-react-app) offer an even shorter form:

// no import needed    
return (
  <>
    <h2>Welcome!</h2>
    <p>React is awesome!</p>
  </>
);
```

### Introducing Refs: Connecting & Accessing HTML Elements via Refs

`useRef()` returns a JavaScript object with a single `current` property.

if attached to an `<input>` HTML element, you can now access all methods and properties of a built-in native `input` HTML element.

**<span style='color: #495fcb'> Note:** that's one of the reasons why this ref feature exists. For use cases like this where you just wanna read a value from an input field, for example, it can really save you a lot of code and lead to leaner Components.

### Manipulating the DOM via Refs

```javascript
const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  };
```

You must not forget that React is about writing declarative code. And it's about not directly manipulating the DOM yourself. Instead, you wanna let React do that.

in above first line, we're already crossing that line a little bit, but here we are just reading a value. We're not changing anything in the DOM.

But in the next line, we definitely have imperative code. We're not in the declarative world anymore. Instead, we're clearly instructing the browser to set the value of that input to an empty string.

And we're therefore basically violating that rule, that React should handle all those DOM interactions.

**<span style='color: #495fcb'> Note:** Nonetheless, for a use case like this, where you just clear an input, which is then not really connected to any other state, you can definitely consider writing code like this.

**<span style='color: #875c5c'>IMPORTANT:** But you should definitely be careful that you don't start using refs to read and manipulate all kinds of values on your page, because that's really not the idea behind React.

### Refs vs State Values

When the component gets rendered for the first time, the connection through this ref prop `useRef()` won't be established yet.

So in that first component render cycle, when that component function is executed for the first time, `playerName.current` will simply be undefined.

**<span style='color: #875c5c'>IMPORTANT:** the key difference between refs and state, tt's not just that this connection doesn't exist yet initially.

More importantly, **it's that whenever a ref changes, the component function does not re-execute**. And for a state, that's of course different. Whenever you update state by calling that state updating function, the component function will be re-executed.

#### State

- causes component re-evaluation (re-execution) when changed
- should be used for values that directly reflected in the UI
- should not be used for *"behind the scenes" values* that have no direct UI impact

#### Refs

- do not cause component re-evaluation when changed
- can be used to gain direct DOM element access (great for reading values or accessing certain browser APIs)

### Using Refs for More Than "DOM Element Connections"

As you know, whenever state changes, this component function re-executes. And that, of course, also means that this variable `let timer` is recreated.

one solution would be to define  it outside of the component function because then it would not be recreated. but we then get a new bug, if we launch 2 timers and try to stop both, only the first one will stop.

> **<span style='color: #495fcb'> Note:** I'm getting that behavior because this timer variable is now a variable defined in this TimerChallenge file outside of this component function.  
And therefore, it's actually a variable that will be shared across all component instances that are based on this component function.  
Initial timer  will be overwritten with a pointer at that one second timer.

**refs can be a solution**,  because you cannot just use refs to connect to HTML elements, even though that is a very common use case, but you can also use refs to manage any kind of value.

**<span style='color: #875c5c'>IMPORTANT:**

- Every component instance of this TimerChallenge component will get its own timer ref that works totally independent from the other refs that belong to the other instances of that component.
- But at the same time, unlike variables defined in component functions, this ref will not be reset or cleared when this component re-executes. Instead, just as with state values, React will store these timer values behind the scenes and make sure that they don't get lost as this component function re-executes.

**And that's therefore another use case for refs if you have a value that must be managed but that isn't really a state because that timer itself has no direct impact on the UI and you still need to manage it such that it's not reset when the component is re-executed, then you might have a great use case for a ref.**

### Adding a Modal Component

**<span style='color: #495fcb'> Note:**

- if you add a form with the method set to dialog (which is not *React* specific), inside of a `<dialogue>`, with a button that submits the form, it will close this dialogue without any extra JavaScript or anything like that required.
- the built-in dialog element by default is invisible. But it can be made visible by adding the `open` prop to it.
- this dialog element actually comes with a built-in backdrop element that will be displayed behind the dialog but unfortunately this built-in backdrop will not be shown if you force the dialog to be visible by setting open to true like this. Instead we have to open this dialog programmatically by sending a command to the browser, to get this built-in backdrop. And that's again an example for a scenario where refs can help us.

### Forwarding Refs to Custom Components

the problem is that we can't forward a `ref` to another component and then to an element in that component as I'm trying to do it here. This unfortunately doesn't work.

```javascript
<ResultModal targetTime={targetTime} result={'lost'} ref={dialog} />

export default ({ result, targetTime, ref }) => (
  <dialog ref={ref} className="result-modal">
)
```

Instead, if we wanna pass a ref from one component to another component so that we can use it in that other component, we have to use a special function provided by React: `forwardRef`

but now this component function will receive a second parameter, a ref parameter. And that's only the case because we wrapped this component function here with **forwardRef**.

```javascript
import { forwardRef } from 'react';

export default forwardRef(({ result, targetTime }, ref) => (
  <dialog ref={ref} className='result-modal'>
)
```

### Exposing Component APIs via the useImperativeHandle Hook

But keep in mind that you might eventually work on bigger React projects and that there you might be writing some components and other developers write other components and you might be working with some of those components written by other developers and vice versa.

If you then always have to dive into those components to understand how they work internally, so that you use them correctly and you, for example, call the correct method on that ref here, that can be a problem.

>Therefore, it might be preferable to build this ResultModal component such that it exposes its own function that can be called with help of a ref outside of that component, which will work independent of how this *JSX* code might work in the future, so that the person working on that **<span style='color: #a8c62c'>ResultModal.jsx** component can change it however they want, as long as they keep this one function which is exposed to you,

`useImperativeHandle()`

- first argument is the `ref` you get from `forwardRef()` argument
- And the second value must be a function that then returns an object which groups all the properties and methods that should be exposed by this component to other components.

But now the person working on that `ResultModal` component is totally free to change it however it wants as long as this component keeps on working and as long as it keeps on exposing a method called `openDialog`, because it's now this method which we're calling here.

### When to Use Refs & State

```javascript
if (timeRemaining <= 0) {
  clearInterval(timer.current);
  setTimeRemaining(targetTime * 1000);
}
```

**<span style='color: #495fcb'> Note:** setting the state like this directly in a component function can be dangerous because you can create an infinite loop, because setting the state causes the component function to execute again which could cause this function here to run again and so on.

But since I'm in a if condition here, which will not be met after updating the state like this, we are safe.

### Closing the Modal via the ESC (Escape) Key

The `<dialog>` element allows website visitors to close the opened dialog by pressing the ESC (Escape) key on their keyboard.

Currently, this will not trigger the onReset function though (unlike closing the dialog with a button click).

To make sure that onReset gets triggered when the dialog is closed via the escape key, you should add the built-in onClose prop to the `<dialog>` element and bind it to the onReset prop value.

```javascript
<dialog ref={dialog} className="result-modal" onClose={onReset}
   ...
</dialog>
```

### Introducing Portals

#### Portals

And it would make sense to have the dialogue on such a higher level because that would map its visual appearance to its location in the HTML structure which can be better for accessibility reasons and which can also help you avoid styling problems. but a deeply nested element could be hidden by other elements above it in certain circumstances.

**<span style='color: #495fcb'> Note:** And therefore we might wanna control and kind of output this modal component in the TimerChallenge component because that's the component where we use it, but we'd like its JSX code to go somewhere else in our page. And that's exactly the kind of problem this portal feature solves.

So for modals or similar scenarios where you have some JSX code that should actually not be rendered in the place where you are using it in your app, but somewhere else in your document.

#### React-DOM

- `react-dom` library is managed by the same team.
- `react` library only exposes functions and features that work in all kinds of environments. For example, also, if you would build a Native app with React Native.
- whereas the React DOM library includes a couple of features and functions that in the end allow React to then interact with the DOM. So with a website rendered in the browser.

**<span style='color: #875c5c'>IMPORTANT:** The second argument for `createPortal()` is an HTML element to which this code should be teleported. So where this code should be rendered in the end. **And that should be an element that exists in your index HTML file**.

![image info](./8_sc1.png)

**<span style='color: #495fcb'> Note:** And by the way, there, you see multiple dialogues because we have multiple timer challenges, but only this first dialogue is visible at the moment.

## Practise Project: Project Management App (Components, States & Refs)

### Module Introduction

#### Important Tailwind CSS Classes Used Throughout This Section

```html
<main className="h-screen my-8 flex gap-8">...</main>
<button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">...</button>
<input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
<p className="flex flex-col gap-1 my-4">...</p>
<label className="text-sm font-bold uppercase text-stone-500">...</label>
<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">...</dialog>
<form className="mt-4 text-right">...</form>
<h2 className="text-xl font-bold text-stone-700 my-4">...</h2>
<p className="text-stone-600 mb-4">...</p>
<div className="w-[35rem] mt-16">...</div>
<menu className="flex items-center justify-end gap-4 my-4">...</menu>
<button className="text-stone-800 hover:text-stone-950">...</button>
<button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">...</button>
<div className="flex items-center gap-4">
<input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
<button className="text-stone-700 hover:text-stone-950">...</button>
<div className="mt-24 text-center w-2/3">
<img className="w-16 h-16 object-contain mx-auto" />
<h2 className="text-xl font-bold text-stone-500 my-4">...</h2>
<p className="text-stone-400 mb-4">...</p>
<p className="mt-8">...</p>
<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">...</h2>
<ul className="mt-8">...</ul>
<button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">...</button>
<div className="w-[35rem] mt-16">...</div>
<header className="pb-4 mb-4 border-b-2 border-stone-300">...</header>
<div className="flex items-center justify-between">...</div>
<h1 className="text-3xl font-bold text-stone-600 mb-2">...</h1>
<button className="text-stone-600 hover:text-stone-950">...</button>
<p className="mb-4 text-stone-400">...</p>
<p className="text-stone-600 whitespace-pre-wrap">...</p>
<h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
<p className="text-stone-800 my-4">...</p>
<ul className="p-4 mt-8 rounded-md bg-stone-100">...</ul>
<li className="flex justify-between my-4">...</li>
<button className="text-stone-700 hover:text-red-500">...</button>
```

### Managing Tasks & Understanding Prop Drilling

we need to extract the value that was entered by the user into that `input` when that button is clicked.

I also want to clear this input and set it back to an empty input after we click Add Task. And whilst this could be done with a ref, we would kind of be violating that idea of React being in charge of the DOM and of DOM updates.

And therefore I'll instead use `useState()`.

## React's Context API & useReducer - Advanced State Management

### Understanding Prop Drilling

**<span style='color: #875c5c'>IMPORTANT:** **State Lifting**, you often need to manage the state at some component that has access to all Components that need that state. And you then need to share it through props and also update it with help of props.

This often means that you need to pass that shared data through multiple layers of Components. And that is something that's called **prop drilling**. even though most Components don't directly need that data. They just pass it on to some child component.

- makes your Components a bit less reusable because they always must be used in a place where they can get that shared data.
- And it also means that you have to write a lot of extra boilerplate code

### Prop Drilling: Component Composition as a Solution

we still have the shop component as a wrapper but we have the logic for outputting the products and the usage of that product component in the app component now, which now means that we no longer have to pass a pointer of the specific methods that were causing the *prop drilling*.

**<span style='color: #495fcb'> Note:** And with that, we're embracing component composition, and we're using the shop component around the wrapper of that list of products. And we therefore kind of got rid of one layer of component nesting,

**<span style='color: #875c5c'>IMPORTANT:** Though, and that's the downside of this solution, you typically don't want to use this solution for all your component layers.

Because it would mean that in the end, all your components just end up in the app component and all the other components are just wrapper components.

### Introducing the Context API

This `Context` feature offered by React is that you create a context value and that you then provide that value that you wrap this context, you could say around multiple Components,possibly around all Components of your app.

**<span style='color: #875c5c'>IMPORTANT:** Now, the great thing about this `Context` value that you provide to multiple Components is that it can easily be connected to `State`. So, you can connect your React state to that context value which is provided to the entire application.

### Creating & Providing the Context

`<CartContext.Provider>`

**<span style='color: #495fcb'> Note:** You cannot just use components like the Header or the Shop component, instead you can also use nested property values as components if those values are valid React components. And this `Provider` property does indeed hold a valid React component.

### Consuming the Context

Even though we're setting a default value in our `CartContext` context provider component, **you also must add a `value` prop**.

**<span style='color: #495fcb'> Note:** The default value set when creating the context is only used if a component that was not wrapped by the provider component tries to access the context value.

we set the default value is just helpful to get the auto-completion.

### Linking the Context to State

#### Reading the Context through State

`<CartContext.Provider value={shoppingCart}>`

with the above change, we can use that context, read it (in the `Cart` component for example), but editing the state does actually not work through context yet.  
Instead, I'm editing the state still by passing props to our components.

#### Editing the Context through State

```javascript
 const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>
```

**<span style='color: #495fcb'> Note:** to get the auto-completion, we need to go to our **<span style='color: #a8c62c'> shopping-cart-context.jsx** and add a dummy function:

```javascript
export const CartContext = createContext({
  items: [],
  addItemToCart: (_) => _,
});
```

### A Different Way Of Consuming Context

Below approach is a bit more cumbersome and also harder to read and it's therefore not the default approach you should use.

It's just an approach I wanna show you because you might encounter it in other React projects.

**<span style='color: #a8c62c'> Cart.jsx**

```javascript
import { CartContext } from '../store/shopping-cart-context';

export default function Cart({ onUpdateItemQuantity }) {
  return (
    <CartContext.Consumer>
      {(cartCtx) => {
        const totalPrice = cartCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (
          <div id='cart'>
            {cartCtx.items.length === 0 && <p>No items in cart!</p>}
            {cartCtx.items.length > 0 && (
              <ul id='cart-items'>
                {cartCtx.items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className='cart-item-actions'>
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id='cart-total-price'>
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
```

### What Happens When Context Values Change?

Now, there's one other thing you must know about consuming and using context values in components.

When you do access a context value in a component and that value then changes, the component function that accesses the context value, will get re-executed by React, just as the component function would also get re-executed

- if it would be using some internal state that was updated
- or if its parent component were executed again.

**<span style='color: #875c5c'>IMPORTANT:** React will re-execute a component function if it's connected context value changes so that that component function can then produce some new user interface.

### Introducing the useReducer Hook

in state updating functions, I'm always passing a function to them because basically almost always if you are managing more complex state, an object or an array or anything like that you will need to update your state based on the previous state snapshot.

```javascript
const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
```

here we use the built-in `reduce()` method that can be used on any array in *JavaScript* and totally independent of *React*, and from the `useReducer` React hook.

**<span style='color: #495fcb'> Note:** the idea behind this useReducer hook is to use that same concept of reducing one or more values to a typically simpler value *for state management purposes*.

I'm defining our dispatch reducer function  outside of this component function:

- because this function should not be recreated whenever the component function executes
- because it also won't need direct access to any value defined or updated in the component function. It won't need access to props or anything like that.

And we see that we got no items in cart here, which makes sense.

Now, if I change my state, the cart doesn't update any longer of course because now I'm getting my value from that newly added reducer based state. And of course there we at the moment got no logic for updating that value,

## Handling Side Effects & Working with the useEffect() Hook

### What's a "Side Effect"? A Thorough Example

Below, this entire code is actually a *side effect*.

It's a side effect because this code is, of course needed by this application, we need the user's location but it's not directly related to the task, to the main goal of this component function. Because the main goal of every component function is to return renderable JSX code.

Now this code here is a side effect because it's not directly related with that task. All the other code in this component is related because we're setting up click listeners, which we need in our JSX code, we're setting up the state which impacts what we see on the screen.

**<span style='color: #495fcb'> Note:** But this code where we fetch a user's location is not directly related. Especially also because this code here does not finish instantly. Instead, this callback function will be called at some point in the future where this app component function most likely finished its execution already.

```javascript
navigator.geolocation.getCurrentPosition((position) => {
  const sortedPlaces = sortPlacesByDistance(
    AVAILABLE_PLACES,
    position.coords.latitude,
    position.coords.longitude
  );
});
```

### A Potential Problem with Side Effects: An Infinite

We wanna use these sortedPlaces to show them on the screen.

Specifically, it's this usage of the `Places` component where instead of `places={AVAILABLE_PLACES}`, I now wanna pass my sorted available places as input.

And, of course, those sorted places are not available right at the start because this operation of getting the user's location will take some time. So the first app component render cycle will be finished at the point of time where we have this location.

Therefore, we need `state` here. So once this operation of fetching the user's location finished and since **set** operations of `useState()` triggers a new render cycle, the state will be updated with those sorted places

**<span style='color: #875c5c'>IMPORTANT:** That looks like a good solution, but this solution actually has a flaw because it would cause an infinite loop.

And why is that? Well, because we're updating the state here, and as you learned, calling such a state updating function tells React to re-execute the component function to which the state belongs, so this app component in this case.

Now, what happens if this component function executes again? Well, we fetch the user's location again and then we set the state and we execute the component function again and we fetch the location again and we set the state and you see where that is going.

That will be an infinite loop and that would crash our application.

### Using useEffect for Handling (Some) Side Effects

If you change the code to look like this,  You will not run into this infinite loop problem.

Because the idea behind *useEffect* is that this function which you pass as a first argument to useEffect will be executed by *React* **after every component execution**.

So, if the app starts and the app component function executes, this code in the `useEffect()` block will not be executed right away. Instead, it's only after the app component function execution finished. So, after this JSX code here has been returned, That this side effect function you passed to `useEffect()` will be executed by React.

**<span style='color: #875c5c'>IMPORTANT:** Now, if you then update the state within the `useEffect()`, the component function executes again as you learned. And in theory this effect function would execute again. But that's where this **dependencies array** comes into play. Then, React will actually take a look at the dependencies specified there. And it will only execute this effect function again, **if the dependency values changed**.

In our case,  because we have no dependency `[]`, they obviously never change. Therefore, React actually never re-executes this effect function.

```javascript
useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(
      AVAILABLE_PLACES,
      position.coords.latitude,
      position.coords.longitude
    );

    setAvailablePlaces(sortedPlaces);
  });
}, []);
```

### Not All Side Effects Need useEffect

not all side effects require the usage of `useEffect()` because overusing useEffect and using it unnecessarily is considered a **bad practice**, because you must not forget that this is an extra execution cycle that's triggered after the component execution cycle.

#### Example of another side-effect

Now all this code below, is just another example for a side effect because just as fetching the user's location, this code down here where we store data in the browser's storage is not directly related to rendering this JSX code.

```javascript
 function handleSelectPlace(id) {
//...
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  storedIds.indexOf(id) === -1 &&
    localStorage.setItem(
      'selectedPlaces',
      JSON.stringify([id, ...storedIds])
    );
}
```

**<span style='color: #875c5c'>IMPORTANT:** Now, unlike with the navigator code,  we don't need to wrap this code down here with `useEffect()` though.  
And indeed we can't use *useEffect* here, because we're inside of a function.  
**And this usage here would violate the rules of hooks because you're not allowed to use React hooks in nested functions, if statements or anything like that. They must be used directly in the root level of your component function,**

But we also don't need useEffect down here because there's nothing wrong with executing this code here because this code gets executed when this function here the handleSelectPlace function is executed which in the end happens when the user clicks on one of these items.

And then this code does not enter an infinite loop because we're not updating any state here. And even if we were updating any state in relation to that localStorage data storage, we would not create an infinite loop because again, this code in this handleSelectPlace function only executes when a user clicks on one of these items.

**<span style='color: #875c5c'>IMPORTANT:** Not every side effect needs useEffect. You basically only need the useEffect hook:

- to prevent infinite loops
- or if you have code that can only run after the component function executed at least once.

### useEffect Not Needed: Another Example

```javascript
useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    const storedPlaces = storedIds.map((id) =>
      AVAILABLE_PLACES.find((place) => place.id === id)
    );
    setPickedPlaces(storedPlaces);
  }, []);
```

**But this here is now an example for a redundant usage of useEffect.**

Now, why is using useEffect like this redundant and actually not recommended? Because this code here, where we use local storage, unlike this code here where we gut the user's location, runs synchronously. Which means it basically finishes instantly. It's executed line by line and once a line finished execution, it's done. We have the final result.

And this was not the case here for `getCurrentPosition()` of the *navigator geolocation API*, Instead it was only done once this callback function here was executed by the browser and that happened at some point in the future.

**But for local storage, that's not the case. We got no callback function or promise**.

#### Cleaning the code

we can actually even move that code out of the app component function, so that it only runs once in the entire application lifecycle, when this code file is parsed and executed for the first time.

Because there's no reason to put this into the app component, which would only mean that it runs again and again every time the app component function is executed, which in the end means that we're wasting some performance. Instead, it's enough to run this once when the overall app starts

```javascript
  const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  const storedPlaces = storedIds.map((id) =>
    AVAILABLE_PLACES.find((place) => place.id === id)
  );
function App() {
//...
const [pickedPlaces, setPickedPlaces] = useState([storedPlaces]);
//...
```

### Preparing Another Use-Case for useEffect

**<span style='color: #495fcb'> Note:** Switching from managing the modal in an imperative way to managing it in a declarative way

`const modal = useRef();`
`const [modalIsOpen, setModalIsOpen] = useState(false);`

**<span style='color: #495fcb'> Note:** the backdrop disappeared because it only added when we call `dialog.current.showModal()`, so forwarding this `open{}` prop to the dialog doesn't really work.

### Using useEffect for Syncing with Browser APIs

```javascript
const Modal = ({ open, children }) => {
  const dialog = useRef();
  open && dialog.current.showModal();
  !open && dialog.current.close()
  
  return createPortal(
    <dialog className='modal' ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};
```

we get an error *dialog.current is undefined*. And the problem here, of course, is that we're calling these methods, showModal and close, right inside of this component function.

And we're using the `dialog ref` to interact with that dialog. But the first time this component function executes, this ref will not be set yet. It will not be connected yet because this JSX code hasn't executed yet.

So this connection between a ref and dialog element hasn't been established yet and therefore calling close fails because initially, this ref is undefined.

And that's another scenario where you wanna use useEffect because useEffect can help you synchronize *prop values* or *state values* to DOM APIs like this dialog showModal method or a close method, because as you learned, the effect function you define with useEffect will be executed right after the component function.

**<span style='color: #495fcb'> Note:** we can think that using this modal as a *side effect*, because whilst calling these methods `shoeModal, close` will indeed have an impact on the UI, it does not have a direct impact on this JSX code `return createPortal(...)`.

### Understanding Effect Dependencies

Effect dependencies are in the end simply prop or state values that are used inside of this effect function. So put in our words, any value that causes the component function to execute again, which is the case in the end for props and state.

any such value is a dependency if it's used inside of useEffect.

Any other value like refs or as we have it here in the app component function objects and methods that are built into the browser, any such value are not considered dependencies because useEffect only cares about dependencies that would cause the component function to execute again.

this effect function should run whenever the component function executed if one of its dependencies changed.

Now as explained earlier, with an empty array, that will never be the case because if you don't have any dependencies, they also can't change.

But now in the `modal` component, we're using the `open` prop in this effect function and this prop or the value we receive through that prop can, of course, change and it will change in this application.

**<span style='color: #875c5c'>IMPORTANT:** with most recent *Javacript* & *React* versions, you actually get an error if you add `open` as a dependency:

```javascript
 useEffect(() => {
    open && dialog.current.showModal();
    !open && dialog.current.close();
  }, [open]);
```

above would fail and instead you need to have an empty dependency `[]`.

**<span style='color: #9e5231'>Error:** Throws the error  *Failed to execute 'showModal' on 'HTMLDialogElement': The dialog is already open as a non-modal dialog, and therefore cannot be opened as a modal dialog*

**<span style='color: #875c5c'>IMPORTANT:** For anyone else who may run into this error, check to see if you still have `open={open}` in the dialog tag within **<span style='color: #a8c62c'> Modal.jsx**. With this in place the Modal function will execute with open=true and open the dialog as non-modal, after which useEffect will attempt to show the dialog as a modal and the error will occur. Removing the open attribute in the dialog tag should resolve the issue in this case.

```javascript
 <dialog className='modal' ref={dialog} open={open} onClose={onClose}>
```

```javascript
 <dialog className='modal' ref={dialog} onClose={onClose}>
```

### Fixing small Bug

The `<dialog>` element can also be closed by pressing the **ESC** key on the keyboard. In that case, the dialog will disappear but the state passed to the open prop (i.e., the modalIsOpen state) will not be set to false.

Therefore, the modal can't be opened again (because modalIsOpen still is true - the UI basically now is not in sync with the state anymore).

To fix this issue, we must listen to the modal being closed by adding the built-in onClose prop to the `<dialog>`. The event is then "forwarded" to the App component by accepting a custom onClose prop on the Modal component.

The Modal component therefore should look like this:

```javascript
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
  
function Modal({ open, children, onClose }) {
  const dialog = useRef();
  
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
  
export default Modal;
```

In the App component, we can now set the handleStopRemovePlace function as a value for the onClose prop on the `<Modal>` component:

```javascript
  <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
    <DeleteConfirmation
      onCancel={handleStopRemovePlace}
      onConfirm={handleRemovePlace}
    />
  </Modal>
```

### Intoducing useEffect's Cleanup Function

we would not need this effect function because setting the timer wasn't the problem. Neither does this create an infinite loop as we did it with the user location earlier, nor do we have the problem we faced in the modal where we needed to work with some ref that wasn't connected yet.

Instead here the problem is not setting the timer but cleaning it up, getting rid of it, when this component function disappears.

**<span style='color: #875c5c'>IMPORTANT:** this `useEffect()` function can return another function which will then be executed:

- by React right before this effect function runs again
- or, and that's the important part here, right before this component dismounts. So, before it's removed from the DOM.

### The Problem with Object & Function Dependencies

```javascript
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  console.log('Timer set!');
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log('Cleaning timer!');
      clearTimeout(timer);
    };
  }, [onConfirm]);
//...
}
```

So `onConfirmed` is a function and when adding functions as dependencies, there is a danger of creating an infinite loop.

because when you add a dependency to this array, you're telling React that this effect function should be re-executed whenever this modal component function executed.

if the dependency would be a number or a string, the effect function would run again if that number or string changed.

Now, when the dependency is a function, it's a bit trickier.

you would probably say that it never changes, the code and the function is always the same, but technically, that's not correct because functions in JavaScript are just values.

Specifically, they are objects.

And this function object, this `handleRemovePlace` function object is indeed recreated every time this `App` component function executes because this entire function body then runs again. And all the values that are defined in this app component function are recreated whenever the app component function is executed again.

And since functions are objects in JavaScript, a new object is created. And as you might know in JavaScript when you create two different objects even if they have the same shape or the same code as it's the case here with the function, even if that's the case, they're not the same.

**<span style='color: #495fcb'> Note:** JavaScript does not treat these two functions as equal even though they have the same code, it would be exactly the same with 2 JavasScript objects.

*in this specific case, we don't enter the infinite loop because this component disappears.*

to simulate an infinite loop in **<span style='color: #a8c62c'> App.jsx**, `handleRemovePlace` function , if you comment out `setModalIsOpen(false);`, you would end with an infinite loop until you close the modal.

### UseCallback Hook

**<span style='color: #875c5c'>IMPORTANT:** *React* offers a hook which you can use to make sure that this function is not recreated all the time

`useCallback` also does something else. It returns a value, specifically, it returns that function which you wrapped, but now such that it's not recreated whenever this surrounding component function is executed again.

React stores it internally in memory and reuses that stored function whenever the component function executes again

**<span style='color: #495fcb'> Note:** that's why you should useCallback when passing functions as dependencies to useEffect.

`useCallback` actually also takes a dependency array, and this dependency array indeed works exactly as the dependency array of `useEffect`.

you should add any prop or state values that are used inside of this wrapped function. None needs to be added because they don't trigger this component to be rendered again. **it's prop or state values that should be added here, any other values depend on state values (e.g. context values, other functions)**

*React* will now only recreate this function here with useCallback if your dependencies changed. But if you have an empty array of dependencies, there is nothing that could change and therefore, this function isn't recreated.

### useEffect's Cleanup Function: another Example

by setting setInterval, right in the component function, we have the problem that we create an infinite loop here as explained in the section.

So we should again `useEffect` hook, and then define our effect function and this dependencies array.

```javascript
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  
  setInterval(() => {
    setRemainingTime((prevTime) => prevTime - INTERVAL);
  }, INTERVAL);
//...
}
```

**<span style='color: #495fcb'> Note:** to clean the interval, We have to return this cleanup function that will be executed by React, and we should then store a reference to this interval in a constant or variable.

### Optimizing State Updates

on the performance, I am managing this interval in my `deleteConfirmation` component. And in this interval, we're updating the state every 20 milliseconds which means that this component runs every 20 milliseconds which also means that React has to compare the unconfirmed value here to figure out whether this effect function should run again.

And React has to reevaluate this entire JSX code below in that component.

**<span style='color: #495fcb'> Note:** It would be better to outsource this progress indicator and this related state logic and useEffect hook into a separate component, so that it's then just this one single component that should be re-executed all the time.

## Practise Project: Building a Quiz App

### Deriving Values, Outputting Quesions & Registering Answers

With React, you typically want to manage as little state as possible and derive as much state as possible instead.

### Adding Question Timers

**<span style='color: #a8c62c'> QuestionTimer.jsx**

```javascript
export default ({ timeout, onTimeout }) => {
  setTimeout(onTimeout, timeout);

  return <progress id='question-time' />;
};
```

Now, I'm not using `useEffect` here at this point because even though this is a side effect, it's at the moment not an effect that would require the usage of useEffect,

- because I'm not facing the danger of an infinite loop here
- because I'm not updating any component state here,
- and I'm also not trying to interact with an element that wouldn't be available yet.

```javascript
export default ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState();
  setTimeout(onTimeout, timeout);
  setInterval(
    setRemainingTime((prevRemainingTime) => prevRemainingTime - INTERVAL),
    INTERVAL
  );
  return <progress id='question-time' />;
};
```

**<span style='color: #9e5231'>Error:** And this would now of course create an infinite loop, because we're updating the state here. This would re-execute this component function. We would create a new interval where we would also update the state again and we would quickly have multiple intervals up and running which all would call this component function.

we don't have any dependencies that would need to be added here, because you basically only need to add props and state values, and we're using neither of those in this effect function.

```javascript
useEffect(
  () =>
    setInterval(
      setRemainingTime((prevRemainingTime) => prevRemainingTime - INTERVAL),
      INTERVAL
    ),
  []
);
```

But we should now of course also wrap this timeout code with useEffect, because otherwise when we update the remaining time, which we will do every 100 milliseconds, this component function executes again and this timer would be recreated, and we therefore would quickly have multiple timers up and running.

**<span style='color: #875c5c'>IMPORTANT:** And here we now do need to add a dependency, because we actually have two dependencies that are used in this effect function. Because we're using two props in there,

- the timeout prop
- and the onTimeout prop, which is a function, but still a prop.

### Working with Effect Dependencies & UseCallback

```javascript
useEffect(() => {
  setTimeout(onTimeout, timeout)
}, [timeout, onTimeout]);
```

The `QuestionTimer` component is rendered once, here, when that quiz is being rendered but it's not getting recreated thereafter.

Sure, the quiz component rerenders whenever an answer is selected, but this component instance of the question timer does not change. It was part of the old JSX code. It is part of the new JSX code.

So in theory, this `useEffect` function shouldn't execute again (the one where there is `setTimeout`),

So the fact that this effect function keeps on getting executed must be related to our dependencies.

Now one dependency is the `timeout` and that value never changes. So that should not trigger the effect function to run again

So it must be this function that changed: `onTimeout={() => handleSelectAnswer(null)}`

That's the only possible explanation here. And indeed this is what's happening here, because functions in JavaScript are values, they are objects. And when a function is created like here, when this JSX code is evaluated, it is a new object in memory that's being created. And even if it contains the same logic and code as before it's still technically a new value in memory.

So every time the JSX code in this quiz component gets reevaluated a new function gets created. And this JSX code gets reevaluated whenever the state in this quiz component is updated, which happens when the user picks an answer.

**<span style='color: #875c5c'>IMPORTANT:** so we need to use the `useCallback`, which ensures that functions don't get recreated.

- when using `useCallback()`, if the function you use calls another function, you also needs to wrapp that other function with `useCallback` too.
- **<span style='color: #495fcb'> Note:** state updating functions don't have to be added though, because React will guarantee that they never change.

### Using Effect Cleanup Functions & Using Keys for Resetting Components

you'll see that the progress bar is empty after five seconds. And that's happening because this interval here is actually getting triggered twice and therefore we have two intervals running behind the scenes that keep on updating this state.

And therefore the progress bar is empty in half the time. And that's happening as I mentioned before, because we have React's StrictMode turned on in main JSX.

**<span style='color: #875c5c'>IMPORTANT:** Now during development, and only there, **this StrictMode will actually execute every component function twice**, which is done to help you catch certain errors in your app.

Because in theory, your app should work in exactly the same way, no matter if a component function gets executed once when being rendered to the screen or 100 times. And clearly here, that's not the case, *which is an indicator for a bug we have in our code*.

**So here in this case, StrictMode helps us identify that we have a bug**. And what's missing here in our code is a cleanup function. We have to clean up the existing interval if this effect function runs again.

when adding that cleanup function as a return value in that `useEffect` function, this cleanup function will then automatically be executed by React:

- before it runs this effect function again,
- or when this component is unmounted from the DOM (so if it disappears from the screen)

Now why is that timer and progress bar not reset when we move on to a new question?

Well, because this question timer component doesn't get recreated. Keep in mind that we're using the question timer component in the `Quiz` component. And when we move on to a new question, we do that by storing a user answer, and then the `activeQuestionIndex` changes because the length of user answers changed.

But therefore, of course the JSX code of `Quiz.jsx` just gets updated. But the inner  `QuestionTimer` component is not being recreated because it hasn't changed. It was part of the DOM before. It is still part of the DOM now. The only thing that changed is the question text that's being displayed and the answers that are displayed.

But this component `QuestionTimer` was there and is there, and therefore it's not unmounted, not remounted, and therefore the timers and intervals in that component are not reset.

Now of course here in this application, we'd like to have this timer to be reset though, because of course it should reset when the question changed.

**<span style='color: #875c5c'>IMPORTANT:** And there is a simple yet very powerful trick you can use in React to achieve this.

**You can add a key to this component,** because this key prop can actually be added to any element and any component, because key is a built-in prop React is looking for. Just as we use these keys for list data, helping React to manage the list efficiently.

>**<span style='color: #875c5c'>IMPORTANT:**But the key prop also has another purpose. Whenever it changes on a component, even if that component is not part of a list, whenever it changes React will destroy the old component instance and create a new one. So it will unmount and remount it basically.

As we move to a new question, it will jump back and reset. A new timer will be set, a new interval will start!

```javascript
<QuestionTimer
  key={activeQuestionIndex}
  timeout={TIMER}
  onTimeout={handleSkipAnswer}
/>
```

### Highlighting Selected Answers & Managing More State

Because `handleSelectedAnswer` function is wrapped by `useCallback`, it should be recreated whenever the activeQuestionIndex value changed because we're using that value in that function body and we don't want to use an outdated value here. **Hence it must be added as a dependency**

### Splitting Components Up to Solve Problems

So why do these answers jump around as I select one?

Well, they jump around, because in this `Quiz` component, we are shuffling those answers.

And this code, of course, executes whenever this quiz component function executes.

Thus far, this was no problem, because this function only executes again if the state changes, and up to this point, we only changed the state once we moved to a new question, but this is not the case anymore. Instead now we have this in-between state where we highlight the selected answer, so where we don't move to a new question right away. And therefore this quiz component function gets executed again, We only wanna shuffle those answers once.

One way would be to add a new state, a `shuffledAnswersState`, which could initially be an empty array,  and then we could use the `useEffect` hook to make sure that this only gets updated when this component renders for the first time or if the active question index changed. And adding `activeQuestionIndex` as a dependency of `useEffect`.

**<span style='color: #495fcb'> Note:** you should typically try to minimize the usage of use effect, because it happens relatively quickly that you use use effect wrong, and therefore potentially add bugs to your application.

**<span style='color: #875c5c'>IMPORTANT:** you could instead use a ref with the `useRef` hook. Now not to connect some HTML element, but instead **to manage some value, which will not change if the component function is executed again.**

>you can useRefs for managing values that are stored and managed independently from the component function lifecycle to which they belong.

it would be great if the answers component would simply be recreated if the old one would be destroyed and a new instance would be created as the question index changes.

If we could unmount and remount it, because then all that code here would execute again. **And that's the advantage of putting this here into a separate component**, because that's now fairly easy to achieve with help of that **key prop** again.

**<span style='color: #9e5231'>Error:** you can't use the same key with 2 sibling components.

## React & Optimization Techniques

### React builds a component tree / How react works behind the scenes

#### every component function must return something that can be rendered, typically JSX code, sometimes also a portal

JSX code is, in the end, translated to JavaScript code and translated to actual elements that can be rendered on the screen.

#### React builds a component tree

### Analyzing Component Function Executions via React's DevTools Profiler

if we click on the *plus* or *minus* icon, React executes the `Counter` component function.

- it has no impact on the parent component, the app component.
- it does have an impact on the child components though, because of course all these custom component functions are executed again, and they do receive those prop values again

**<span style='color: #495fcb'> Note:** all this can be seen in **React DevTools\Profiler\Flame Graph**

### Avoiding Component Function Executions with memo()

if I type one character in the *Set Counter* section, you see in the **React Profiler, console** that a bunch of component functions were executed again. Basically all components that make up this app.

And why is that happening here? that's happening because this input field here lives directly in the app component.

**<span style='color: #a8c62c'> App.jsx**

`<input type='number' onChange={handleChange} value={enteredNumber} />`

I have an `onChange` handler on that input field. And therefore on every keystroke I update some state. And of course, as you learned, when the state changes, this component function gets executed again. That means all child component functions get executed again.

**<span style='color: #495fcb'> Note:** Now this does not necessarily have an impact on the actual DOM that's rendered, so it's not that bad, but of course it's still not optimal because it is a bunch of code that's executed.

#### To fix the problem

*React* gives you a built-in function `memo()` that you can wrap around your component functions, that will prevent unnecessary component function executions. `export default memo(function Counter({ initialCount }) ...`  

Whenever the component function would normally execute again for example, because the `App` component function executes, `memo` will take a look at the old prop value and at the new prop value that would be received now.

if those prop values are exactly the same which for arrays and objects means that they really have to be exactly the same array or object in memory,  this component function execution here will be prevented by memo.

**<span style='color: #875c5c'>IMPORTANT:**

- if `initialCount` (prop) changed
- or of course if its internal state changed, that's not affected by memo.
- Memo only prevents function executions that are triggered by the parent component, so the `App` component.

If this `initialCount` prop value in this case  did not change, there is no reason for the counter component to be executed again, just because the parent component executed again. Of course, if that internal state changes, that should definitely trigger this component function.

`memo()` does not care about internal changes. But external changes of course only makes sense for this component here to be executed if the prop value changed.

**<span style='color: #875c5c'>IMPORTANT:** of course, if this `Counter` component function is prevented from being executed again, these nested component functions  also won't be executed again!

**<span style='color: #875c5c'>IMPORTANT:** it makes sense to use `memo()`, to wrap it around a component that's as high up in the component tree as possible., because checking the props values  before it executes a component **costs performance**
> That's why you shouldn't use it on components where **props will change frequently**

### Avoiding Component Function Executions with Clever Structuring

So `memo`, if used with care, can be useful, but it's not the only way of preventing unnecessary renders here.

Another technique that is often even more powerful than `memo` is a clever component composition in your application.

**<span style='color: #875c5c'>IMPORTANT:** state changes and re-executions of child components don't trigger parent component executions.

**<span style='color: #495fcb'> Note:** With the new `ConfigureCounter` component, we should remove `memo()` component wrapper to the `Counter` component, to avoid the **props** checks that will costs performance.

### Understanding the useCallback() Hook

Re-rendering the `IconButton` component within  **<span style='color: #a8c62c'> Counter.jsx** doesn't make sense as those button components and the values they output of course technically don't change.

even though these components contain very little code, we could wrap icon button with `memo` to make sure it's not getting re‐executed unnecessarily. So we'll also prevent the execution of two components `PlusIcon` and `MinusIcon` by just wrapping `IconButton` with memo.

**<span style='color: #495fcb'> Note:** though this doesn't work, by investigating the **props** accepted by `Counter.jsx`, neither *children* nor *icon* seem to be dynamic.

`icon` prop is just the name of the components (PlusIcon & MinusIcon), not a pointer to the components themselves, because **MinusIcon and PlusIcon are NOT defined inside the `Counter` component function, instead they are imported from other files**.

the problem then comes from the rest of the `...props` being forwarded to `IconButton`:

- `onClick={handleDecrement}`
- `onClick={handleIncrement}`

**<span style='color: #875c5c'>IMPORTANT:** keep in mind that they are created inside of the `Counter` component function.

These are nested functions, and therefore, indeed they will technically be recreated every time this `Counter` component function executes, every time one of the **state changes**

it does not matter that the code of the function is the same and does not change, the component function as a value, as an object in JavaScript is recreated. And it will be a different object in memory than before for the last execution of the `Counter` component function and therefore it technically is a new prop value.

Now this recreation here can be prevented with help of a special hook provided by React, which we also already used before in conjunction with effects and the `useEffect` hook. It's the `useCallback` hook.

This hook can be used to avoid the recreation of a function and it is sometimes needed:

- if you have a function as a dependency of `useEffect`.
- and it's also needed in conjunction with `memo` to avoid unnecessary re‐executions.

you use useCallback by wrapping it around a function in your component function. And then by also as a second argument by passing an array of dependencies to useCallback. And here you would list:

- all props
- or state
- or context values you would be using inside of this function

>**<span style='color: #495fcb'> Note:** But here I'm only using `setCounter` which is a **state updating function.** And those state updating functions are guaranteed to never change by React, and therefore you don't need to add them to this dependencies array.

```javascript
const handleDecrement = useCallback(() => {
  setCounter((prevCounter) => prevCounter - 1);
}, []);

const handleIncrement = useCallback(() => {
  setCounter((prevCounter) => prevCounter + 1);
}, []);
```

### Understanding the useMemo() Hook

Just as you might want to prevent component function executions with `memo`, you also might want to **prevent the execution of normal functions that are called inside of component functions, unless their input changed.**

And React gives us a hook that can be used for this scenario and problem, the `useMemo()` hook.

`useMemo` is wrapped around normal functions that are executed in component functions to prevent their execution, while memo is wrapped around component functions.

**<span style='color: #495fcb'> Note:** `useMemo` should really only be used if you have a complex calculation that you want to prevent.

useMemo then also wants a dependencies array, just as useCallback wanted it. And it will only re-execute this function if one of those dependencies here changed. So if you have an empty dependencies array this will never re-execute.

And indeed, if `initialCount` changes,  `isPrime` will yield a different result, and therefore you should add `initialCount` as a value here in this dependencies array.

**<span style='color: #875c5c'>IMPORTANT:**  you really should not overuse `useMemo`. You should not start wrapping it around all your functions, because just like Memo, of course it does need to perform this extra dependency value comparison.

And if you have a function that for example simply needs to be executed on basically every component function, re-execution. Adding this extra check doesn't make any sense and instead just cost extra performance.

### React Uses A Virtual DOM - Time To Explore It

Keep in mind that it's technically this `index.html` HTML file that is being loaded when you visit the website and this is a pretty empty page in the end. It just has one div and this script import.

That's why if you view the page source code, you see nothing.

And if you instead go to the elements tab, you see the, well, full DOM tree here.

but if you then click a button (like *increment/decrement*), this is not all recreated and reinserted because that would be super inefficient.

So just because a component function is executed again, like this `Counter` component function when we click one of the *increment/decrement* buttons, just because that happens does not mean that all the JSX code that's produced by that component function is reinserted in the DOM. The old code is not thrown away and replaced by new HTML code. And you can see that in the DevTools.

if you expand in *DevTools/Inspector* the `counter section`, while clicking on *increment/decrement*, only the `counter-output` is updated: **only elements that flash were touched by React.**

#### from React DevTools/Profiler

![image info](./13_sc1.png)

Even though technically, this `Counter` component also returns a paragraph and all of the buttons. Nonetheless, none of that flashes here, which means it's not changed in any way.

>**<span style='color: #875c5c'>IMPORTANT:** And that's the case because React works with a so-called virtual DOM for finding out which parts of the actual DOM should be updated. And it's using this virtual DOM because working with such a virtual DOM, which lives only in memory is faster than working with that real DOM.

#### how does Virtual DOM works?

if I reload the page and the overall React app starts therefore and is rendered for the first time:

- React creates that component tree
- and then in the end derives the actual HTML code that should be rendered from that component tree
- and it then creates a virtual DOM snapshot, So it's not reaching out to the real DOM yet. Instead, it just creates a virtual representation of how that real DOM should look like.
- As a next step, React then compares that to that last virtual DOM snapshot it created. Now, if the app just started, there is no lost snapshot and therefore, React of course, sees that everything changed and it goes ahead to the real DOM and makes those changes, which means in this case, the entire virtual DOM is inserted into the real DOM, into this `div with id #root`
- Now, when I click a button here, React in the end repeats that process: It again creates that component tree, and of course, it can quickly find out that only a part of that tree changed, that only some of those component functions were executed. and depending on if you are using memo or not, And React derives the updated HTML code. And it then compares that code with the old code, Still only virtually, it does not compare anything with the real DOM, it just compares this new virtual DOM snapshot with the old virtual DOM. And of course, it then quickly finds out which parts changed. And in our example, this is only the text inside of the span.
- as a next step, React goes ahead and applies those changes to the real DOM and only those changes.

**<span style='color: #875c5c'>IMPORTANT:** Just because a component function executes and it's JSX code therefore is evaluated, does not mean that this code is inserted or updated in the real DOM, because all those real DOM operations are quite performance intensive and therefore, React does not change the real DOM all the time. Instead, it just creates these snapshots, compares them and only makes the necessary changes to get to the target result.

### Why Keys Matter When Managing State

state you register in a component function is scoped to that component. And also is recreated whenever you reuse this component.

**<span style='color: #875c5c'>IMPORTANT:** if we duplicate the `counter` component receives its own `[counter, setCounter]` state; this state is not shared!

>And this is, of course, a super important concept because **that's what makes components reusable. State is scoped to a component.** And if you use the same component function to create multiple component instances based on that function, **every instance has its own isolated state.**

**<span style='color: #875c5c'>IMPORTANT:** React tracks state by component type & position (of that component) in the component tree.

So the state does not just belong to this component type, but also to the position where this component is used!

Problem where the state can become wrong typically only occurs in lists because it can only occur if you have sibling components that are of the same type and the number or position of those components may change; with dynimically generated list.

And we have that problem here because I am using a key, but I am setting it to my `index`. So to the index of the count value that's being output here and that index is in the end not a value that's strictly mapped to a specific count value. Instead, the index always stays the same.  
those keys haven't changed, but the values that belong to those keys have.

And that's why you typically shouldn't do that; using the `index` of a `map` function and why you instead should try to use a key value that is strictly connected to a specific value.

**<span style='color: #9e5231'>Error:**
**<span style='color: #a8c62c'> CounterHistory.jsx**

```javascript
return (
  <ol>
    {history.map((count, index) => (
      <HistoryItem key={index} count={count} />
    ))}**<span style='color: #a8c62c'> Counter.jsx**
  </ol>
);
```

**<span style='color: #a8c62c'> Counter.jsx**

```javascript
const handleDecrement = useCallback(function handleDecrement() {
  setCounterChanges((prevCounterChanges) => [-1, ...prevCounterChanges]);
}, []);
```

#### Implementing a correct key

**<span style='color: #a8c62c'> CounterHistory.jsx**

```javascript
return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
```

**<span style='color: #a8c62c'> Counter.jsx**

```javascript
const handleDecrement = useCallback(function handleDecrement() {
  setCounterChanges((prevCounterChanges) => [{value: -1, id: uuidv4()}, ...prevCounterChanges]);
}, []);
```

And that's why this **key** here matters, because it allows React to clearly identify a component if there is a dynamic list of similar components. And this then makes sure in this case, that the state moves together with this component instance.

**<span style='color: #875c5c'>IMPORTANT:** using efficient keys helps with state management.

### More Reasons Why Keys matter

Now adding such a key here also has another benefit.

**<span style='color: #9e5231'>Error:** You'll notice that every time I click a button *increment/decrement*, basically all list items change. They all flash, which means they all change, they're all touched by React. And that happens because at the moment, I'm using index as a key

React  basically throws away the old list and re-renders the new list because everything changed. Now of course, to us humans it's clear that that's not really the case. Instead, it's only the first list item that was added when we click such a button, and the other items are just the old items moved down by one.

Now, if we switch to that better key of `count.id`, it's now only parts of the list that are updated and the other elements are not updated, are not flashing.

>because React does indeed now understand that the other elements were part of the DOM before as well because it knows that key from the previous virtual DOM snapshot because that key is also stored there. And it's therefore able to reuse those old DOM elements and instead of recreating them,

**<span style='color: #875c5c'>IMPORTANT:** using efficient keys doesn't only help with state management, it also helps React render such lists in a more optimal way.

### Using Keys for Resetting Components

**<span style='color: #a8c62c'> Counter.jsx** This initial value `initialCount` you pass to `useState` is never used after the first execution of this component function. It's really just used for initialization.

But what if you now want to reset the counter, if this prop changes?

Well, one thing you could do is you could use `useEffect`.

```javascript
useEffect(() => {
  setCounterChanges([{ value: initialCount, id: uuidv4() }]);
}, [initialCount]);
```

Now this approach would work, but you're actually encouraged to limit the usage of useEffect because it is often used in a suboptimal way **and it also triggers an extra component execution.**  this function `useEffect` runs after the component function execution.

And that's not optimal.

Therefore, a better way of forcing a component functional reset, which in the end is what we want to do here when `initialCount` changes, is to use a key on the component `Counter`.  **you can add the key prop to any component**

**<span style='color: #495fcb'> Note:** if we wanted also to add a key to the second `Counter` component we added, we would need to find another unique key.

>whenever the **key value** changes, so the `chosenCount` state value changes, React will basically throw away the old component instance. It will destroy it and recreate it. So as if it would be rendering this counter component for the first time.

**<span style='color: #495fcb'> Note:** it's an efficient pattern, which you should use if you have some state that may change in a parent component, that should then lead to some child component being reset.

we avoid this extra component function execution because now the old component is simply removed and a new component of the same type is reinserted, and re-executed only once.

### State Scheduling & Batching

**<span style='color: #875c5c'>IMPORTANT:** you should especially keep in mind that you can't use the new state value right after setting it.

it's a common misconception that people think  that they update the state in one line and then in the next line they can use the updated state. You still get the old state.

This state update is scheduled by React. And in the end it will of course be executed pretty much instantly, but it will not be executed right away and it will not magically change this value which belongs to the old component function execution.

Instead, this will trigger a new component function execution and the new state will be available the next time this executes.

it is considered a best practice to perform state updates that depend on the old state value using this function form which I also showed you before in this course where you pass a function to the state updating function.

**React guarantees you that here you will always get the latest state snapshot available**. and you need to use this function form when you have to process multiple state updates, triggered simultaneously, in the same function.

executing such a state updating function triggers the component function to run again, you could expect the component function to run twice because we have two state updates. But this is not what happens here, **because React also performs state batching**,

**<span style='color: #495fcb'> State Batching:** multiple state updates that are triggered from the same function for example, are batched together and will only lead to one component function execution.

```javascript
function handleSetCout(newCount) {
  setChosenCount(newCount);
  setChosenCount((prevCount)=> prevCount+1);
}
```

### Optimizing React with MillionJS

**<span style='color: #a3842c'>Link:** [https://million.dev/](https://million.dev/)

*Million.js* improves the performance by replacing React's virtual DOM mechanism with a more efficient mechanism, which is faster and derives required DOM updates faster than the existing algorithm that's built into React.

## An Alternative way of buildding components: Class-based Components

### Module Introduction

Besides building components as functions, which is what we did up to this point, you can also define components with classes. You can build Class-based Components.

### What and Why

Functional components is the default & most modern approach

Class component were required in the past, prior to React 16.8, introducing **React Hooks**, before *state* and *sideEffect* couldn't be managed with functional components,

### Adding a First Class-based Component

**<span style='color: #495fcb'> Note:** Class-based components can work together with functional components.

In reality, you will most likely build a project by either sticking to just functional or to just class-based components though.

You can mix and match, but that will mostly matter if you are working on an existing application and you're adding new features. If you're starting a brand new project, you will probably go with your favorite approach.

### Working with State & Events

With class-based components, **your state always is an object.**

**<span style='color: #495fcb'> Note:** It also has to be a property named `state`! This name is NOT up to you.

With Functional components, you can use multiple `useState` calls, or create one state object and group it together there but that is optional with functional components.

With class-based components, this is not optional, there you have to group all the states that makes up a component into one object.

when using `this.setState()`, it won't override the old state but instead *React* will behind the scenes merge the object you're passing here with your existing state.

When you add the constructor to your class and you extend another class, you need to call super which calls the constructer of the super class
so if the class were inheriting from.

### Class Components Lifecycle (Class-based Components only!)

- componentDidMount() ~useEffect(...,[]) with empty dependency
- componentDidUpdate() ~useEffect(...,[val]) with dependency
- componentWillUnmount() ~cleanup function of useEffect()
- render()

### Lifecycle Methods In Action

using `componentDidUpdate`, this method will be called automatically by *React* whenever this component is re-evaluated because it's state changed, for example,  also shows you how nice `useEffect` is.

It's very short and by specifying the dependencies, we don't have to add an if check inside of it.

Let's say our dummy users are loaded from a server from a database. So we're sending an HTTP request.

Hence we can't use `componentDidUpdate` in this scenario because I don't wanna fetch the users over and over again. Instead, we wanna fetch the users when this component is rendered for the first time, and that is something we would typically do with `componentDidMount`.

`ComponentDidMount` will only run once when the component initially was rendered for the first time. If then the component is updated thereafter, `componentDidMount` will not execute, instead, `componentDidUpdate` will execute.

### Class-based Components & Context

With `useContext`, you can listen to multiple context in one of the same component by calling use context multiple times and pointing at different contexts.

This will not be possible with class based components, because there you can only connect a class based component to one context.

`static contextType = UsersContext;`

once so if there are two contexts which should be connected to one at the same component, this would simply not be an option, you would have to find some other work around like wrapping it in another component

### Introducing Error Boundaries

As long as there are users, everything is fine, but if I search for something which is not part of any username, this will crash.

```javascript
componentDidUpdate() {
  if (this.props.users.length === 0) throw new Error('No users provided!');
}
```

**<span style='color: #495fcb'> Note:** Of course I could just simply not throw an error, but instead handle this case differently, but it's also quite common to use errors, not as a bad thing, but simply as a way of transporting the information that something went wrong from place A to place B in your application.

in regular *JavaScript*, we use `try/catch` blocks. Nonetheless, if an error is generated inside of a component and we can't handle it in that component though, let's say we don't wanna handle this error in the `Users` component, but in a parent component instead, then we can't use `try/catch`

`<Users users={this.state.filteredUsers} />`

the `Users` component is generating that error, but that is not a regular JavaScript statement above. Instead we have JSX code and the error is generated inside of that JSX code, inside of that `Users` component.

**<span style='color: #875c5c'>IMPORTANT:** Now, we can't wrap this JSX code with `try/catch`. that's why we have to use the concept of **Error Boundary**, and the specila lifecycle method `componentDidCatch()`

## Sending HTTp Requests (e.g. Connecting to a database)

### How (Not) To Connect To A Database

You also have certain restrictions when writing front-end code, So code that runs in a browser.

For example, you can't easily access a file system. Especially not a shared file system that lives on some central server or computer. You don't really have those capabilities in the browser.

And therefore, instead of directly accessing a database or some file system that may hold shared data, you instead communicate with a backend server, which kind of acts as a middleman.

So that your front-end React application, which runs on the browser, and where users can theoretically view the entire code, that application can reach out to a backend. So a separate project running on a separate server, a computer owned and operated by you, the developer. And it's then on that backend where you can interact with databases, because that backend code is inaccessible by the users of your website because only you, the owner and developer, only you have access to the code on such a backend server.

**<span style='color: #875c5c'>IMPORTANT:** And to connect the frontend and the backend, you use **HTTP requests**. But what's super important, and a safety feature here, is that you can only send HTTP requests that are allowed and accepted by this backend. And if a backend doesn't want a certain request, it's not possible. And therefore you can control what users can do and can't do.

**<span style='color: #495fcb'> Note:** And therefore it's quite common to have separate frontend and backend projects where you also don't have to use the same programming language.

You can also build full-stack React apps where you kind of blend frontend and backend whilst still ensuring that the backend code can't be accessed with extra frameworks and libraries like *NextJS* or *Remix*.

### Preparing the App For Data Fetching

Previously in this course, we for example also fetched data from local storage with the `getItem` method.

And the great thing about local storage is and was that you can access it synchronously, that the data you're fetching is there immediately. You don't need to wait for it.

```javascript
const places = localStorage.getItem('places');
const [availablePlaces, setAvailablePlaces] = useState(places);
```

Now that works with local storage, but not when getting the data from a backend. Because when talking to a backend you are sending an HTTP request that needs to travel through the internet to that backend server and then that backend server needs to do some work and send back a response.

And that all may take some time. It's not an instant process. But the problem is that if this process of getting places here takes milliseconds or seconds, you can't wait for that data here in this component because this component function does not wait for any data to arrive. Instead, it executes pretty much instantly in one single step you could say.

So if this places data is not available initially,

- you must first render this component without that data
- and then update it once that data is available.

### How NOT To Send HTTP Requests (And Why It's Wrong)

built-in `fetch` function:  This is a function that's not provided by React but instead directly by the browser.

And fetch is a function that can be used to send an HTTP request to some other server.

Fetch returns a promise, it's a wrapper around an eventually received response object. So a promise is a standard JavaScript object that will yield different values depending on the state of that promise.

And to access those different values, you can chain methods on the result of calling `fetch`. You can add the `then` method, and pass a function that should be executed once the promise is resolved.

**<span style='color: #875c5c'>IMPORTANT:** Now in modern JavaScript, you can also use the `await` keyword to access this response and have a more readable syntax. But this is only available if the function in which this code executes is decorated with `async`, **which on the other hand is not allowed for component functions.** That's a restriction implied by React.

`JSON` is the facto standard data format for exchanging data with backends.

```javascript
fetch('htto://localhost:3000/places')
  .then((res) => res.json())
  .then((resData) => setAvailablePlaces(resData.places));
```

**<span style='color: #9e5231'>Error:** This would cause an infinite loop, The problem is that in the second then block we then update the state, which of course causes this component function to execute again.

So we would end up with a new request, a new state update, a new execution, a new request, a new state update, and so on.

**<span style='color: #875c5c'>IMPORTANT:** *We can `useEffect` to wrap this code and to avoid this infinite loop*.

### Sending HTTP Requests (GET Request) via useEffect

`useEffect` function will always execute immediately after this component function executed but only if it's dependency is changed.

With an empty array of dependencies and therefore those dependencies of course never change because what's not there can't change. And therefore indeed in this case, this  component function will only execute once after this component function executed for the first time.

### Handling Loading States

```javascript
useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      // NOTE: to simulate fetching
      setTimeout(async () => {
        const response = await fetch(`${url}places`);
        const resData = await response.json();
        setAvailablePlaces(resData.places);
        setIsFetching(false);
      }, 3000);
    }

    fetchPlaces();
  }, []);
```

**<span style='color: #875c5c'>IMPORTANT:** as we can use `await` inside `useEffect()`, the trick is to create an **async function** within `useEffect` body and call it (omitting `await`)

### Handling HTTP Errors

2 main ways of how fetching data might fail:

- network connection crash
- backend sends back an error response

### Optimistic Updating

```javascript
async function handleSelectPlace(selectedPlace) {
  setUserPlaces((prevPickedPlaces) => {
    if (!prevPickedPlaces) {
      prevPickedPlaces = [];
    }
    if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
      return prevPickedPlaces;
    }
    return [selectedPlace, ...prevPickedPlaces];
  });

  await updateUserPlaces([selectedPlace, ...userPlaces]);
}
```

I'm updating my local state before I'm sending this request and before I'm waiting for the response.

So when I pick a place here, as you can tell the UI updates instantly and the request is basically sent at the same time behind the scenes. **Now of course, sending that request could fail though.**

```javascript
async function handleSelectPlace(selectedPlace) {
  setUserPlaces((prevPickedPlaces) => {
    if (!prevPickedPlaces) {
      prevPickedPlaces = [];
    }
    if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
      return prevPickedPlaces;
    }
    return [selectedPlace, ...prevPickedPlaces];
  });

  try {
    await updateUserPlaces([selectedPlace, ...userPlaces]);
  } catch (err) {
    console.error(err);
    setUserPlaces(userPlaces)
  }
}
```

Alternatively, we could of course also move `await updateUserPlaces()` on top, before the state update `setUserPlaces`.

And now this state update would wait until this request is done. But if we're doing that, we should be showing some loading text or loading spinner because otherwise it might seem to the user as if the application is stuck.

```javascript
<Modal open={errorUpdatingPlaces} onClose={handleError}>
  {errorUpdatingPlaces && (
  <Error
    title={'An error occurred'}
    message={errorUpdatingPlaces.message}
    onConfirm={handleError}
  />
  )}
</Modal>
```

I also wanna make sure that this error component, which is wrapped by Modal, is only rendered if `errorUpdatingPlaces` is truthy because otherwise trying to access message `message={errorUpdatingPlaces.message}` will fail.

**<span style='color: #495fcb'> Note:** Even though it will only be visible if the modal is visible, it will actually be part of the DOM right away because the modal component is always part of the DOM as well. It's just not always open, but it's always there.

## Building Custom React Hooks

### Revisiting the 'Rules of Hooks' & Why to Use

Only call Hooks:

- in component
- or **other hook functions**

But why would you build custom Hooks and what should these custom Hooks do? The idea behind building custom Hooks is always to wrap and reuse code that goes into your Component functions.

the code are quite similar in:

- **<span style='color: #a8c62c'> App.jsx**
- **<span style='color: #a8c62c'> AvailablePlaces.jsx**

**<span style='color: #495fcb'> Note:** you might remember that the idea behind Components was to **reuse logic and JSX structure**

But this `useEffect` call with the logic inside of it in our case, we might want to reuse that, but we can't put it into a separate Component because this is just a part of a Component. It does not return JSX code and therefore this is the kind of problem we can solve with **custom React Hooks.**

**<span style='color: #875c5c'>IMPORTANT:** Now of course, we could also try to outsource and reuse code like this by grabbing it and putting it into a separate function, because that is how you normally outsource logic in programming. But this does not work here because the code which I wanna outsource and share

- actually uses Hooks inside of it
- and it also needs to manipulate state.

And these are things which can only be done inside of Components, not in some random shared function.

There is no guarantee that I'll always use fetchData just in a Component and nowhere else

### Creatin a Custom Hook

**<span style='color: #9e5231'>Error:** you get an *error* if you add a useState inside a callback. eslint informs: *React hooks must be called in a React function component or a custom React hook function*

but technically, this would be valid JavaScript code  because useState is just a function and theoretically, you can call functions anywhere.

most React projects are configured such that functions that start with `use` are treated as hooks and that those *rules of hooks* are enforced on such functions.

- we get  error if we try to use them in the wrong place.
- That's why your custom hook function also must start with use so that those rules are also enforced.

React won't complain, as long as our custom hooks starts with *use*

```javascript
import { useEffect } from 'react';

const useFetch = () => {
  useEffect(() => {
    // ...
  }}
```

### Custom Hook: Managing State & Returning State Values

custom hooks can return an **object or an array** (just like `useState` does for example)

**<span style='color: #875c5c'>IMPORTANT:** And the great thing is that if you use a custom hook in a component, any state that is managed by that custom hook will also belong to the component in which you are using your custom hook.

So therefore, if the state gets updated in the custom hook, when that happens, the component where your custom hook gets used also gets executed again.

### Exposing Nested Functions from the Custom Hook

`return { isFetching, fetchedData, setFetchedData, error };`

what happens if you use this `useFetch` hook in other components as well.

If we use it in another component and we then update the state from inside this `App` component, will that affect those other components might be a valid question.

And the answer is no, because just as with components, whenever you use them, whenever you use components and it's the same for custom hooks, whenever you use them, a brand new independent copy is created.

>in our `useCallBack`, we now have to add `setUserPlaces` as a dependency.

**<span style='color: #495fcb'> Note:** Now, we did not have to do that before using a custom hook because those state updating functions normally don't need to be added to dependency arrays of `useCallback` or `useEffect` because React guarantees for all those state updating functions that they will never change.

But here in this case now the project simply doesn't understand that `setUserPlaces` in the end refers to a state updating function because all it sees here is that it's some property we're pulling out of some object.

### Using A Custom Hook in Multiple Components

**<span style='color: #875c5c'>IMPORTANT:** When updating the state in the `App` component, by adding a new place, that does not affect the available places because as mentioned before, **we have independent state values created through independent copies of this `useFetch` custom hook.**

## Working with Forms & User Input

### Handling Form Submission

`htmlFor` is the *JSX* equivalent of the *HTML* `for`, just as `className` is the equivalent of `class` (*class* is a reserved word in *JavaScript*)

the page is reloaded after clicking on the `submit` button of a `form`, and our *url* is also changed.

And this is all happening because I am having a button here inside of a form element. And the default browser behavior for buttons in form elements is that those buttons will submit the form and technically that means that an HTTP request is created and is sent to the server that's serving the website. This is the default built-in behavior.

And this is the default behavior because in many non-React apps, you indeed have a full stack application where every page is rendered by the server and sent to the client thereafter and where form submissions therefore should be sent back to the server so that they can be handled there.

**<span style='color: #495fcb'> Note:** And you'll see this request here which was indeed generated and sent automatically by the browser.\

![image info](./17_sc1.png)

But in this case here for this React application, that's a problem and it will be a problem in many React applications you're building unless you are using some full stack React solution like *NextJS*.

Because here the server that's serving this React website on this address is actually a pure development server. It's not prepared to handle this form submission. We have no code on that server that would deal with that submission.

And even if you would deploy this React application on some real server that serves it to real users on the internet, that would be a server that only aims to serve this index HTML file and all these JavaScript files and it still wouldn't be a server that is prepared to handle incoming form requests.

**<span style='color: #875c5c'>IMPORTANT:** to prevent such behavior:

- `<button type='button' className='button' onClick={handleSubmit}>Login</button>` (the button would not anymore submit the form as the default type *submit* is now replaced)
- remove `onClick` on the button, and add `<form onSubmit={handleSubmit}>`, giving back an `event` object

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  console.info('submitted');
};
```

### Getting User Input via Refs

We set up an *email* and *password* useRef.

We then connect those ref values to those input fields by adding the special `ref` prop which can be set on all HTML elements. So which is supported by React on all elements.

Now by setting the ref prop, a connection will be established between the DOM element, so this input element and the ref.

**<span style='color: #495fcb'> Note:** The advantage of using this approach `useRef` is that it typically requires less code than when `usingState`.

**<span style='color: #875c5c'>IMPORTANT:** The downside of this approach:

- is that resetting those values in a clean way is a bit harder  because you are actually discouraged to use *refs* for manipulating the *DOM*. **`email.current.value = '';` is discouraged**
- you'll still end up with quite a lot of refs if you have a more complex form

### Getting Values via FormData & Native Browser APIs

```javascript
<form onSubmit={handleSubmit} />

const handleSubmit = (event) => {
  event.preventDefault;  
  const fd = new FormData(event.target)
};

the event target does correspond to the form itself!
```

**<span style='color: #495fcb'> Note:** Now for this to work all those inputs for which you wanna extract values must have that name prop set on them though.

`const data = Object.fromEntries(fd.entries());`: calling entries on the FormData object will give us kind of an array of all the input fields and their values and calling Object from entries on that array then will simply give us an object where we have key value pairs for all our input fields.

**<span style='color: #495fcb'> Note:** grouped-inputs, mult- value input fields are lost when using entries and `fromEntries`.

### Resetting Forms

#### Resetting with native HTML Form reset prop

```html
<button type='reset' className='button button-flat'>
  Reset
</button>
```

With an *HTML button*, you have 3 built-in types:

- submit (default)
- button (It allows this button to act as a button that does not submit the form, and that also doesn't do anything else.)
- reset

#### Resetting with useState

**<span style='color: #495fcb'> Note:** if you are managing the inputs with *state*, you can of course simply reset those state values.

#### Resetting with useRef

Now, when getting the entered values with refs you can reset the inputs by manually setting the value property of the connected input elements to empty strings. But this is a solution you should use with care because typically you should leave it up to React to update the DOM, and you should not imperatively perform updates or changes.

Instead, when working with refs it's typically better to reset the form as you also can do it when using that `formData` approach for extracting the values: `event.target.reset()`, though this is again *imperative code*.

### Validating Input Upon Form Submission

**<span style='color: #9e5231'>Error:**  When performing validation on keystroke and upon blurring the inputs, if you only rely on that validation, you got a nice user experience as the user is interacting with those inputs. But you have a problem if the user simply clicks the submit button.

That's why it's always a good idea to also add validation here in this `handleSubmit` function.

**<span style='color: #875c5c'>IMPORTANT:** Adding submission-based validation is always a good idea even if you are already validating the user input on every keystroke.

### Validating Input via Built-in validation props

[https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

### Creating a Custom useInput Hook

```javascript
const handleInputChange = (identifier, value) => {
  setEnteredValues((prevValues) => {
    return { ...prevValues, [identifier]: value };
  });
  //NOTE: to let the check reset automatically
  setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
};
```

**<span style='color: #495fcb'> Note:** we also might want to outsource and reuse this code.

And how could we do that? with help of a **custom hook**. And we need a custom hook because we are managing some state in that code that should be outsourced, and therefore we can't use a regular function.

### Third-Party Form Libraries

- React Hook Form
- Formik

## Practise App: Building a Food Order App

### Fetching Meals Data (get Http request)

```javascript
useEffect(() => {
  const fetchMeals = async () => {
    const response = await fetch('http://localhost:3000/meals');
    if (!response.ok) {
      //...
    }
    const meals = await response.json();
    setLoadedMeals(meals);
  };

  fetchMeals();
}, []);
```

**<span style='color: #495fcb'> Note:** Alternatively, we could also leave this `fetchMeals` function outside of this `useEffect` function, **but then we would have to add it as a dependency** because we're now using something in the `useEffect` that's defined outside of the effect.

And we then might have to use `useCallback`  to avoid that `fetchMeals` changes every time the component function is re-executed.

Now we also execute `fetchMeals` code  after the component function executed. But if we got no dependencies or if we got dependencies that never change, this code will never execute again and therefore, we won't have an infinite loop.

We don't have to add any dependencies because this `useEffect` function, is now not using any external *props* or *state* any other values that could change across renders.

The only external thing it's using, is the `setloadedMeals` function, which is provided by the `useState` hook and which is guaranteed by React to never change.

### Formatting & Outputting Numbers as Currency

**<span style='color: #a3842c'>Link:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### Creating a Configurable & Flexible Custom Button Component

```javascript
const Button = ({ children, textOnly, className, ...props }) => {
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses += ' ' + className;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

- `const Button = ({ children, textOnly, className, ...props }) => {`: here we're collecting all *native props of an HTML button*  and gathering them in a `props` object
- `<button className={cssClasses} {...props}>`: using the rest operator we are then spreading them

### Getting Started with Cart Context & Reducer

```javascript
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    state.items.push(action.item); //ERROR: do not do this
  }
  // ...
}
```

**<span style='color: #875c5c'>IMPORTANT:** You should never mutate existing state, as the state value of items would change before this cart reducer is done executing.

#### Updating the State in an immutable way (add item)

```javascript
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity++,
      };
      updatedItem[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  // other methods
}
```

### Opening the Cart in the Modal via a new Context

**<span style='color: #a8c62c'> Modal.jsx**

```javascript
const Modal = ({ open, children, className = '' }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    //NOTE: using a cleanup fx that will execute whenever this useEffect is about to run again i.e. when open value changes
    return () => modal.close();
  }, [open]);
  // ...
}
```

**<span style='color: #495fcb'> Note:** It's recommended that you store the value of this ref `dialog.current`in some temporary constant, and that you then use this constant inside of this effect function.

This approach is recommended because this cleanup function is of course going to run at a later point of time than this effect function when it runs for the first time because the cleanup function will then only run once this value changed at some point in the future. Therefore, at least theoretically, the value stored in this ref could have changed in between.

Now that will not be the case here. It'll always refer to this `dialogue` but theoretically it could be assigned to a different value in between these function executions (`useEffect` and its cleanup function) and therefore it is recommended to lock inthe value this ref has when this effect function here runs.

### Adding a Custom HTTP Hook & Avoiding Common Errors

I'll actually build a **custom hook** because we have two components, the `Checkout` component and the `Meals` component, that both need to send requests, even though those requests are sent at different points of time, but they both do it.

And they then also, both in the end need to deal with different request states:

- failing requests
- loading requests
- and requests that succeeded.

So we have that same logic which we in the end need in two different components to update the UI. And since it's some **stateful logic** that should impact the UI and where changes should impact the UI, we need a custom hook, because just creating a custom standard function won't do the trick.

**<span style='color: #9e5231'>Error:** *Cannot read properties of undefined*

**<span style='color: #a8c62c'> Meals.jsx**

```javascript
const Meals = () => {
  const { data: loadedMeals, isLoadingState, errorState } = useHttp(
    'http://localhost:3000/meals'
  );

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} /> //<li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};
```

`const [data, setData] = useState();`

Keep in mind that sending the request takes some time so the data won't be there initially. Instead, useState for the data sets the initial state to undefined because there is no initial value here for the data.

So the initial value of `loadedMeals` will be undefined until the request is done, but that will take some time and the component function will not wait for the request to finish to do its work.

Instead, this JSX code will be parsed and converted to HTML code right away, so to say, and of course it therefore fails to run this code `loadedMeals.map()`,

Now, to work around that issue, we could try to check if we are in a loading state and in that case return something else.

**<span style='color: #9e5231'>Error:** But even though you might think that this does the trick, you'll see that if you save this and reload, you still get the same error.

The reason for that is that technically in our custom hook, `isLoading` is false initially.

It is set to true once we start sending the request, but that's only the case once this effect function here runs which, as you learned, happens after the component rendered. **So the first time this component renders will be with isLoading set to false** and, therefore, will not return this here, but instead this code which fails for the reasons mentioned before.

Therefore, the better workaround, the better solution is to accept a third parameter here, for example, which could be called initialData, which is the initial data we wanna set to that data state in our custom hook,  but then pass an empty array of meals as initial data for the `loadedMeals`.

```javascript
export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  // ...
}
```

Now, if we take a look at the `Meals` component, we'll see that we're passing the URL to it and this object `{}`.

And also our `initialData` of course, but that's not interesting here, because that isn't a dependency of useCallback or useEffect.

But this here is the config object we're passing to useHttp and that's the problem here.

It doesn't look like a big problem here, but this is a plain JavaScript object. An empty object, but still an object value that is created here in our component function and that's, therefore, recreated in that component function every time this component function runs, which happens every time the request finishes.

It is a new object being created all the time. The solution is to create it outside of this component function.

`useHttp('http://localhost:3000/meals', {}, []);`

```javascript
const requestConfig = { method: 'GET' };

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);
// ...
}
```

## Diving into Redux (an alternative to the Context API)

### Redux createStor() is (not) deprecated

a so-called Redux store will be created with help of a function called `createStore()`.

When using that function in your code, you might get a **deprecation warning** by your IDE or when running the app.

**You should ignore this warning!**

You can still use createStore() without issues.

Indeed, the React Redux team now recommends the usage of an extra package called **Redux Toolkit** and another way of creating the Redux store. That package will indeed be covered a little bit later in the course

### Exploring the Core Redux Concepts

- `npm init -y`
- `npm install redux`
- `const store = redux.createStore();`

That store should manage some data and the data which it manages is in the end determined by the *reducer function*, because it's the reducer function which will produce new state snapshots.

The reducer has to go of spitting out a new state snapshot whenever an action reaches it.

And when we run this code for the first time, the reducer will also be executed with a default action, so to say, that should spit out the initial state.

#### Subscriber

`getState()` is a method which is available on the store created with `createStore()`. And it will give us the latest state snapshot after it was updated.

**So this subscription function will be triggered whenever the state changes.** And then when it is triggered, we can get to that latest state after it was changed with the get state method.

The `subscribe()` method then wants such a subscriber function, which Redux will then execute whenever the data and the store changed.

### More Redux Basics

*Redux* indeed isn't a library restricted to React, you can use Redux in *any JavaScript project*.

### Preparing new Project

`npm i react react-redux`

This is a package which makes connecting react applications to Redux stores and reducers ends on very simple.

### Providing the Store

If the vast majority of your components need access to the store, if maybe your entire app, needs access to the store, you should typically provide on this highest level (`main.jsx` and wrap  the *<App>* component)

`<Provider store={store }>`

But now our components in this app, the app component, and any other child components, can tap into that store. They can get data out of the store. **They can set up a subscription to that data to be precise,** and they can also dispatch actions.

### Using Redux Data in React Components

- useStore
- useSelector: t more convenient to use because that allows us to then automatically select a part of our state managed by the store.

**<span style='color: #495fcb'> Note:** Now the great thing is that when you use use selector, React Redux will automatically set up a subscription to the Redux store for this component.

So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store.

So it's an automatically reactive and changes to the Redux store will cause the component function to be re executed.

If you ever would unmount a component, if it would be removed from the DOM, React Redux would also automatically clear the subscription for you.

### Working with multiple State Properties

Toggle Counter button, and when it's clicked,I wanna make sure that the counter is hidden and when it's clicked again, it should be shown again.

we could use useState. So we could set up some local state in this component which we manage with useState, not with Redux. And that would be the proper way of doing it because showing or hiding the counter is something which only is interesting to this component, not to any other part of the application

this is what we call **local state**, just like our `Counter` component is, but this is a simple demo.

So let's assume that both the counter as well as the state whether the counter should be visible or not, is a **global state** which is also the interesting to other components even though that's not the case here.

**<span style='color: #495fcb'> Note:** Now when we `increment`, we are changing the counter, we don't care about `showCounter`.

We still need to set the `showCounter` property here though because we are returning the overall state object and *Redux* won't merge your changes with the existing state.

### How to work with Redux State correctly

**<span style='color: #875c5c'>IMPORTANT:** So the objects which we return in the reducer will not, and that's super important will not be merged with the existing state.

**They will overwrite the existing state.**

So we must always set all the other states when we update a piece of state because we overwrite the old state.

**<span style='color: #9e5231'>Error:** **You should never super important never mutate the state, the existing state. always override it by returning a brand new state object.**

`state.counter++` instead of returning a new object is something you absolutely must not do when working with Redux.

```javascript
if (action.type === 'increment') {
  state.counte++
  return state,
};
```

we still mutate the existing state because objects and arrays are reference values in JavaScript. This can lead to bugs, unpredictable behavior and it can make debugging your application harder as well.

in bigger applications where your state gets out of sync and suddenly the UI is not reflecting your state correctly anymore.

And hence the simple rule is never mutate your state like this. Always return a brand new object (or array). you never just dive into an existing object and start manipulating its properties. Always copy and create new objects.

### Introducing Redux Toolkit

It's actually developed by the same team as React Redux and Redux itself

**<span style='color: #a3842c'>Link:** [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

**<span style='color: #495fcb'> Note:** *@reduxjs/toolkit* already contains redux, so you could uninstall the latter, but you still need to install *react-redux*

`npm i @reduxjs/toolkit`

### Adding State SLices

We still must not manipulate the existing state but the good thing is when using *Redux toolkit* and its functions like `createSlice`, we can't accidentally manipulate the existing state.

Because *Redux toolkit* internally uses another package, **Immer**, which will detect code where state is mutated and which will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and override the state which we are editing in an immutable way.

### Connecting Redux Toolkit State

```javascript
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

So we would create a map of reducers, and this map is then set as a value for the main reducer and behind the scenes `configureStore` will merge all those reducers into one big reducer.

```javascript
const store = configureStore({
  reducer: counterSlice.reducer,
});
```

here we only have one reducer so we can directly assign that reducer from the counterSlice as main reducer for `configureStore`

### Migrating to Redux Toolkit

**<span style='color: #a8c62c'> Counter.jsx**

**<span style='color: #495fcb'> Note:** for *increase()* method, we pass our payload data. The only important thing to know here is  the argument you pass will be stored in an extra field named **payload**. And that field name is not up to you. That's the default Redux Toolkit uses here.

### Working with Multiple Slices

And unlike the *counter* state, which was a local state, the authentication is not just local state, which matters to one specific component but it is **application-wide state**, which matters to a lot of components in the application.

**<span style='color: #a8c62c'> store/indexToolkt.js**

- adding a new property *isAuthenticated* to the inital state
- adding a new reducer method *login()*

**<span style='color: #875c5c'>IMPORTANT:** Whilst it would technically work, but logically it makes no sense.

The authentication status has nothing to do with the counter.

in programming we typically want to separate our concerns.

- We wanna make sure that the existing slice really focuses on the counter-related state and actions.
- And we should create a brand new slice for the authentication state.

### Redux & Asynx Code

**<span style='color: #9e5231'>Error:** So when we have any code that produces a side effect or is asynchronous, like sending a HTTP request, such code must not go into our reducer functions.

So we can't send our HTTP request via the `fetch` API inside of the reducers in our cart slice after we edited our state, like in `addItemToCart`.

**Don't perform a side effect inside of your reducer, No matter if it's synchronous or asynchronous, don't do it inside of the reducer and never run any asynchronous code in the reducer in general.**

So we can't send the HTTP request here after we are done updating our state.

- We can execute it in the components (ignore *Redux*).
- action creator, which also would allow us to run asynchronous code or generally any side effect code

### Where to put our logic

**<span style='color: #a8c62c'>ProductItemSubOptimal.jsx**

**<span style='color: #495fcb'> Note:** I don't change it in the existing state because we must not mutate the state  and that's important.

We can write this mutating code inside of the reducer function in our slice because *Redux toolkit* has this internal transformation for changing our code such that it doesn't mutate the state

**<span style='color: #9e5231'>Error:** You must never mutate Redux state and especially don't do it outside of a reducer.

**<span style='color: #495fcb'> Note:** We do the data transformation in some helper function and in the end directly in our components, we don't do the transformation in our reducers.

that means that our redux reducers wouldn't do a lot of work. They'd just get some data and store it.

because when it comes to the question of where to put our code, we often have the choice between:

- fat reducers,
- fat components
- or fat actions.

All this code of **<span style='color: #a8c62c'>ProductItemSubOptimal.jsx** just transforms data.

It's synchronous code and side effect free. So if we basically just have some data transformation, then you typically should prefer reducers.

Now, if you personally have a different opinion if you like having your code in the component that of course is fine but generally it is considered a bit better to prefer reducers and **avoid** action creators.

It would be different for asynchronous code or code with side effects. There you should prefer action creators or components and you absolutely must never use reducers.

### Using useEffect with Redux

**<span style='color: #a3842c'>Link:** [firebase](https://console.firebase.google.com/u/0/project/reactredux-d73e0/database/reactredux-d73e0-default-rtdb/data)

We can first do the work on the front end and let Redux update its store.

And then in a second step thereafter we send the request to the server but we don't necessarily need to do that here inside of the Reducer function where we wouldn't be allowed to do it.

Instead, we can, for example do it in the ProductItem.jsx file or in a totally different file. Let's say in App.js

**`useSelector` sets up a subscription to Redux.** So whenever our Redux store does change this component function will be re-executed and we will get to the latest state. So in this case, the latest cart.

So that means that effect will also be re-evaluated and it will re-execute if our carts did change and that is exactly what we need.

So with this simple addition here we will send this Http request whenever our cart changes and we can keep our logic for updating the cart inside of the reducer,

```javascript
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      'https://reactredux-***-default-rtdb.europe-west1.firebasedatabase.app//cart.json',
      { method: 'PUT', body: JSON.stringify(cart) }
    );
  }, [cart]);
  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
```

and that's a very good way of having our side effect logic in a component and keeping all our data transformation logic inside of a Reducer, which is where we typically wanna have it when working with Redux.

---
**<span style='color: #9e5231'>Error:** if you get a CORS error, make sure that url ends, with `cart.jason`,

`'https://reactredux-***-default-rtdb.europe-west1.firebasedatabase.app/cart.json'`

Udemy assistant:
Setting CORS headers correctly is always a pure server side task, so this can't be implemented in React. Firebase guarantees that CORS is implemented correctly on their end.

Here is some general information about CORS:

→ [https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS]

Important:

In many cases when you get a CORS error, this is misleading. **The reason could just be a wrong URL (e.g. http instead of https, a forgotten .json extension for firebase**, or something like this).

>**<span style='color: #9e5231'>Error:** We face one problem when using useEffect the way we currently do it: It will execute when our app starts. Why is this an issue? It's a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there.

### Handling Http States & Feedback with Redux

for showing notifications, we could import `useState` and set up some local state and this component, some *isloading* state and maybe an *error state*.

And we set those states as part of our Http requests cycle here. And we then use those states to conditionally rendered the notification component with the appropriate content.

But since we already have a UI slice here in Redux why not use that? Why don't we add more to the state we're managing here with Redux and we managed the notification,

### Using an Action Creator Thunk

#### What is a 'Thunk'

And why would we wanna use that pattern? Well, it's simply an alternative to having that logic in your component.

**<span style='color: #495fcb'> Note:** You can add that logic in your components. but it's also not a bad idea to keep your components lean, to not have too much logic in them.

A function that **delays an action** until later.

An *action creator function* that does **NOT return the action itself** but instead **another function** which **eventually** returns the action.

To write an action creator, we return an action object, so object with a type, and maybe some payload.

We never did this ourselves, because Redux toolkit, creates these action creators automatically for us, for all those **reducer methods**

**<span style='color: #875c5c'>IMPORTANT:**But we could create, action creator which does not return, such a action object here, **but which instead returns another function.** And of course in JavaScript, you can write functions that return other functions.

That should receive the `dispatch` function as a argument.

>we can then therefore, dispatch, the actual action we wanna perform. Like for example, showing a notificationor adding a cart item,  
but before we call dispatch, we can of course do other things, before we call dispatch, **we can perform any asynchronous code, any side effects,** because we will not yet have reached our reducer. We're not running this code in a reducer. It's a separate standalone JavaScript function instead.

**<span style='color: #495fcb'> Note:**

- What we dispatched before, always were action creators. So functions that return an action object with a type and (reducer) actions.
- Now in `cartSlice`, we are instead dispatching a function that returns another function.

But the great thing about *Redux*, when using *Redux toolkit*, is that it's prepared for that.

- It does not just accept action objects with a type property.
- **Instead it also does accept, action creators that return functions**. And if it sees, that you're dispatching, a action which is actually a function, instead of action object, it will execute that function for you.

**<span style='color: #875c5c'>IMPORTANT:** **it will give us that dispatch argument automatically.** So that in that executed function, **we can dispatch again**, because there's a such a common pattern that we wanna have action creators that can perform side effects. *And that can then dispatch other actions, which eventually reached the reducers, as part of a flow off side-effects.*

This component is now leaner. It only dispatches one action, not multiple actions. It doesn't care about sending the HTTP request, and all the hard work happens inside of our custom action creator function in our Redux files

## Building a multi-page SPA with React Router

### Routing: Multiple Pages in Single-Page

Now, traditionally, you would implement Routing by simply loading different content, different HTML files for different paths, and that is how you would build a multi-page application which you typically would build without ReactJS.

Now, with that, you get different content for different paths, but the disadvantage is that you always have to fetch new content. A new HTTP request is sent and a new response is received, and that can kind of break the user flow. It can introduce some lag and slow down your website and it can therefore lead to a suboptimal user experience.

#### SPA

So that's why we might wanna build a single page application when we're building more complex user interfaces.

- With those, you send only one initial HTML request and then this HTML file with a bunch of extra JavaScript is downloaded,
- and thereafter the extra JavaScript code that runs on the client will actually take care about adjusting what the user sees on the screen. That's how single page applications work.

**<span style='color: #495fcb'> Note:** However, that does not mean that we can't bring back the illusion of a Routing and that we can support path changes in the URL and load different content based on the path. Instead, we can add client-side React code that basically watches the currently active URL and that triggers whenever the URL changes, and that then leads to different content being displayed on the screen when the URL changes.

So instead of loading new HTML files from the backend, we could add some client-side code that simply watches the URL and then loads a different React component when that URL changes. With that, we're still in a single page application but we nonetheless support different URLs and therefore Routing.

### Project setup

**<span style='color: #a3842c'>Link:** [https://reactrouter.com/en/main](https://reactrouter.com/en/main)

`npm i react-router-dom`

### Exploring an Alternative way of defining Routes

```javascript
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage />  },
]);
```

if you worked with older versions of react-router-dom, you actually defined all your routes with help of components and JSX code instead of JavaScript Objects in array.

```javascript
import { createRoutesFromElements, Route } from 'react-router-dom';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
```

### Navigating btw Pages with Links

**<span style='color: #a8c62c'> pages/Home.jsx**

```javascript
function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <a href='/products'>the list of products</a>
      </p>
    </>
  );
}
```

**<span style='color: #875c5c'>IMPORTANT:** We have a problem with this approach.

- If you watch this refresh icon here, as I click on the link, you will see that it briefly flashes and turns to a cross and back to a refresh icon.
- The reason for that is that technically, we're sending a new request to the server that's serving this website. Now, that server will serve back that single HTML page that makes up this single page application but what happens under the hood is that we, of course, load all the JavaScript code again, load the entire React application again and restart the React application.
- That's a lot of unnecessary work under the hood that can also impact the site performance, which we typically wanna avoid because we already loaded all the JavaScript code.
- We don't wanna load it again and we don't wanna restart the React application. **We would also lose any context or application-wide state if we do so**.
- So we don't wanna switch the page by sending a new HTTP request to the server. With that, we lose all the benefits of single page applications after all.
- Instead, we wanna have a link like this but under the hood, it should just change the URL and set it to the URL we're trying to navigate to but it should then prevent the default of sending a request and instead let React Router know about the new URL and ensure that React Router loads the appropriate element for that new URL.

**<span style='color: #495fcb'> Note:** The new component we wanna import from react-router-dom is called `Link`. And as the name suggests, we can use it to construct a link. **We use it instead of the default anchor element.**

`import { Link } from 'react-router-dom';`
`Go to <Link to='/products'>the list of products</Link>.`

- Now, what the link component does under the hood is it does render an anchor element but it basically listens for clicks on that element,
- prevents the browser default of sending a HTTP request if the link is clicked,
- and instead simply takes a look at the route definitions to update the page accordingly and load the appropriate content.
- It will also change the URL but without sending a new HTTP request.

### Showing Error Pages with errorElement

When we enter a URL that doesn't exist, the react-router-dom package will generate an error, and that error will automatically bubble up to our root route definition. So to the route that is defined for path slash nothing. Therefore, here on this special slash nothing route, we can add the error element property as well.

### Working with Navigation Links (NavLink)

**<span style='color: #a8c62c'> componens/MainNavigation.jsx**

```css
.list a:hover,
.list a.active {
  color: var(--color-primary-800);
  text-decoration: underline;
}
```

And we're targeting the anchor `a` here instead of `Link`, because as mentioned before, this link component provided by react-router-dom does render a regular anchor element

To support links that should show us whether they led to the currently active page or not, react-router-dom has an alternative to the `Link` component, the `NavLink` component.

`NavLink` has one special behavior. If you add the class name prop to it, it's actually not the regular class name prop, which takes a string, but instead it's a prop that takes a function. And that function should return the class name. Now that function also automatically receives an object from which we can de-structure the `isActive` property.

react-router-dom also gives us another prop we can set here and that's the `end` prop which we can set to true or false but we can also just add it to set it to true.

This indicates that this link should only be considered active if the currently active route ends with this path after the URL. So now this link will only be considered active if we are on our domain *slash nothing* and not if we're on *slash products*.

for **style**, this function form is also supported when using `NavLink`.

### Navigating Programmatically

**<span style='color: #495fcb'> Note:** Of course, you should not create buttons and then navigate programmatically. Simply use a link instead, but a button is a great way for me to show you how this generally works here.

### Defining & Using Dynamic Routes

`{ path: '/products/:productId', element: <ProductDetailPage /> }`
`const params = useParams();`

So that's how we can get hold of that data that's encoded in the url.

And typically you encode things like Ids of items or products in the URL because then here in product detail, we could reach out to a backend and fetch the data for this product.

### Understanding Relative & Absolute Paths

#### absolute paths

```javascript
{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/products', element: <ProductsPage /> },
    { path: '/products/:productId', element: <ProductDetailPage /> },
  ],
}
```

**<span style='color: #875c5c'>IMPORTANT:** absolute paths all start with a slash. This simply means that they're always seen from after the domain name.

#### relative paths

```javascript
const router = createBrowserRouter([
  {
    path: '/root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);
```

Now, when defining routes like this, this simply means that these paths defined here are appended after the path of the wrapper route.

[http://localhost:5173/root/products/p1]

And when using the `Link` component, you also have a special `relative` prop. And this can be set to one of two values:

- path
- route

**<span style='color: #495fcb'> Note:** this route definition, which is responsible for the *product details*, is a direct child of this *root* route, not of this *products* route. It's a sibling to the *products* route.

**<span style='color: #a8c62c'> pages/ProductDetail.jsx**

`<Link to='..'>Back</Link>`

you will notice that I go back to the homepage by default. this relative path is resolved relative to the route definitions. this product detail page route definition is a child of the root route and a sibling to /products. So when we go up one level, if we go back to the previous route path, it means that we go back to the parent's route path, not to this sibling here.

So we don't just remove one segment from the path but instead we go back to the parent route path, which means we remove two segments, in this case */products* and */productId*.

Now if we want to change this behavior, we can do so with the `relative` prop, which default value is *route*.  if we set this to *path*, React Router will instead take a look at the currently active path and simply remove **one segment** from that path.

#### Vite - Configuring base Url

for testing relative url, starting with */root* and avoiding the client to render an error when starting page */* loads, you can use the `vite.config.js` file

**<span style='color: #a3842c'>Link:** [https://v2.vitejs.dev/config/#base]

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/root/',
});
```

### Working with Index Routes

you should be aware of this feature called index routes, which allows you to define the default route that should be loaded if the parent routes path is active.

```javascript
{ index:true, element: <HomePage /> },
      // { path: '', element: <HomePage /> },
```

### Time to Practise: Solution

```javascript
{ path: ':eventId', element: <EventDetailPage /> },
{ path: 'new', element: <NewEventPage /> },
```

**<span style='color: #495fcb'> Note:** whenever we enter */events/new* in the URL bar, React Router could actually load *events/:eventId* route instead because it treats new as a value for eventId. And therefore, this route would never get activated. This could happen in theory.

but actually React Router is smart and understands that this route path is more specific than this route path. So indeed, if you would visit /events/new, it would prefer this route definition over the other route definition.

### Data Fetching with a loader()

**<span style='color: #a8c62c'> pages/Events.jsx**

there is nothing wrong with this code, but of course it is worth noting that it's quite some boiler plate code, which you have to repeat every time you are sending a request to a backend.

Though you could kind of mitigate that by creating a custom hook and you could outsource that logic into a custom hook. But nonetheless, it's quite some code that must be written to handle these different http request states and to fetch that data.

And in addition, what's worth noting is that of course this request will only be sent once we reached this page. So once we navigate it to this *events page*.

And that of course means that this entire events page component must be rendered before this request is sent.

**<span style='color: #875c5c'>IMPORTANT:** But of course, in more complex applications this component could be rather complex and it could also have a bunch of nested child components and having to render and evaluate all these components before we actually start sending that request for that data which we absolutely need, is **suboptimal**.

You could argue that it would be much nicer if React router would initiate the data fetching as soon as we start navigating to this page. So as soon as we start rendering this component, so to say or even before we render the component and we then render the component with the fetched data instead of first rendering the component without the fetched data with the loading state fallback instead and then fetching data after it has been rendered as it's currently happening.

**<span style='color: #495fcb'> Note:**

- With React router at least if you're using version six or higher you don't have to write all that code for fetching data and for handling these different states, with the `loader` property.
- when you define such a loader function, React router will automatically take any value you return in that function, for example, the response data and will make that data available in that page that's being rendered here as well as any other components where you need it.

### Using Data From A Loader In The Route Component

**<span style='color: #a8c62c'> App.jsx**

```javascript
loader: async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData.events;
  }
},
```

since I'm using *async/await*, technically this `loader` function will return a promise. Any data returned in that function will be wrapped by a promise, that's how *async/await* works.

But React Router will actually check if a promise is returned and automatically get the resolved data from that promise for you. So you don't need to worry about whether you are returning a promise here or not.

### More loader() Data Usage

as an alternative, our `loader` function could be used in `components/EventsList.jsx`

**<span style='color: #495fcb'> Note:** Now, one place where we can't get those events is in a higher level route. So for example, if you would go to the `RootLayout.jsx`, which is part of my root route.

**<span style='color: #875c5c'>IMPORTANT:** The reason for that is that I'm trying to get data from a route that's actually defined on a lower level `element: <EventsPage />`, and I'm trying to get data that's loaded from the  route `element: <RootLayout />`, in this root route, which is on a much higher level.

Instead, you can access loaded data with help of `useLoaderData` in any component on the same level or lower level, than the component where you added the loader, so the route on which you added the loader.

That means: You can use `useLoaderData()` in the element that's assigned to a route AND in all components that might be used inside that element.

### Where Should loader() Code Be Stored?

- it actually made this app.js file a bit more bloated,And especially if we would add more loaders to more and more routes
- You could also argue that the logic for fetching data for the events page belongs to the events page and not to the app.js file

And for those reasons, common pattern and a recommendation, is that you do actually put that loader code into your component file where you need it.

**<span style='color: #495fcb'> Note:** because of *eslint*, you have to store the loader function in a dedicated function to not impact the React fast refresh functionality.

### When Are loader() Functions Executed?

The loader for a page will be called right when we start navigating to that page. So not after the page component has been rendered, but before we actually go there.

- data fetching is initiated as soon as we initiate the route transition.
- by default, React router will actually wait for the data to be fetched, so for the loader to be finished before it then renders the page with the fetched data.

**<span style='color: #495fcb'> Note:**

- The advantage of this approach is that you can rely on the data being there once the events page component is being rendered. Therefore you don't need to render a loading state on this event's page component.
- The downside, of course, is that we have this delay where it looks to the user as if nothing is happening.

### Reflecting The Current Navigation State in the UI

It's important to recognize that the loading indicator won't be added on the page which you're transitioning to, but instead on some page, or a component, which is already visible on the screen when the transition is started.

That's different compared to what we had before with use Effect and a separate loading state.

### Returning Responses in loader()

**<span style='color: #a8c62c'> pages/EventLoader.jsx**

`const res = new Response('any data', { status: 201 })`

we can instantiate the built-in response constructor function. this is built into the browser. This is a modern browser feature. You can build your own responses. this loader code will not execute on a server. This is still all happening in the browser, even though it's not in a component,  it's still in the browser. This is still client-side code.

when you reach out to a backend with the browser's built-in `fetch()` function, this fetch function actually returns a promise that resolves to a response. Combined with React Router's support for these response objects and **its automatic data extraction**, that simply means that you can take that response and return that in your loader. You don't need to manually extract the data from the response.

**<span style='color: #495fcb'> Note:** But with that, we can reduce our loader code and leverage this built-in support for response objects.

```javascript
export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
};
```

>**<span style='color: #875c5c'>IMPORTANT:**  
    - As this code runs in the browser, this means that you can use any browser APIs in your loader functions. You can, for example, access `localStorage` here.
    - What you can't do in your loader function is, for example, use React Hooks like `useState`. That does not work because those *Hooks are only available in React components* and the loader function is not a React component.

### Error Handling with Custom Errors

**<span style='color: #a8c62c'> pages/EventLoader.jsx**

`throw {message: 'Could not fetch events.'};`

we could throw any other kind of **object as an error**.

Now, when an error gets thrown in a `loader()`, something special happens. React router will simply **render the closest error element**.

**<span style='color: #a8c62c'> App.jsx**

```javascript
{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // ...
    ]
}
```

- if the `errorElement` is added with error element on that `Root` path,  this error page, will be displayed whenever we basically have any kind of error anywhere in our routes because even though I'm throwing an error here in the loader of the events page, in a deeply nested route, **errors will bubble up.**
- We could add error element to a specific route as well. And in that case, this error element would be rendered if this specific page (loader in our case) threw an error.

### Extracting Error Data & Throwing Responses

To differentiate between errors, what we can do is instead of throwing a object, we can throw a response by creating a new response.

And then we can include some data into that response. For this, we have to call JSON stringify if we want to pass an object.

**<span style='color: #a8c62c'> pages/EventLoader.jsx**

```javascript
// throw { message: 'Could not fetch events.' };

throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
  status: 500,
});
```

you can actually get hold of the data that's being thrown as an error inside of the component that's being rendered as an error element.

And for that, React-Router-Dom gives you another special hook: `useRouteError` hook.

**<span style='color: #495fcb'> Note:** 404; default status set by React router if you enter a path that's not supported.

### json() Utility Function

```javascript
import { json } from 'react-router-dom';

throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
```

**<span style='color: #495fcb'> Note:** in the place where you use that response data, you also don't have to parse the json format manually.

### Dynamic Routes & loader()

[https://reactrouter.com/en/main/route/loader]
[https://developer.mozilla.org/en-US/docs/Web/API/Request]

**<span style='color: #a8c62c'> pages/EventDetailLoader.jsx**

```javascript
/**
 * @param {Request} request
 */
export async function loader({ request, params }) {
}
```

### useRouteLoaderData() Hook & Accessing Data From Other Routes

You can also use this nested routes feature:

- not just to use a wrapper layout component
- but also to use a shared loader for example.

by default when we use loader data, it searches for the closest available loader data, and the highest level at which it looks for data is the route definition of the route for which this component was loaded.

So in this case, the highest level it looks for data is this `EditEventPage` route here.

**Now we actually want loader data from `loader:eventDetailLoader` route** and to make sure that we use this loader's data instead.So the data from this parent route, we should add a special `Id` property which we can add to our route definition

**<span style='color: #875c5c'>IMPORTANT:** And then instead of using `useLoaderData`, we use a slightly different hook which is called `useRouteLoaderData`, taking an *id* as argument.

So that's how you can get access to a higher level loader from a route that doesn't have a loader, But now we can reuse that loader across multiple routes which all need the same data.

**<span style='color: #a8c62c'> App.jsx**

`{ path: 'edit', element: <EditEventPage /> },`

### Working with action() Functions

**<span style='color: #495fcb'> Note:** the great thing about react-router is that it helps handling form submissions and extracting data from that form. For that, you should go to that form and make sure that all your inputs have the **name attribute**, because those names will later be used for extracting the data.

You should also replace the *html form element* by the *react-router* `Form` element. Now this form tag will make sure that the browser default of sending a request to the backend will be omitted but it will take that request that would've been sent and give it to your action. And that's pretty useful because that request will contain all the data that was submitted as part of the form.

The request will not be sent to the backend automatically, but instead to your action. And it will include all the form data if you use this special form component.

### Submitting Data Programmatically

The typical and default way is to use this special form component offered by React Router, that's the standard way you should use. This form will automatically trigger the action function of the currently active route, so the route for which this form was loaded.

you could send the request to a different route by adding the `action` prop here to this form component and setting this to any other path. but if you wanna trigger the action of the currently active route, you don't need the action prop.

we create our delete action in `pages/EventDetailAction.jsx`, but how do we trigger it from *component/EventItem.jsx*.

We could wrap the button *delete* inside a form with an action *prop*, but then the `window.confirm` would work anymore. We wouldn't see this confirmation prompt, and I wanna see that to give the user a chance of canceling the deletion process.

>So we need to trigger that action, and submit some data, so to say, programmatically. And just as we can navigate programmatically, we can also submit data and trigger an action programmatically with the special `useSubmitHook`.

**<span style='color: #a8c62c'> components/EventItem.jsx**

```javascript
if (proceed) {
  submit(null, { method: 'delete' });
}
```

- The first argument is the data that we wanna submit, and that data will automatically be wrapped in a form data object, which we then could extract with this special `formData` method
- The second argument then allows us to basically set the same values we could set on a form, for example the *method* which we can set to delete in this case
- And we could set the `action` key to a different path if our action would be defined on a different route path. In our case, it's defined on the same route to which this component belongs, or for which this component is rendered, and therefore we don't need to set the action.

### Updating the UI State Based on the Submission Status

#### navigation.state

[https://reactrouter.com/en/main/hooks/use-navigation]

- **<span style='color: #a8c62c'> pages/Root.jsx:** *loading* state; a transition from one route to another if we click a link.
- **<span style='color: #a8c62c'> components/EventForm.jsx:** *submitting* state; transition if we submit a form

### Validating User Input & Outputting Validation Errors

**<span style='color: #875c5c'>IMPORTANT:** you should never rely on just client side validation, you should always have server side validation because client side validation can, for example be turned off and disabled with the dev tools, with the browser dev tools. Nonetheless, it's good to have both to provide a good user experience.

But I of course want to show the user any errors, any validation errors that I gathered on the back-end in case some validation errors were detected here. For example, because the user did disable client side validation.

To do that, I wanna leverage the fact that on the back-end I'm sending back an error response with *status code **422*** if I found some validation errors there.

And I wanna react by not showing my default error page, so I don't want to throw an error response, but instead I wanna show such validation errors here right above this form because that makes more sense than showing an error page, because that would discard all the values entered by the user and not really offer a good user experience.

And you can easily do this in actions by returning the data you wanna output above the form, instead of throwing an error response

**<span style='color: #a8c62c'> pages/NewEventAction.jsx**

```javascript
if (response.status === 422) {
  return response;
}

if (!response.ok) {
  throw json({ message: 'Could not save event.' }, { status: 500 });
}

return redirect('/events');
```

Now what does returning a response in an action due though? Well, just as we can return responses in loaders and then use the response data in our components and pages, we can also use returned action data in our pages and components.

It's just less common but it's very common for such validation error responses where you don't wanna show an error page.

**<span style='color: #a8c62c'> components/EventForm.jsx**

`const data = useActionData();`

So with that, in event form, I get this data object here and if I return a response in an action this response is automatically parsed by React router for me, just as it is the case for loaders.

**<span style='color: #495fcb'> Note:** for testing the error(s) display on screen, we can use the *web developer tools*, and remove the `required` attribute.

### Reusing Actions via Request Methods

#### CORS/OPTIONS issue

**<span style='color: #a3842c'>Link:** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS#preflighted_requests_in_cors]

**<span style='color: #875c5c'>IMPORTANT:** `OPTIONS` CORS request will not send the preflighted requested, hence if we want to test our component `Error.jxs` with dummy url when testing editing/creating new event, we will default to the generic error message.

**<span style='color: #a8c62c'> pages/EventAction.jsx**

the solution is to use `try/catch` block for our `await fetch()` request, and use the `json()` method from *react-router-dom*. The `if(!request.ok)` becomes obsolete.

```javascript
try {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }
  return redirect('/events');
} catch (error) {
  throw json(
    { message: `Could not ${method === 'PATCH' ? 'edit' : 'save'} event.` },
    { status: 500 },
    { initialError: error }
  );
}
```

### Behind-the-Scenes Work with useFetcher()

we wanna trigger this action this `newsletterAction` whenever this newsletter form is submitted.

And if we are on the newsletter page, that would be quite straightforward to do. All we had to do is go to the `newsletterSignup` component which is where we have this form and use **React Router's form component here which starts with a capital F**. **<span style='color: #875c5c'>IMPORTANT:** That would automatically trigger the action that belongs to the currently active route.

The problem is however, that this form is included on all routes because it's part of the main navigation. This `NewsletterSignup` component is part of the main navigation.

Therefore, we would have to add the action to all routes and that would of course be a lot of code duplication and also clash with other actions that we might need for other routes.

>Now this is such a common use case that React Router has a solution for it. There is a special hook which you can import from react-router-dom, and that is the `useFetcher` hook.

if we use this `Fetcher.Form` component, this will actually still trigger an action but it will not initialize a route transition.

So Fetcher should basically be used whenever you wanna trigger, an action, or also a loader with help of the load function without actually navigating to the page to which the loader belongs or the page to which the action belongs.

if we used a simple *react-router-dom* `Form` component, if I go to Events and I then enter some email address here I'm forwarded to the Events page after submitting this. And that's not the behavior I want. Now, it changes if I use `fetcher.Form` because as I mentioned with Fetcher, we don't transition, we don't move to a different route.

we could bring back `useEffect` from React and trigger a function whenever *data and state changed*.

So whenever one of these two values changed and we can check if state is equal to **idle**, which means we're not executing an action or a loader anymore.

**<span style='color: #875c5c'>IMPORTANT:** For the action to work correctly, you need to have your form `input` with a **name** attribute.

```javascript
<input
  type='email'
  name='email'
  placeholder='Sign up for newsletter...'
  aria-label='Sign up for newsletter'
/>
```

#### reset form with React useState & useEffect

**<span style='color: #a3842c'>Link:** [https://stackoverflow.com/questions/54895883/reset-to-initial-state-with-react-hooks]

### Deferring Data Fetching with defer()

sometimes you wanna load a page before the data is there and show parts of the page already until all the data is there. For example, here it would make sense to show these buttons already:

- the *all events*
- *new event*

**<span style='color: #a8c62c'> pages/EventLoader-defer.jsx**

```javascript
export const loader = () => {
  return defer({
    events: loadEvents(),
  });
}
```

**<span style='color: #9e5231'>Error:** in our `loadEvents()` function, called by `defer()`, we can't anymore return the *response* as we did before, as we now have this defer in between, we have to manually parse as we did before.

**<span style='color: #495fcb'> Note:** what `loadEvents()` returns must be a promise, otherwise there would be nothing to defer!

`Suspense` is a *React* component, that is used by *react-router-dom* and by the `Await` component to show a fallback whilst we're waiting for the data to be fetched

**<span style='color: #a8c62c'> pages/Events-defer.jsx**

```javascript
<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
```

### Controlling which data should be Deferred

**<span style='color: #9e5231'>Error:** since our `components/EventList.jsx` can now be used from different pages/components, we need to switch the path from *relative* to *absolute* of our `Link` react-router-dom element.

**<span style='color: #875c5c'>IMPORTANT:** if we have several loaders within a **defer loader**, and you want the page to load only one loader has fetched the data, but then load the page, before the second is ready, you can make use of `await`.

**<span style='color: #a8c62c'> pages/EventDetailLoader-defer.jsx**

```javascript
export  const loader = async ({ params }) => {
  const id = params.eventId;

  return defer({
    // event: loadEvent(id),
    event: await loadEvent(id), //INFO: waiting for this loader to fetch data before loading the Event detail page
    events: loadEvents(),
  });
};
```

## Adding Authenticaton to React Apps

### How Authentication Works

For Authentication, there are 2 main solutions for that.

#### Server side sessions

We could use server side sessions or authentication tokens.

Now, server side sessions are a very popular solution especially for full stack applications where you don't have a decoupled front end and back end as we do often have it with React though. So it's not ideal for React.

The idea behind server side sessions would be that on the server, after a user was logged in and authenticated we store a unique identifier on the server. We stored it on the server and mapped that to a specific client with help of an id that's then sent back to the client. And the client then sends that ID with future requests which do try to access protected resources.

And since this *id* mapped to that idea on the server, the server is able to check whether that client really does have permission to access protected resources.

Now, server side sessions are a great way of solving authentication or of enabling authentication but they do require a **tight coupling between backend and frontend** because the backend must store information about the client. **And with React apps you are often talking to decoupled backend APIs which are not closely coupled to a client** and which don't store any client site information.

**<span style='color: #495fcb'> Note:** And that's where authentication tokens come into play.

#### JSON Web Token

The idea behind authentication tokens is that on the server after a user was authenticated, so after a user sent a valid pair of credentials, for example, **we create but don't store a permission token**, which is basically a string that is created according to some algorithm and that includes some information.

So we create such a token on the backend and we send that token back to the client. Now, the **special thing about that token is that it's validity can only be checked and proven by the backend that created that token because the token is created with help of some private key which is only known by the backend**.

So in future requests from the client to the backend we attach that token to those requests, and the backend is able to take a look at that token, validated and see if it is a token that was created by that backend.

### Working with Query Parameters

to send different different request, depending if the user wants to login, or register as a new user,  we are able to switch between those two modes, but at the moment, this is implemented with help of `useState`.

**<span style='color: #a8c62c'> components/AuthForm.jsx**

```javascript
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }
  //...
}
```

**<span style='color: #495fcb'> Note:** However, we could also leverage a standard web concept for managing this. We could leverage **query parameters**, **search parameters** as they're also called.

Now, a query parameter is in the end a parameter that's appended in the URL after a question mark.

**<span style='color: #875c5c'>IMPORTANT:** So it's the same route, it's the same path, the path is always */auth*, but we get this extra parameter which defines how exactly this component should be rendered.

And that's not uncommon to do and an advantage of using query parameters would be that we can directly link to this page:

- in signup
- or log in mode so that we could link a user directly to the signup page

`useSearchParams` returns an array

- a first element is an object that gives us access to the currently set query parameters
- function that allows to update the currently set parameters

```javascript
const [searchParams, setSearchParams] = useSearchParams()
```

### Implementing the Auth Action

`useParams()` cannot be used in action, it can only be used in a React component function or a React Hook function. But we can use the **built-in URL constructor**, which is provided by the browser,

### Validating User Input & Outputting Validation Errors

We can get that data returned by that action function that was submitted by that form with help of the `useActionData()` hook. **we only get that data if our action returns something, if it returns something else, then a redirect.**

### Adding User Logout

We could add a logout button, that should then trigger an action or whatever that deletes the token.

There are different ways of handling this. We could simply add a on click listener and trigger a function that reaches out to local storage and deletes the token.

But we can also use the more official React Routing embracing approach, and I'll add a new route.

I'll add a new file in my pages folder called `Logout.jsx` This file won't contain any component because there is no log out page. Instead, I'll just export a function, an **action** to be precise, which will clear my local storage, which will get rid of the token.

### Updating the UI Based on Auth Status

So now to update the UI based on the existence of the token, I wanna make the token easily available in my entire application on all my routes.

we also want that if the token would be removed because we log out, the UI automatically updates.

And we could use React context for managing that token across the entire application.That would be a perfectly fine way of doing that. But since we're using React-router, we can also again leverage it to that package for doing that.

- We could add a loader, which simply takes a look at local storage and extracts the token from local storage.
- That token would then be available through the loader data of that root route in all other routes.
- The best thing about that is that React router will automatically reevaluate that if we for example, log out, if we submit that logout form. So it will then re fetch that token and for example determine that the token doesn't exist and then update all the pages that use that loader data from that root route.

```javascript
{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id:'root',
    loader: tokenLoader,
    children: [
//..
    ]
}
```

So now this will be called whenever a new navigation action occurs, for example, because we triggered a logout and therefore we will check the current status of the token whenever the user does anything on the page whenever the user submits a form or navigates around. And that therefore ensures that we always have the latest information about that token.

In order to use data from that loader and easily get access to it, I'll assign an `id` to that route.

### Important: loader()s must return null or any other value

**<span style='color: #875c5c'>IMPORTANT:** In the next lecture, I set up a route loader that doesn't return a value under certain circumstances.

You should make sure that you do add an extra `return null` statement in all `if` statement branches where nothing would be returned otherwise to avoid errors.

To be precise, in the `checkAuthLoader()` function that will be added in the next lecture, you should add `return null` after the `if` statment:

```javascript
export function checkAuthLoader() {
  // this function will be added in the next lecture, make sure it looks like this in the end
  const token = getAuthToken();
  
  if (!token) {
    return redirect('/auth');
  }
  
  return null; // this is missing in the next lecture video and should be added by you
}
```

### Adding Route Protection

when logged out, we can still access the route `http://localhost:5173/events/new`, of course submitting the form would fail because we actually wouldn't be able to attach a token to the outgoing request.

But it would be even better if we wouldn't be able to reach that form at all if we're not logged in. So what we need is some route protection.

**<span style='color: #495fcb'> Note:** So how can we add this kind of protection then? We could utilize a loader. A loader that simply checks if we have a token. And if we don't have a token, redirects us away.

### Adding Automatic Logout

**<span style='color: #a8c62c'> pages/Root.jsx**, we could add `useEffect()` to set a timer, whenever the root layout is rendered, which happens when the app starts, as it's the very first component we load for all our routes.

**<span style='color: #495fcb'> Note:** if we had multiple sibling routes, this approach wouldn't work though.

### Module Resources

**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/jsonwebtoken]
**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/jwt-decode]

## Deploying React Apps

### Understanding Lazy Loading

Lazy loading  means that we wanna load certain pieces of code only when it's needed.

without lazy loading, it's important to understand that we have all these import statements in our various files where we import code from other files into the file where the import statement was added. if we have `import * from react-router-dom`, that simply means that when this component file is evaluated by the browser, this code for this hook will be imported because this code is needed in order to handle this component.

**<span style='color: #875c5c'>IMPORTANT:** So all these imports in the end connect these different files. And when this application is served to end users, all these imports must be resolved before something's shown on the screen.

Now the theoretical problem with that is, that of course, this means all code files must be loaded before anything's shown on the screen. In more complex applications in bigger apps with dozens or even hundreds of routes and components, that could be a problem. Having to load all the code initially will slow down that initial page load. *When the user visits that website for the first time*, all that code must be downloaded before anything's showing up on the screen.

The idea behind lazy loading is that we load certain components in the end only when they're needed instead of ahead of time.

### Adding Lazy loading

with traditional `import` statement, it's always loaded. **It's loaded eagerly**, as it's called.

you can actually also call import as a function and in that case it will **import something dynamically, only when it's needed**.

```javascript
loader: () =>
  import('./pages/Blog').then((module) => module.loader()),
}
```

we can either use `.then()` or `async/await`.

in the end `module.loader()` will return the expected *Promise* of `loader: ...`

We could try the same approach for loading lazily component function. However, this alone won't do the trick because this here is not a valid functional component. Because, whilst you can write components as functions, after all that is what we did throughout this course, **a function is only a valid component if it returns JSX code**. While our *import using a function* however, returns a promise because import actually yields a promise. **And that's not a valid React component function**.

To solve this problem React gives us a special function which we have to wrap around this function and that's the `lazy()` function

`Suspense` can be used:

- when we use `defer` in our loader
- it can also be used by components to wait for content to be loaded before actually rendering the content

suspense is used to wrap it around this lazily loaded component so that we can show a fallback which is specified with help of the `fallback` prop on `suspense` until that component code is there.

![image info](./23_sc1.png)

Now if you reload on the homepage, you can see how lazy loading works by opening your *developer tools* and there go to the **network tab**.

Make sure you clear the tab so that you have no requests in there, and then if you click on blog, you will see that actually here it has **downloaded this JavaScript file** here. This JavaScript file was downloaded dynamically. (And that JavaScript file which was loaded lazily here includes the code for the loader and for the blog page component.)

**That was downloaded dynamically because we added lazy loading.**

**<span style='color: #a8c62c'> pages/Post.jsx**

```javascript
export function loader({ params }) {
  const postId = params.id;
  return fetch('<https://jsonplaceholder.typicode.com/posts/>' + postId);
}
```

**<span style='color: #a8c62c'> App.jsx**

we get params by React router in this loader function, and here we should simply forward that under a params key to this loader.

```javascript
loader: ({params}) =>
  import('./pages/Post').then((module) => module.loader({params})),
```

Or we simply take that overall meta object which we get from React router which contains this params key and we forward this meta object here to this loader.

### Build the Code for Production

Now, this build step here is required because the application we're building is not the application we're going to upload at least not like this. This is not the code we're going to upload.

This is the code which we use during development.

It's very readable and it sometimes even uses features which aren't supported like that in the browser. Like this JSX code that's not supported in browsers. It must be transformed before we can upload this on a server that serves it to end users.

**<span style='color: #495fcb'> Note:** By the way, here during development when we preview this page we also get a transformed version of that code. **This development server**, which we started with `npm run dev` is transforming the code as we're writing it. **kind of a live transformation process**.

`npm run build` for **Vite React** applications will build our project, in a *dist folder*. And it's the content of that *dist/build* folder that should be deployed to a server. It's of course not very readable but it's a valid code that can be executed.

- you have your optimized JavaScript file with those different dynamically loaded chunks.js files for the lazy loading
- but also with that main chunk that's downloaded initially. (index)
  - And that file contains all the code you wrote plus all the third party package code you're using including the React library itself.

### Deployment Example

**<span style='color: #a3842c'>Link:** [firebase landing page](https://console.firebase.google.com/u/0/)

To disable *Firebase* website `firebase hosting:disable`

You might remember that when we deployed this website we were asked whether we want to configure it as a single page application, and we chose yes.

Now this is important, but why? Well, keep in mind that on that website we have navigation, provided by *react-router-dom'.

And that code for evaluating the URL and loading different components executes in the browser. So it's a client side package. It's not executing on a server. This project has no code that executes on the server.

Now clicking on links is one thing though. What if we enter a URL like the domain /posts, then it also loads this blog page as it should, but we shouldn't take this for granted.

Because actually when you have your application deployed on a server and a user enters a URL in the browser, what happens technically is that the browser sends a request to the server. That always happens because the browser must request the website for which we just entered the address.

Now the server then sends back a response, which of course, is in the end is this React application. So the HTML file, but also the JavaScript code that makes up this application.

Now if we did not just send a request to main domain, but maybe also to some path like /posts or whatever path we have on our website, then that path also reaches the server on this initial request. And by default, the server would try to find the fitting response for the path we requested in our request. For example, by searching for a folder with a name of some route.

And of course, the server in this case would fail to find a fitting file because it doesn't have any server side logic for handling requests with different paths.

What the server should instead do is always return exactly the same HTML file and the same JavaScript code so that this path, which we requested, can be resolved on the client side by that JavaScript code we requested, so by our React app that's using *React Router*.

**<span style='color: #875c5c'>IMPORTANT:** However, the default behavior is not that the server always returns the same file. Instead by default, it would look for a fitting file in a fitting folder based on the request we sent.

>And that's why we got this question whether we want to configure this as a single page application. By answering this question with **yes**, Firebase set up some configuration which is respected by the Firebase server, which basically tells Firebase to always return `index.html`, which then will always request the same JavaScript files. **So this makes sure that client side routing is used instead of server side routing**.

**<span style='color: #495fcb'> Note:** hosting providers might not ask you whether you want to configure this as a single page application. you manually must set up some redirection rule that basically forwards all requests to *index.html*.

## React Query / Tanstack Query: Handling HTTP Requests with Ease

### Module Set-up

**<span style='color: #a3842c'>Link:** [Tanstack](https://tanstack.com/query/latest)

### React Query: Why?

We have to write all this code here in the useEffect hook to make sure that we fetch the data and then trigger and set our different states. We have to manage all these states, and we have to do that, basically, in every component that wants to send HTTP requests.

Now to be fair, we could simplify this code and reuse code by building a custom hook, though.

but below features could be implemented with Tanstack:

- refetching/re-updating the UI after changing tab in the browser, if we found out that the data we're currently displaying is outdated
- caching: so that the data once fetched is cached, stored in memory, and we can then reuse that data if we need it again.

### Installing & Using Tanstack Query

`npm i @tanstack/react-query`

`useQuery()` hook will:

- send an HTTP request; get us this events data
- also give us information about the loading state
- and potential errors

`queryFn` property, you define the actual code that will be executed that will send the actual request, **it must return a promise**.

**<span style='color: #875c5c'>IMPORTANT:** Tanstack Query does not come with some built-in logic to send HTTP requests. **The code for sending the requests must come from the developper side** (we use fetch, but we could also use *axios*). Instead it comes with logic for:

- managing those requests,
- keeping track of the data
- and the possible errors that are yielded by these requests

`queryKey`: to cache the data that's yielded by that request so that the response from that request could be reused in the future. You can configure how long data can be stored and reused by *React Query*. This makes sure that data can be shown to the user quicker if you already have it because it doesn't need to be refetched all the time.

`useQuery` returns an *queryObject*, on which we can use destructuring to pull out:

- *data*, return by our custom fetching functions
- *ispEnding* property; returns if the request/response is still on its way, or if we do have a response
- *isError* & error message
- *refetch*

**<span style='color: #9e5231'>Error:** *No QueryClient set, use QueryClientProvider to set one.*

**<span style='color: #a8c62c'> App.jsx** In that App component I got some routes set up, the goal now is to wrap the *RouterProvider*, which is in the end responsible for rendering the different components that make up our website, with another provider component provided by *Tanstack Query*

```javascript
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
```

*Developer tool/Network*: *Tanstack* already provides a better user's experience, if we change tab in our browser and come back to our website, then we see and HTTP request sent, by *Tanstack Query*, which for example reacts to us going away from this screen and coming back to it.

And the advantage of this, of course is that, if some data should change, for example if in my backend, **the updated data is fetched**!

### Understanding & Configuring Query Behaviors - Cache & Stale Data

**React Query caches response data**. if we're on our website, we can, for example, go to a different page by clicking *View Details*. And if we then go back by clicking *View All Events*, the events here are available instantly.

with `useEffect`, if we went to a different page and came back, a brand new request was sent and all the data was fetched again.

Now here with React Query, the data is available instantly. Though, if you take a look at the Network Tab, you will actually see that as I click on *View All Events*, there is another request being sent. And nonetheless, the data is available instantly.

Going to the *Network Tab in the Developer Tools*, and by then, Throttling this a little bit and going to Slow 3G, which means network requests will take a bit longer, because we're Throttling the network.

With that enabled, you'll see that still, if I go back to View All Events, the data is available instantly. Just the images were not available instantly, because those of course, still had to be re-fetched. These are not fetched by useQuery and not cached by React Query. Instead, these are simply included through links and fetched by the browser.

**<span style='color: #495fcb'> Note:** Images are fetched and (potentially) cached by the browser - React & React Query are not involved!

There is another request being sent Behind the Scenes here, but this is not the request that's needed to display data instantly. Instead, React Query caches the response data you are getting back from your requests and it will reuse that data whenever it encounters a never useQuery execution with the same *Query Key*.

**<span style='color: #495fcb'> Note:**

- *React Query* will see that this *queryKey* has been used before and that it did already cache data for that key. And it will then instantly yield that data, but at the same time, also send this request again Behind the Scenes to see if updated data is available.
- And then it will kind of silently replace that data with the updated data so that after a couple of seconds or however long it takes to fetch that data, so that we have the best of both worlds.

By setting a `staleTime` on your queries: this controls after which time React Query will send such a Behind the Scenes request to get updated data if it found data in your cache. **and the default is 0**, which means it will use data form the cache, but it will then always also send such a Behind the Scenes request to get updated data. *You can see this happening via Developer Tools/Network*.

The staleTime with which you can make sure that no unnecessary requests are sent.

`gcTime`: garbage collection time, how long the data in the cache will kept around. `gcTime: 30000`, cache will only be kept 1/2 minute. So thereafter, if this component needs to render again, there would be no cached data, and therefore, React Query would always need to send a new request to get some data before it can show anything.

### Dynamic Query Functions & Query Keys

in our `useQuery()` function, by constructing a query key dynamically, *React Query* can cache (and reuse) different data for different keys based on the same query.

**<span style='color: #a8c62c'> components/Events/FindEventSection.jsx**

`queryKey: ['events', { search: searchTerm }],`

**<span style='color: #495fcb'> Note:** we can either pass our *searchTerm* as dynamic value, or pass an object.

But using this `ref` value for fetchEvents and for this key is actually not ideal, because refs, unlike `state` in React don't cause this component function to re-execute which means that as the value entered into this input here changes, this query is not updated and not sent again.

But of course we would wanna send it again to get new data if the user did enter a different search term. Therefore, here in this component I will also manage some state with the `useState` hook.

**<span style='color: #9e5231'>Error:** in the network tab of the browser, is this request where I am sending some request to my backend API and then the search query parameter is set to **object-object**, which is a invalid value.

![image info](./24_sc1.png)

### The Query Configuration Object & Aborting Requests

**<span style='color: #875c5c'>IMPORTANT:** React Query by default passes some data to your Query function.

- it is an object that gives us information about the Query key that was used for that query
- and a signal, which is required for aborting that request, If you, for example, navigate away from this page before the request was finished

Therefore here we should actually accept such an object and we can use object destructuring here to pull out the different things we will get here:

- signal
- and pass it to the built-in fetch function by adding a second argument to fetch, a configuration object, which takes a signal property and wants a signal of that shape as React Query gives it to us so that the browser then can use that abort signal internally to stop the request if it receives that signal
- searchTerm, we can pass the name we want. And now we just have to make sure that in `FindEventSection.jsx` section where I'm wrapping fetch events with an anonymous function, I'm passing an object to fetch events and I'm setting a property named *searchTerm* in the objec I set, this makes sure that this *searchTerm* property exists here when it's needed.

**<span style='color: #a8c62c'> util/http.js**

```javascript
export const fetchEvents = async ({ signal, searchTerm }) => { 
  //...
const response = await fetch(url, { signal: signal });
//...
}
```

**<span style='color: #a8c62c'> components/Events/FindEventSection.jsx**

```javascript
const { data, isLoading, isError, error } = useQuery({
  queryKey: ['events', { search: searchTerm }],
  queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
});
```

### Enabled & Disabled Queries

But now one thing where this component maybe does not behave exactly as expected is when I reload this page or when I visit it for the first time. Because in that case I see all those events. which kind of makes sense because no search term was entered and therefore of course we have no criteria to narrow those events down.

we might want to make sure that we don't send this query in the find event section component *if we did not enter any search term at all*.

```javascript
const { data, isLoading, isError, error } = useQuery({
  queryKey: ['events', { search: searchTerm }],
  queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
  enabled: searchTerm !== undefined
});
```

`useQuery()` configuration object takes an `enabled` property

- if you set this two false, the query is disabled and will not be sent, so the request will not be sent
- if you send it to true, it will be sent and that's the default

If I don't want a loading spinner if we're waiting for the user to enter something, instead of using `isPending` in `useQuery()` object destructuring, *React Query* gives us an alternative, `isLoading`.

### Changing Data with Mutations

This `useMutation()` hook is optimized for such data changing queries.

```javascript
const { mutate, isPending, isError, error } = useMutation({
  mutationFn: createNewEvent,
});
```

it returns an object which has a `mutate` property, which is extremely important because this is now a function which you can call anywhere in this component to actually send this request because as mentioned, useMutation, unlike useQuery does not automatically send this request when this component here is rendered but instead only when you tell it to send that request, which you do with help of that mutate function.

![image info](./24_sc2.png)

**<span style='color: #9e5231'>Error:** from the network tab, we see that we get an error response, because our backend will send an error response if any of below fields are empty:

**<span style='color: #a8c62c'> backend/app.js**

```javascript
if (
  !event.title?.trim() ||
  !event.description?.trim() ||
  !event.date?.trim() ||
  !event.time?.trim() ||
  !event.image?.trim() ||
  !event.location?.trim()
) {
  return res.status(400).json({ message: 'Invalid data provided.' });
}
```

### Fetching More Data & Testing the Mutation

the way the backend works, there an event's images route, to which a get request can be sent to get back a list of images from which the user can choose.

because those actual images that will be displayed are stored on the backend in that public folder, they're not part of the frontend project.

Therefore I can't just include them in my frontend code. Instead, a request must be sent to this backend route here so that we get that list of images that we can display and we can then render that list on the frontend.

**<span style='color: #a8c62c'> backend/app.js**

```javascript
app.get('/events/images', async (req, res) => {
  const imagesFileContent = await fs.readFile('./data/images.json');
  const images = JSON.parse(imagesFileContent);

  res.json({ images });
});
```

`EventForm.jsx` uses `ImagePicker.jsx`, which needs to receive an array of images, but currently set to an empty array.

**<span style='color: #a8c62c'> components/EventForm.js**

```javascript
<div className="control">
  <ImagePicker
    images={[]}
    onSelect={handleSelectImage}
    selectedImage={selectedImage}
  />
</div>
```

### Acting on Mutation Success & Invalidating Queries

we don't have any code that would define what should happen after we mutate.

Now we could navigate away programmatically, for example, with help of the `useNavigate` hook provided by React Router.
`navigate('/events')`

But we also might want to wait for this mutation to be finished until we do that so that we don't close this screen whilst the request is still on its way.

In `useMutation()` function, using `onSuccess` makes sure that the code defined will only execute if the mutation did succeed. If we instead would `navigate` away here in handleSubmit we would always do that no matter if the mutation succeeds or fails.

In addition to navigating away, when submitting a new event, you would see that it is submitted but it's not showing up here under my recently added events, It's not showing up here until I, for example, switch to a different page and come back because as you learned, this triggers React Query to refetch data.

But of course, if I know that the data just changed because I added a new event, for example, I want React Query to immediately refetch data.

And we can achieve this by calling a method that's provided by *React Query* that allows us to **invalidate one or more queries**. So that allows us to tell React Query that **the data that's connected to some queries is outdated and that it should be refetched**.

to do so, we need the `QueryClient` object, so we now export it from our `http.js`, rather than `App.jsx`.

And to target specific queries, invalidate queries takes an object as an input where we have to define the `queryKey` which we wanna target (an array value).

**<span style='color: #a8c62c'> components/Events/NewEvent.jsx**

```javascript
const { mutate, isPending, isError, error } = useMutation({
  mutationFn: createNewEvent,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['events'] });
    navigate('/events');
  },
});
```

**<span style='color: #875c5c'>IMPORTANT:** by passing `{ queryKey: ['events'] }`, we invalidate all queries that **contain events**. for example, query of `FindEventSection.jsx` would also be invalidated. (`queryKey: ['events', { search: searchTerm }]`). Alternatively, we can pass the `exact` property to target with `true` value and have only queries with exactly the same key would be invalidated.

**<span style='color: #495fcb'> Note:** But since you should build your Query keys such that they kind of describe the data you are fetching, it makes sense to invalidate all queries that include events because all those queries would otherwise be dealing with old data.

Now when I click Create, you see it shows up down basically instantly because it's refetched behind the scenes immediately because I'm invalidating queries.

### Disabling Automatic Refetching after Invalidations

Well, because for deleting an event, we were on that details page here and when then after deleting an event, we invalidated all event related queries. We still were on that page. And therefore, technically, since we invalidated all queries, *React Query* went ahead and immediately triggered a refetch for this details query with that specific id we had cached.

Now, to avoid this behavior, we should go back to invalidate queries and add a second property to this configuration object for invalidate queries: `refetchTypw: 'none'`

### Enhancing Demo App & Repeating Mutation Concepts

in our `useMutation()` hook, we can assign alias if in the file we have already used *isPending*, *isLoading*, *isError*

```javascript
isPending: isPendingDeletion,
isError: isErrorDeleting,
error: deleteError,
```

### React Query Advantages in Action

to simulate an error in the edit page and get our custom error message, we can manually enter a wrong url [http://localhost:5173/events/XXX]

**<span style='color: #495fcb'> Note:** It's also worth noting that if I load this details page, it takes a short while, but then once I got this data, this *Modal* page for editing an event opens up pretty much instantly and that's the case because this data is cached. Because I'm using the same query with the same `queryKey`, `queryKey: ['events', params.id],`

- in EditEvent component
- and in the event details component

### Updating Data with Mutations

there is an alternative way of handling mutation, and the different mutation states it goes through, instead of what we saw so far:

- pulling the usual *isPending, isError, error* properties
- using `query.invalidateQueries()`, and `navigate()` once mutation succedeed
- in the mean time displaying a loading spinner

**<span style='color: #a3842c'>Link:** components/events/EditEvent.jsx

```javascript
function handleClose() {
  navigate('../');
}
```

To close the modal, we're going up one level to basically go to the page I'm coming from, which is the detail page for the event I tried to edit.

### Optimistic Updating

by pressing this update button, I want to update this UI here instantly without waiting for the response of my backend. And if my backend then turns out to fail, *if the update fails for whatever reason, I simply want to roll back the optimistic update I performed*.

`queryClient.setQueryData` will manipulate the already stored data without waiting for a response. Normally it's manipulated by *React Query* whenever you got a new response that's being cached. But you can also manipulate that stored data yourself by calling `setQueryData`.

Arguments are:

- the key of the query we want to edit
- the new data to store under that query key; the data we send to our backend

**<span style='color: #495fcb'> Note:** *Tanstack* automatically passes the data that you pass to `mutate({ id: params.id, event: formData });` (as a value to `mutate()`). We automatically get this data that you submit, to your backendas, as an input.

**this will manipulate the data without waiting for a valid response**.

`await queryClient.cancelQueries({ queryKey: ['events', params.id] });`

when performing optimistic updating, you should also use to query client to cancel all active queries for a specific key by passing an object to cancel queries, and then setting a query key for which you want to cancel queries. **This avoids to have clashing response data from those queries**.

when performing optimistic updating, the updating process on the backend could fail. And in that case, we would now have outdated data on the UI.

For example, if I delete the entire title, now it's automatically updated on the page, but if I reload it's actually back because my backend code blocks this, my backend code does require an input for every field. So we wanna make sure that we roll back our optimistic update if it does fail on the backend. Currently that's not what's happening, we have to reload the page.

- get and store the old data: `const previousEvent = queryClient.getQueryData(['events', params.id]);`
- `onError: (error, data, context) => { queryClient.setQueryData(['events', params.id], context.previousEvent);},`. `onError()` has a couple of inputs that are passed automatically by *React Query*. the `context` object contains the previous event, but it must have been returned inside `onMutate()` function. `return { previousEvent };`
- `onSettled: () => { queryClient.invalidateQueries(['events', params.id]);}`: this will be called whenever the mutation is done, no matter if it failed or succeeded. And in that case, just to be sure that you really got the same data in your front end as you have on your backend. You should also, again use query client to invalidate your relevant queries.

### Using the Query Key as Query Function Input

to limit the number of events displayed in the *recently added section*, we can control how our query function will be executed by wrapping it in an anonymous function. we also need to update our query key.

as we pass the same information to the `queryKey` and the `fetchEvents`, which is redudant as we automatically get the *query key* in the `queryFn`function, responsible for triggering the *fetchEvents* function. we need to make use of *Javascript spread operator*

```javascript
// queryKey: ['events'],
// queryFn: fetchEvents,

// queryKey: ['events', { max: 3 }],
// queryFn: ({ signal, queryKey }) => fetchEvents({ signal, max: 3 }),

queryKey: ['events', { max: 3 }],
queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),

```

###

you can also combine those *React Router* features, fetching and manipulating data, with *React Query*.

we can use `loader` function to tell *React Router* to execute the code in this function before it actually loads and renders this component. And that allows us to fetch data before the component even appears on the screen.

```javascript
export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}
```

**<span style='color: #495fcb'> Note:** `fetchQuery` returns a promise and wait for that promise to resolve before React Router goes ahead and renders the component.

And you could now, for example, think that we should now remove `useQuery` from that component because we're using *React Router* now.

But this is actually not the case, because whilst you could use `useLoaderData`, a hook provided by *React Router*, to get access to the data that's returned by the loader, it is better to keep useQuery around.

Because when we use `fetchQuery` here in the loader, React Query will go ahead and send that request and we'll then store that response data in the cache. Therefore, when `useQuery` is executed again here in the component, it's this cached data that will be used, but we keep all the other advantages *React Query* has to offer.

that's why in addition to our newly `export function loader({ params })`, I want to keep on using *React Query* `useQuery()` here directly in the component.

we get rid of `isPending` input, and we could also remove `isError`, and use *React Router* capability.

after such changes, if I reload this page, it waits until everything was loaded until it displays this page.

But if you wanna use React Router you are not limited to fetching data. Instead, you can also use it for editing data for performing mutations.

we create `export async function action({ request, params })` and it's now this *updatedEventData* that should be sent to the backend (`formData`).

Now to do that, we can directly call `updateEvent` method, which we're importing from *http.js*, we can directly call this function in this `action` function without creating or triggering a mutation because this `useMutation` hook was in the end also just a wrapper around this function, a wrapper that then gave us extra access to information like whether this was currently pending, had error, etc.

```javascript
export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(['events']);
  return redirect('../');
}
```

we should of course change our component and make sure we don't use anymore `mutate`, and replace with:

```javascript
 function handleSubmit(formData) {
  submit(formData, { method: 'PUT' });
}
```

**<span style='color: #875c5c'>IMPORTANT:** even though it might look like it we're not sending an HTTP request here. Instead, **this code will simply trigger this client site action function**, and the code of our `action` will be executed.

#### useIsFetching @tanstack

**<span style='color: #a8c62c'> components/Header.jsx**

it's also weird that If I click on edit, it takes a short while until something happens. To provide a better user experience, we can use `useIsFetching` hook provided by React Query.

#### avoiding unnecessary Requests

I also wanna make sure that we avoid redundant HTTP requests when using *React Router* in conjunction with *React Query*.

From the network tab, If I reload the details page and then click edit, you'll notice that we got 2 requests,

- which in the end is initiated by React Router
- then also a second request to the same URL, coming from React Query, which we're still using in that EditEvent page.

And even though we, of course, will have cached data here, as you learned *React Query* will still go ahead and send an extra request behind the scenes to make sure that the cached data that's currently being used is the most recent data. Now that's of course kind of redundant here, because we know that we just loaded the latest data with help of the loader a second ago. So re-fetching it again behind the scenes is really unnecessary here. we can make use of `staleTime` with 10 seconds value.

**<span style='color: #a8c62c'> components/Events/EditEvent.jsx**

```javascript
const { data, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,
  });
```

## Introduction to NextJS

### Module Introduction

**<span style='color: #a3842c'>Link:**

- [http://192.168.1.30:3000/]
- [http://localhost:3000/]

*NextJS*, a React framework, allowing to build full-stack applications with React. Application where the front-end is still controlled by React, but this front-end seamlessly blends with the back-end.

we need project that comes with NextJS pre-installed and that has a certain structure and setup that's needed by NextJS.

**<span style='color: #a3842c'>Link:** [https://NextJS.org/](https://NextJS.org/)

#### Debugging NextJS Apps

**<span style='color: #a3842c'>Link:** [https://dev.to/vvo/5-steps-to-debugging-next-js-node-js-from-vscode-or-chrome-devtools-497o]

**<span style='color: #a8c62c'> launch.json**

```json
{
  "type": "node",
  "request": "attach",
  "name": "nextjs_debug",
  "skipFiles": ["<node_internals>/**"],
  "port": 9230
}
```

**<span style='color: #a8c62c'> package.json**

```json
"scripts": {
  "dev": "next dev",
  "debug": "NODE_OPTIONS='--inspect' next dev",
  // ...
},
```

### Understanding File-based Routing & React Server Components

`page.js` & `layout.js` are reserved file names.

**<span style='color: #a8c62c'> app/page.js**

**<span style='color: #875c5c'>IMPORTANT:** on the surface, it's a regular component. There's nothing special about it, but NextJS ensures that this component is actually rendered on the server, that this component function is executed on the server.

in your `page.js`, if you add a `console.log()`, it will not appear on the browser console, instead you can see it on the terminal of the backend/server.

- So it's a regular React component, but treated in a special way by NextJS.
- It is treated as a server component and executed on the server,
- and it's then the returned JSX code that's sent over the wire to the browser to be rendered as *HTML*

### Navigating between Pages

With *NextJS*, you can get the best of both worlds, a highly interactive, reactive client-side application once it's active, but a finished page being served if you are visiting the page for the first time, so, if you did not navigate around on it yet.

However, With a link and anchor element, the page is always reloading, and we're not in that single-page application.

```javascript
{/* <a href='/about'>About Us</a> */}
<Link href='/about'>About us</Link>
```

With `Link`, we're not leaving the page, we're not loading a brand new page. Instead, behind the scenes, the content of the next page will still be rendered on the server, but it'll then be sent to the client, and there it'll be handled by client-side JavaScript code to update what we see on the screen.

### Working with Pages & Layouts

- Every next project needs at least one root layout JS file. So, one layout JS file at the top of the app folder.
- You can also have nested layout JS files.

we're also exporting a React component just as we did it in that page file. This component then uses the standard children prop, which in React can be used by every component, to inject some content between the body tags.

**<span style='color: #495fcb'> Note:** This component actually renders an `html` and a `body` tag. Some elements which you don't normally use in your React components. **but you actually need to do that in your next project in the root layout to set up the general HTML skeleton of the website.**

Now, you might wonder where the `head` element is, which is also typically needed to set a title and some metadata, and that's actually not rendered here because that can be populated in a different way in *NextJS* by exporting a special variable called metadata constant/variable, an object that can many different metadata fields.

**<span style='color: #495fcb'> Note:** `metadata` is a reserved name while `RootLayout` name is not.

`{children}` will simply be the content of the page that's currently active. Because the layout is a wrapper around one or more pages.

### Reserved File Names, Custom Components & How To Organize A NextJS Project

**<span style='color: #a8c62c'> app/global.css**

This file is being imported into the layout.js file, so that it's essentially available on every loaded page.

**<span style='color: #a8c62c'> app/icon.png**

We can still also add regular React components, which are not treated as pages. For that, let's say that we wanna put this image into this header into a separate component, you can use either `.js` or `.jsx` extension.

**<span style='color: #495fcb'> Note:** because we are still working with React with *NextJS* , we are still working with components, and JSX just enhanced with some extra features.

```javascript
// import Header from '../components/header';
import Header from '@/components/header';
```

you can take advantage of another *NextJS* feature, where you can use an `@` symbol in your import paths to refer to the root project, defined in `jsconfig.json`.

### Reserved Filenames

there are some reserved filenames when working with *NextJS*.

Important: These filenames are only reserved when creating them inside of the `app/` folder (or any subfolder). Outside of the `app/` folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in *NextJS*:

- `page.js` => Create a new page (e.g., `app/about/page.js` creates a `<your-domain>/about` page)
- `layout.js` => Create a new layout that wraps sibling and nested pages
- `not-found.js` => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
- `error.js` => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
- `loading.js` => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
- `route.js` => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: [https://NextJS.org/docs/app/api-reference/file-conventions]

### Dynamic Routes & Using Route Parameters

Because *NextJS* actually passes a `props` object to all those page components. And all these page components get one special prop, which you can pull out with help of destructuring, and that's a `{params}` prop, which again, is set by *NextJS*.

And the value stored under that key will be the concrete value encoded in the *URL*

**<span style='color: #a3842c'>Link:** [https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes]

```javascript
const BlogPostPage = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
};
```

### Revising the concept of Layouts

with the special *React* `{children}` property, you can either pass:

- other layouts (nested layouts)
- pages

### Styling NextJS Project: Your options & using CSS modules

`import './globals.css';`: Any CSS file that's being imported into this `RootLayout.js` file will be available on every page.

#### Tailwind framework guide for NextJS

**<span style='color: #a3842c'>Link:** [https://tailwindcss.com/docs/guides/nextjs]

#### Another solution: CSS Modules

**<span style='color: #a3842c'>Link:** [https://nextjs.org/docs/13/app/building-your-application/styling/css-modules]

It's general standard CSS code, but scoped to specific components by assigning special names to your CSS files.

### Optimizing Images with the NextJS Component

**<span style='color: #a3842c'>Link:** [https://nextjs.org/docs/pages/api-reference/components/image]

in NextJS, you have a special built-in `Image` component, which exists to help you output images in a more optimized way. For example, by lazy loading images under the hood, so that they're only displayed if they're really visible on the page.

from the *Network* tab, we see under *Headers*, the type is not *png*, but *image/webp*, which is a more optimized format.

Adding `priority` property to that image should always be loaded as quickly as possible to make sure that we got no unnecessary content shift or flickering when the page loads and make sure that this is loaded with priority.

### Preparing an Image Slideshow

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);
```

**<span style='color: #495fcb'> Note:** the interval is cleared only when the component unmounts, by using the *cleanup function* of `useEffect()`.

**<span style='color: #9e5231'>Error:**

![image info](./25_sc1.png)

### React Server Components vs Client Components - When To Use What

**<span style='color: #875c5c'>IMPORTANT:**

*NextJS* knows:

- Server components / React Server components
- Client Components

And actually that's technically not just *NextJS*, instead, *React* itself has this differentiation though in most React apps, in all those vanilla React apps which you are building with help of `create-react-app` or with help of `Vite`, **you are using client components out of the box. Because in those projects, React.js is a pure client side library, running code in the browser on the client.**

With *NextJS*, that changes because NextJS is a **full stack framework**. It has a backend, not just a front end, and therefore code also executes on that backend when working with NextJS.

By default, all those React components you have in your *NextJS* project, no matter if they're pages, layouts or standard  components are **only rendered on the server**. That's why they're called *React Server components*.

Now as mentioned, that's actually technically a feature built into *React*, but it must be unlocked, with a certain behind the scenes *build process and structure*, that's not part of most React projects. But it is unlocked and it is the standard with *NextJS*. Therefore, thereby default, all React components are such React Server components and are only rendered on the Server.

So that means that this component `page.js` and this `layout.js` component, but also the `iamge-slideshow.js` component and the `main-header` component, all those components do not execute in the browser, but instead on the server. And you can see that's the case if you **console log**.

**<span style='color: #495fcb'> Note:** It's not only the case for initial page load, but also for subsequent navigations, even though using that *NextJS* `Link` component and we therefore stayed in that single page application, we did not fetch a brand new page. Instead we see it in the backend log.

Even if you are in that single page application mode and you're navigating around, all the components will still be rendered on the Server on the backend, and in the end it's kind of the finished HTML code that's then sent to the client to be rendered there.

**<span style='color: #875c5c'>IMPORTANT:** NextJS embraces this concept of having those Server components. Now that's an important concept and an important advantage of NextJS projects,

- because with Server components you have potentially less client side JavaScript code that must be downloaded
- it's also great for search engine optimization, because web search crawlers now see pages that contain the complete finished content. Compare that with a Vanilla JavaScript project where you are not using a framework like NextJS. There, if you take a look at the source code of a page, you'll see that it's essentially an empty page because all the content is created and populated on the client side by client side code with help of those client side components.

In *NextJS project* that's different. If you take a look at the source code *DevTools*, you will see that all the content is in there. All that text that's visible on the screen is part of the actual page source code, and that is also what web search engine crawlers will see.

Nonetheless, in NextJS projects, you can still also build client components, and that would be components:

- that are still technically pre-rendered on the server
- but then also potentially rendered on the client
- and most importantly, **these are components that must be rendered on the client** because they contain some code or use some features that are only available on the client

**<span style='color: #a8c62c'> app/components/images/image-slideshow.js**

**<span style='color: #875c5c'>IMPORTANT:** `useState` & `useEffect`: these hooks are not available on the Server side, which kind of makes sense if you think about it because we're not interested in setting this interval on the server side, we wanna run this in the browser.

Another example would be **event handlers**: `onClick`, obviously since you are waiting for some user interaction here, that would require to be a client component because that would require code that runs on the client.

**<span style='color: #875c5c'>IMPORTANT:** But since by default in NextJS, all components are **server components**. You have to explicitly tell NextJS if you wanna build a client component by using a special directive at the top of the file that holds that component: `'use client';`

And it's super important to know about this difference and to understand that these two component types exist in general in *React*, but really only work and can be used when using a framework like *NextJS*.

### Using Client Components Efficiently

a convenient feature of *NextJS*, it will tell you if you're using a feature that doesn't work in server components, so that you can then add that `use client` directive.

**<span style='color: #875c5c'>IMPORTANT:** the majority of your components must stay server components and rendered on the server so that you don't lose those server component advantages for most of your components.

we can then extract just the section with *Link* of our `main-header` file, and create a dedicated `NavLink` component, and only that part should be marked with `'useClient';`.

### Outputting Meals Data & Images With Unknown Dimensions

Later, users will be able to upload their own images and share their own meals, and that's something we have to keep in mind when using this *NextJS* `Image` component because this `Image` component needs to know the underlying width and height of the image that's being output.

So not the width and height you wanna have on the screen, but the width and height of the image you are trying to render. And it's able to detect that automatically when you are using the `Image` component as we did it in the header on an image that's imported from the *local filesystem* as we're doing with the logo. In that case, NextJS is able to look up the width and height.

But for those meal items, we'll load them dynamically from a database. And then in the database, we'll have a path pointing to some image, and *NextJS* will not be able to resolve the width and height of such an image, **simply because the information is not available at build time, as it's the case for all imported images, but only at runtime**.

**<span style='color: #495fcb'> Note:** And that's why I added this special `fill` prop. You can use `fill` prop instead of setting a 'width' and 'height' whenever you have an image where you don't know the dimensions in advance. This then tells *NextJS* that it should simply fill the available space with that image as defined by its parent components. (with the appropriate CSS styles)

**<span style='color: #a8c62c'> components/meals/meal-item.js**

```javascript
<header>
  <div className={classes.image}>
    <Image src={image} alt={title} fill />
    {/* <Image src={image} alt={title} width={} height={} /> */}
  </div>
  
</header>
```

### Setting Up a SQLite Database

**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/better-sqlite3]

`npm i better-sqlite3`
`node initdb.js`

### Fetching Data by Leveraging NextJS & Fullstack capabilities

when it comes to loading data in a *NextJS* application, we get a couple of different options.

- We could fetch the data as we would do it in any *vanilla React* application. We could use the `useEffect` hook and then in there use the `fetch` function to send a request to a backend.
- Now, in a *NextJS* application, we actually already have a backend. We have backend and frontend combined, blended seamlessly together. in *NextJS*, **all your components are by default server components that only execute on the server** unless you're using a feature that requires them to be a client component like `useEffect`. But actually, because we have those server components
as a default, we don't need *useEffect* and we don't need to send a *fetch request* to get data. **Instead, since this component by default runs on the server and only there, we can directly reach out to the database from here**.

**<span style='color: #a8c62c'> lib/meals.js**

```javascript
const getMeals = () => {
  return db.prepare('SELECT * FROM meals;').all();
};
```

`better-SQLite3` package doesn't use *promises*, we could use them in our component `MealsPage` with ease because server component functions can actually be converted to **async functions.** You can use the `async` keyword in the definition of the function, something you normally also can't do on your React components, but you can do it on server component

**wrapping it in a promise**:

**<span style='color: #a8c62c'> lib/meals.js**

```javascript
const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals;').all();
};
```

**<span style='color: #a8c62c'> app/meals/page.js**

```javascript
const MealsPage = async () => {
const meals = await getMeals();
// ...
}
```

### Adding a Loading Page

you might notice that if you then go to another page and you come back, the *meals page* is there instantly, we don't have to wait those 2 seconds, and that's the case because *NextJS* performs some pretty aggressive caching under the hood.

To be precise, it caches any page you visited, including the data of that page, and if you then go to another page and come back, it loads that existing page from the cache,so that it can show it to you as quickly as possible.

And only if you reload this page, if you leave the page, and you come back, essentially, only then is the page being recreated.

To improve the user's experience we have to manage the loading state.

**<span style='color: #495fcb'> Note:**

- `loading.js`, just like `layout` and `page` is a reserved file name.
- this file will become active if the page next to it or any nested page or layout is loading data. And in that case, that `loading.js` content is shown as a fallback until the data is there.

### Using Suspense & Streamed Responses For Granular Loading State Management

`Suspense` is a component provided by *React* that allows you to handle loading states and show fallback content until some data or resource has been loaded. it takes a property `fallback`. We create a separate component, in the same file, as it's closely related, in charge of downloading the data, and returning that piece of UI.

And in the end, this `loading.js` file, which we used before, is doing the same thing just behind the scenes. It's wrapping the page content with this suspense component, and it's then showing this loading content here as a fallback. Now we can do this manually.

```javascript
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      {/* ... */}

      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};
```

### Handling Errors

![image info](./25_sc2.png)

The error screen we see here is just a development version of this error screen. In production, this would look differently. We see this screen during development so that it's easier for us as a developer to find and fix the error.

In a `error.js` file, you then set up a component that will be rendered by NextJS whenever an error occurs. Though, it'll only handle errors that occur in the page that sits in the same folder as this error.js file or any nested page or layout.

Therefore, you could of course also add this on the root level of your application to catch any error  in any of your pages.

**<span style='color: #495fcb'> Note:** *NextJS* will pass some props to that component. Most importantly, it will provide an `error` prop.

**<span style='color: #875c5c'>IMPORTANT:** This error component that's stored in an `error.js` file must be a client component simply because NextJS basically ensures that you can catch any errors with that component, including errors that happen on the client side so after the pages were rendered on the server.

### Loading & Rendering Meal Details via Dynamic Routes & Route Parameters

**<span style='color: #875c5c'>IMPORTANT:** insecure sql statement; opening ourself to **SQL injection**

```javascript
const getMeal = async (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ' + slug)
}
```

to protect ourself from **SQL injection**, we need to add dynamic values in our SQL statements.

```javascript
const getMeal = async (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};
```

### Adding an Image Preview to the Picker

```javascript
const fileReader = new FileReader();
fileReader.onload = () => setPickedImage(fileReader.result);
fileReader.readAsDataURL(file);
```

- if a file has been selected, in order to show it as a preview, we now want to convert it into a so-called data URL,a value that can be used as an input for an image element
- We can read our file, calling `fileReader.readSsDataURL()` and pass that file to that method. This method works in a bit of a strange way, because it doesn't actually return anything (no promise, no the read file, not taking a callback)
- instead, we get hold of that data URL that's being generated by assigning a value to the `onload()` property. We store a function as a value in `onload()`, and this function will then be triggered by the file reader once `readAsDataURL` method is done

### Introducing & Using Server Actions for Handling Form Submissions

To submit this form and then create and store a new meal;  when it comes to handling form submissions, we could do that as we do it in most React projects:

- we can go to the component that contains the form
- and then we could add the `onSubmit` prop and define a function that should be executed when the form is submitted
- we could then prevent the browser default
- manually collect all the data
- and send that data to a backend.

But again, here we already are on the backend. We have a full stack application that has both backend and frontend.

And that's why Next.js gives us a more powerful and convenient pattern than manually handling the form submission and collecting the data and sending it to a server.

`'use server'` inside of a function creates a so-called *server action*, which is a function that's guaranteed to execute on the server, and only there.

So just as *components by default* are server components which only execute on the server, this is now a function that only executes on a server. But in case of functions, you must explicitly state that it belongs to the server by adding this directive inside of them, and also add the `async` keyword in front of it.

Why does this feature exist? This feature exists in *React*, not just in *NextJS*, but like server components, it doesn't really work in Vanilla React apps. Instead, you need a framework like *NextJS* to unlock this feature and use it. And this feature then exists because you can now take such a server Action and assign it as a value for the `action` prop on a *form*.

The `action` prop:

- is normally set to the path to which the request should be sent if you are relying on the browser's built-in form handling capabilities.
- instead, we're setting it to an action, to such a *server action function*.

And that's a pattern that's supported by *Next* and *React* here that will ensure that when this form is submitted, *NextJS* will, behind the scenes, create a request and send it to this *NextJS* server that's serving the website so that this function gets triggered, and you can then handle the form submission there, **but on the server, not in the client**. This function  will then automatically receive that `formData` that was submitted.

### Storing Server Actions in Separate Files

**<span style='color: #495fcb'> Note:** using **server action**  can only be added it in a component like this, but this will only work if the component in which you are adding it is **not a client component**.

**<span style='color: #9e5231'>Error:** server actions in a client component file.

In addition, you also might not want to have your server-side form submission handling logic in the same file as your JSX code. You might want to separate that. And for those reasons, you can also store server actions in separate files.

**<span style='color: #495fcb'> Note:** When adding `'use server';` at the top of a file, all the functions you might define in that file will be treated as *server actions*.

And now you would be able to convert this component to a client component `'use client'` if you needed to.

You would not get an error when doing that, and that might sound strange, but the problem before was simply that you were defining client and server-side code in the same file, and the build process that's used by *NextJS* is essentially not able to separate that in a clean way, and therefore server-side code could accidentally end up on the client side, which could pose security issues and cause other problems as well. That's why for technical reasons, you can't mix both in the same file. but you can absolutely import a server action from another file and then use it in such a client component.

### Creating a Slug & Sanitizing User Input for XSS Protection

**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/slugify]
**<span style='color: #a3842c'>Link:** [https://www.npmjs.com/package/xss]

`npm i slugify xss`

**<span style='color: #875c5c'>IMPORTANT:** you must not forget that we're storing **user-generated content** and I'm then outputting these instructions that are generated by the user as HTML, that meal detail page, I'm outputting those instructions as *HTML*.

So we are vulnerable to **cross-site scripting attacks** and that's why we should protect against them and why we should **sanitize the content that's sent by the user**, which is exactly what we can do with help of this `xss` package.

### Storing Uploaded Images & Storing Data in the Database

**<span style='color: #875c5c'>IMPORTANT:** Images should be stored on the file system, not in the database because storing files in databases is a bad idea. It's bad for performance because databases simply aren't built for that.

Instead, I wanna store the uploaded files in that public folder because any images stored there in that images folder will be publicly available so they can be rendered on the screen without problems.

**<span style='color: #875c5c'>IMPORTANT:** Using the `public` folder for user-uploaded image storage also has disadvantages - this will be discussed later!

**<span style='color: #a8c62c'> lib/meals.js**

```javascript
const extension = meal.image.name.split('.').pop()
const stream = fs.createWriteStream(`public/images/${fileName}`)
const bufferedImage = await meal.image.arrayBuffer()
```

*meal.image* is simply that image which we get from the form so that image object that's automatically generated by the browser, and that object will indeed have a couple of helpful properties. One of them is the `name` property.

```javascript
meal.image = `/image/${fileName}`;
```

The content of the public folder will be served as if it were served on the root level of your server and therefore *public* shouldn't be included above so that it won't be included later when requests for that image will be sent.

**<span style='color: #9e5231'>Error:** Below; injecting directly values isn't recommended as it would vulnerable to *SQL injection*.

```javascript
db.prepare(`
      INSERT INTO meal
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (${...})
      `)
```

instead, you should:

- use placeholders `VALUES (?, ? , ? )`
- target specific fields by their names `VALUES (@slug, @title, ...)`

**<span style='color: #9e5231'>Error:** *Cannot read properties of undefined (reading 'Buffer.from')*

`import { Buffer } from 'node:buffer';`

**<span style='color: #a3842c'>Link:** [https://stackoverflow.com/questions/62002553/how-to-fix-typeerror-buffer-from-is-not-a-function]

![image info](./25_sc3.png)

### Managing the Form Submission Status with useFormStatus

`import { useFormStatus } from 'react-dom';`

`useFormStatus` must be inside of the form if we want to get the submission status of that form, so we need a dedicated component.

We create a `meals-form-submit.js` file

### Adding Server-Side Input Validation

**<span style='color: #875c5c'>IMPORTANT:** you should typically do when handling user data and form submissions is validate the values you are getting.

We're getting some errors automatically by the browser. And that's a useful behavior, but it's not enough, because I can disable that by going through the `DevTools`, **that's why client-side validation is not enough**.

**<span style='color: #495fcb'> Note:** Throwing an error as we do it here works, but it also means that we destroy the entire input of the user. That's not necessarily a great user experience.

### Working with Server Action Response & useFormState

In Server Actions:

- you are not limited to redirecting
- or throwing errors
- you can also return values, you can return response objects: any simple values like strings, numbers, nested objects or nested arrays, those values all work.

How can we then use that response in the page where we trigger that *server action*?

`useFormState()`, the first argument is the actual server action, the second argument is the initial state of this component.

**<span style='color: #a8c62c'> app/meals/share/page.js**

```javascript
const [state,  formAction] = useFormState(shareMeal, { message: null });
{/* <form className={classes.form} action={shareMeal}> */}
<form className={classes.form} action={formAction}>
```

Because of `useFormState` we have to turn the component into a client component, though we could again try to outsource this into some nested component.

**<span style='color: #9e5231'>Error:** *ReactDOM.useFormState has been renamed to React.useActionState. Please update ShareMealPage to use React.useActionState.*

**<span style='color: #a3842c'>Link:**

- [https://www.youtube.com/watch?v=GgyP0_b-WPY]
- [https://react.dev/reference/react/useActionState]

### Building For Production & Understanding NextJS Caching

`npm run build`: it builds and prepare our *NextJS* application for production

`npm start`: to run that optimized code/version

**<span style='color: #495fcb'> Note:** Our newly added recipe doesn't appear as before, and our 5s. delay we added in our `getMeals` action isn't happening anymore. *NextJS* performs aggressive caching, that we hadn't seen when testing with the development server.

In the build process *NextJS* generates/ pre-render all the pages of the app that can be pre-generated; all non-dynamic pages, such as the *meals* page. NextJS does this pre-rendering, so that these pages are available right from the start, after being deployed, and very first visitor can see the finished page, without having to wait for anything to render. *NextJS* then cashes these pre-rendered pages, to be served to all visitors.

**<span style='color: #875c5c'>IMPORTANT:** The downside is that it never re-fetches the component.

### Triggering Cache Re-validations

`revalidatePath('/meals');` tells *NextJS* to revalidate the cache that belongs to a certain route path.

second argument:

- `layout` would also revalidate nested routes; which wraps nested pages
- default is `page`, only that path is cached again

**<span style='color: #495fcb'> Note:** To revalidate all page of a website: `revalidatePath('/', 'layout')`

### Don't store files locally on the filesystem

![image info](./25_sc4.png)

The image was missing because we store those images in this `public/images` folder

The problem with this approach just is that this folder is available during development, but for production, it's actually copied into this `.next` folder which also contains all those cached pages, that will be used by the running *NextJS* production server. If you then thereafter add new images into the `public` folder, those will be ignored because the production server doesn't care.

So when you deploy your next project, you therefore technically don't even have to deploy the public folder. *NextJS* is not interested in it.

in the official *NextJS* documentation, they recommend that you should store any files that are generated at run time, essentially, using extra file storage services like **AWS S3 / Vercel Blob**.

**<span style='color: #a3842c'>Link:** [https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets]

### Storing Uploaded Images in the Cloud

**<span style='color: #495fcb'> Note:** Since AWS S3 is not free anymore, substitute is `nginx`

- installation: [https://nginx.org/en/linux_packages.html#Ubuntu]
- beginners guide: [https://nginx.org/en/docs/beginners_guide.html]
- main folder: */etc/nginx*, config: */etc/nginx/nginx.conf*, server configurations: */etc/nginx/sites-available/default*
- logs: */var/log/nginx/error.log*
- useful commands
  - `sudo nginx -s reload`
  - `systemctl status nginx`
  - you can add configurations under corresponding folder, as there is this command in `nginx.conf`: `include /etc/nginx/sites-enabled/*`
- youtube links:
  - [https://www.youtube.com/watch?v=ZyQRqa8I6bU]
  - [https://www.youtube.com/watch?v=f1OOaDI5cxE]
  - [https://www.youtube.com/watch?v=GCznXfbfMq0]

**<span style='color: #495fcb'> Note:**

- all pictures saved under `/var/www/images`
- *nginx configuration* file to serve the image path located: `/etc/nginx/sites-available/default`
  - pictures will served as: [http://192.168.1.30/images/burger.jpg]
- `next.config.mjs`, adding a key for *images*
- delete `images/` inside of `/public/`
- delete `.next/` folder
- delete `meals.db` and run `node initdb.js` after modifying the image property within that file (removing *images/* prefix)
- code of `meal-item.js` and `lib/meals.js` must be changed to provide a new *src* for the image and folder where to save the image
- `npm run build` to recompile project

### Adding Static Metadata

**<span style='color: #a3842c'>Link:** [https://nextjs.org/docs/app/api-reference/functions/generate-metadata]
This metadata constant allows you to add a bunch of metadata, which is then, for example, exposed to search engine crawlers or which shows up when you are sharing a link to a page on X or Facebook.

if you add this metadata to a layout, it will automatically be added to all the pages that are wrapped by that layout unless a page specifies its own metadata.

This would update the browser tab description with the `title` property of the metadata.

**<span style='color: #495fcb'> Note:** with dynamic metadata, if we enter some invalid slug (*meal detail page*), we now get an error though instead of the `not found` page because the metadata is actually generated first.

### About NextJS Pages Router

App Router is the more modern and recommended way.

## Animating React Apps

### Animating with CSS Transitions

**CSS Transitions** can be used by adding the transition property to the base rule, the rule that's always **active**.

### Animating with CSS Animations

if you inspect the body with the *Dev Tools*, this div with the ID modal, you find the backdrop behind the modal and the modal dialogue when the modal is open. but as I close the modal, both are gone.

Now, this also means that we can't use a CSS transition because we can't transition and animate from any initial value as this modal opens because there is no initial value, But we can still animate it by using another feature *that's built into CSS*, **CSS animations**.

The animation defined will then automatically be triggered by CSS whenever this **element appears in the DOM**.

`animation: slide-up-fade-in 0.3s ease-out forwards;`

*forwards*: simply means that I want to keep the end state once the animation is done.

### Introducing Framer Motion

Now CSS transitions and animations are really powerful but they also have limitations.

For example, one limitation is that you can use CSS animations to animate the appearance of an element in the DOM, **but not the disappearance**, another would be more complex animations.

#### Framer Motion

It is an extremely powerful animation library for React.

**<span style='color: #a3842c'>Links:**

- [https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion]
- [https://motion.dev/]
- `npm i framer-motion`

### Framer Motion Basics & Fundamentals

`<motion.div id="box" />`: this will then still render a div on the page but a div with extra capabilities that can be controlled by *Framer Motion* to animate it in a highly performant way. It's really built to give you high performance animations not animations that cause unnecessary component re-render cycles or that slow down the application.

There is not just motion `div`, of course, instead if you press the dot after motion, you see that you basically got all `HTML elements` as motion versions so that you can really animate anything.

That's another feature built into Framer Motion. It gives you this natural look and feel for your animations.

Another important *prop* is `transition` prop which is a prop that can be used to configure the animation that will be played.

- duration
- type: the default was `spring` (if nothing's set) (`tween`)
- bounce: 0.8

**<span style='color: #495fcb'> Note:** if I change to `tween` here you'll see that now there is no bouncing no matter which bounce factor you set.

>**<span style='color: #495fcb'> Note:** We can also use the *JavaScript* shortcut of just using this name once, and it'll automatically be expanded to the longer version behind the scenes by *JavaScript*.

### Adding Entry Animations

Animating to a different value in our `modal.jsx` file will be tricky  because we got no indicator for whether this modal was just added to the DOM or if it's already visible. So unlike in `challenge-item.jsx`, where we had this `isExpanded` prop that could be used to switch between different values. We have no such prop or state in here.

But *Frame motion* also give us access to another pretty useful prop that we can set on them. We can set the `initial` prop, and this initial prop allows us to define an **initial state for the to-be-performed animations that will be assumed immediately after this element has been added to the DOM.**

### Animating Element Disappearances / Removal

*React* handles elements such that if they're not returned by a component function anymore, it's instantly removed from the *DOM*.

*Framer Motion* will make sure that when below code here executes the elements that are rendered by that code, so also that modal are not removed instantly, but instead it will check if there's some element that has an **exit animation**.

**<span style='color: #a8c62c'> /components/Header.jsx**

```javascript
<AnimatePresence>
  {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
</AnimatePresence>
```

**<span style='color: #a8c62c'> /components/Modal.jsx**

```javascript
<motion.dialog
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 60 }}
  open
  className='modal'
>
```

### Nested Animations & Variants

If `variants` are activated in the parent or wrapping component (as in the *modal* component), they will automatically be activated in the child component.

**<span style='color: #9e5231'>Error:** commented by *Spencer*
I found a solution to this problem. I was having the exact same issue. After adding the exit attribute, my backdrop would not go away. I had no differences in my code compared to the one in the video. However, after reading the Framer Motion docs and doing a little experimentation, I found a working solution.

At about 4 minutes into lesson 498, Max shows that the backdrop disappearing is delayed. The cause of that issue starts immediately after setting the transition type to "spring". Setting the transition attribute in the motion.li element means that that element will enter AND EXIT using those transition properties. The added bounce that is created by the "spring" animation (which looks great on entry) is what is causing the delay on the backdrop's disappearance. We can't see it happening, but Framer Motion is waiting for the children elements to finish bouncing before removing the backdrop.

So instead of adding `transition: { type: 'spring' }` to the whole motion.li attribute, simply add it to the visible variant (as shown in the code below). That means motion.li elements will only "spring" on entry. Then you can simply delete the `exit={{ opacity: 1, scale: 1 }}` which for some reason is breaking the backdrop.

**<span style='color: #a8c62c'> /components/NewChallenge.jsx**

```javascript
<motion.li
  variants={{
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' },
    },
  }}
  // exit={ {opacity: 1, scale: 1 }}
  // transition={{ type: 'spring' }}
  key={image.alt}
  onClick={() => handleSelectImage(image)}
  className={selectedImage === image ? 'selected' : undefined}
>
  <img {...image} />
</motion.li>
```

### Animating Staggered Lists

**<span style='color: #a8c62c'> /components/NewChallenge.jsx**

```javascript
<motion.ul
  id='new-challenge-images'
  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
>
```

You can set the `staggerChildren` prop inside the  specific `variants/transition` of the parent element.

### Animating Colors & Working with Keyframes

And it's just important to be aware of the fact that you're not limited to animating just the scale, opacity, or position with numbers, but that you can also animate more complex things like colors with Framer Motion.

Instead of setting a single value to a property such as the `scale`, we can actually also set an array of values. You're creating an array of key frames through which *Framer Motion* will go as it animates this item.

### Imperative Animations

```javascript
const [scope, animate] = useAnimate();
```

The second element, `animate`, will be a function you can use in your code to imperatively trigger a certain animation.

When calling this `animate()` function, you can target *CSS classes*, *HTML elements*

the `scope` is a *ref* as we could create it ourselves with `useRef` that should be connected to a JSX element that's scopes the selector we're setting up here in the animate function.

```javascript
<form id='new-challenge' onSubmit={handleSubmit} ref={scope}>
```

### Orchestrating Multi-Element Animations

**<span style='color: #a8c62c'> /components/ChallengeItem.jsx**

```javascript
<motion.li layout exit={{ y: -30, opacity: 0 }}>
```

if I remove the last item, that still disappears instantly because the  entire ordered list is removed from the DOM.  So `AnimatePresence` has no effect then because this is all removed because it's part of this conditional rendering block.

So what we would have to do here to make sure that the last item also kind of is animated

- we would have to wrap this entire list with `AnimatePresence` as well
- and then convert this ordered list to a *motion ordered list*.

**<span style='color: #875c5c'>IMPORTANT:** whenever you have more than one component, you should add a key to every element here in `AnimatePresence` to help *Framer Motion* tell them apart.

### Combining Animations With Layout Animations

If the list has at least two items, and I view the details of one of these items, you see that it wobbles around strangely like this image gets distorted briefly.

Now we got this strange behavior where everything wobbles around with layout added here because `layout` gets *Framer Motion* to animate layout changes of this list item.

- change in position of one of the item is placed
- change in height of the component; that's what is happening here

**<span style='color: #a8c62c'> /components/ChallengeItem.jsx**

```javascript
<motion.li layout exit={{ y: -30, opacity: 0 }}>
```

A solution to this problem here is to animate this occurrence of this description text. Because if we explicitly animate the appearance of this item, this change in height doesn't occur suddenly and doesn't trigger this layout animation.

we need both `initial` & `animate` to solve this display issue when we expand, and `AnimatePresence` when we hide the description

```javascript
<AnimatePresence>
  {isExpanded && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    >
      <p className='challenge-item-description'>
        {challenge.description}
      </p>
    </motion.div>
  )}
</AnimatePresence>
```

### Animating Shared Elements

for our `<div className="active-tab-indicator" />`  it's technically not one DOM element that moves around, but instead, we have three DOM elements that are added or removed from the DOM depending on which tab is selected. And still, *Framer Motion* has a built-in feature that makes animating use cases like this, with `layoutId` prop.

### Re-triggering Animations via Keys

to animate whenever an element appears on the screen, we could do this with `initial` and `animate` as we did it multiple times before, or actually with just `animate` since we can also **set key frames** to define multiple steps.

You can actually restart this animation, you can reset this component so to say and kind of make *React* think that it just appeared. And you can easily do that from inside `ChallengeTabs` which is where I'm using this `Badge` component, by adding a `key` to it.

**<span style='color: #875c5c'>IMPORTANT:** But in *React*, **even if you're not using Framer Motion**, keys also have another purpose. When you add them on an element and you then change the value that's assigned to the key. For example, because of some state change, *React* will basically destroy the old component instance and render a new one instead.

So you can add that key prop to any component of your choice and change that value then to get React to recreate that component. And that will reset any internal state stored in that component, and also therefore re-trigger any entry animations that should be played.

### Scroll-based Animations

`useTransform` returns the transformed value, it actually wraps this in a so-called motion value object so that it does not re-render this component function every time we scroll, but instead manages this transformed value behind the scenes without causing the component function to re-render. **So that this entire animation does not impact the component render cycle**.

## React Patterns & Best Practices

### Sharing Cross-Components State when working with Compound Components

**<span style='color: #495fcb'> Note:** If we wanted to make sure that such components as `AccordionTitle`, `AccordionContent`, `AccordionItem` could never be used outside of the `Accordion` context, and not be accessed by other components, we would merge all these components in a single file, and be accessed only through `Accordion` component function.

### Adding Search to a React App

our `SearchableList` component works great for searching, but not for outputting the result, and we want it to be usable with all kind of data.

the simple `item.toString()}` we're currently using works fine with *strings* but can't work if we want to display more complex objects such as `PLACES`. That's where **Render props** can help

### Implementing a Search Functionality with help of Render Props

if we want the same **markup** with different text inside of it, `children` must be some sort of **function** to which to which we can pass the item, so that this function will be executed for every item, so the `children` prop is called a function, which haven't done yet, but is allowed, if the result of that function is something that can be rendered, since you're calling it inside a `.jsx`.

```javascript
<li key={index}>{children(item)}</li>
```

### Handling Keys Dynamically

`index` is not a good key, cause it's not directly linked to the data.

As the data received is different you can't hardcode a specific prop.

Instead we need with `props` again and expect to receive as key function, to dynamically generate a key for a specific item.

### Working with Debouncing

in `SearchableList` component, whenever we type something into the input field, so on every keystroke, `setSearchTerm` gets updated, which in turn leads to this component being rendered again, which leads to new search results being produced.

Now for this demo app where we're only dealing with very simple local dummy data, that's not really a big problem, but it could become problematic if with every update, we, for example, needed to send a new HTTP request, or if this filtering logic here would be more complex and more performance intensive.

In such scenarios, executing this entire component function and producing a new derived state on every keystroke in the end, can quickly become inefficient.

Debouncing is a technique where we don't update the state on every keystroke but define a timing threshold, and only update the state if the user stopped typing for a certain time.

And therefore back here in the application, you can see that as I type, as long as I keep on typing, nothing happens. But once I stop typing, the filter is applied.

## Replacing Redux with React Hooks

### Module Introduction

you don't have to replace *Redux*, but the advantage is that you don't have to rely on an external library to your app anymore

### Why would you replace Redux

I use *Redux* in this project because we need to state in two different pages and that would be harder to do with *props* only.

I don't want to pass all the state through multiple layers of components, just so that I have it everywhere where I need it. And Redux is really convenient for such cases, it's a great state management tool when you have some global state.

**<span style='color: #a8c62c'> containers/Products.jsx**

```javascript
const Products = () => {
  const productList = useSelector((state) => state.shop.products);
  // ...
};
```

**<span style='color: #a8c62c'> main.jsx**

```javascript
const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);
```

`state.shop.products`: `shop` is defined in `store/reducers/products.jsx`

for the *toggle* action defined in `store/actions/products.jsx`, we use the `useDispatch()` function

>there's nothing wrong with that approach. You don't need to switch away from *Redux* at all. But maybe you want to. And why would you?

- you want to stay in the *React*-only world, so that you don't need to learn *Redux*.
- you also simply don't want to add that extra Redux and react-redux library to your project. Hence, you would end up with a smaller bundle, because if you don't have these extra libraries included, you then ship less code when you deploy your application Though if you have a really large application, it might not matter that much if it's included or not.
- you simply want to explore how you can manage your state globally without passing everything through props

### Using the Context API

**<span style='color: #a8c62c'> main.jsx**

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </StrictMode>
);
```

So now I'm providing my *context*, and anywhere in this component tree, so in any child component, I can listen to that context.

### Toggling Favorites with the Context API

**<span style='color: #495fcb'> Note:** using that function form to be guaranteed that I'm working with most recent state.

```javascript
const toggleFavorite = productId => {
  setProductsList(currentProdList => { })
}
```

**<span style='color: #a8c62c'> context/product-context.jsx**

```javascript
return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
```

**<span style='color: #875c5c'>IMPORTANT:** we can call this `toggleFav` function and then this function will change something in that file, will change our state and therefore emit a new state, a new value, to all components that are listening.

### Context API Summary (and why NOT to use it instead of Redux)

That means if you have something which changes rarely, let's say the user authentication status or just the example I used in the React Hooks module, that is fine to be covered with the `context` API.

Now, obviously users might not be tapping these buttons every second but still switching the favorite status of something will very likely occur way more often than logging in or changing the theme of a page and therefore I would argue that this is more on the high-frequency side.

**<span style='color: #495fcb'> Notes:**

- the way the react context API works is such that whenever something changes in your context it has no way of cleverly figuring out which component that uses this context really is concerned and which component is not. Which means that every component that uses use context will rebuild, will re-render when you switch something in that context. No matter if it's directly effected or not.
- in general the react context API is simply not optimized and not meant to be your Global State Management tool in your app.
- it's meant for some states, like authentication status, like the theme but not for all your states because of these missing optimizations

### Getting Started with a Custom Hook as a Store

**<span style='color: #a8c62c'> hooks-store/store.jsx**

```javascript
import { useState, useEffect } from 'react';

let globalState = {};

export const useStore = () => {
  const setState = useState(globalState)[1];
// ...
}
```

**<span style='color: #495fcb'> Note:** So I am using the variable `globalState` which is defined outside of my hook, and that's important. **It's defined outside of my hook. So it's global.** It's not recreated when we call `useStore`. It's not created separately for every component that consumes my custom hook.

**<span style='color: #875c5c'>IMPORTANT:** It's not created separately for every component that consumes my custom hook. Instead it will be created once when this file is first imported, basically.

And there after any other file that imports from the same file will all use that same state. And that's one important idea here we'll share data between all files that import from it.

That's something we did before with *custom hooks*. The idea was the opposite that we could share logic but not data now will share logic and data by managing the data outside of the hook because inside of the hook it would not be shared. It would be inclusive to each component. Each component would get it's own data. But managing it outside of the hook every file imports this file or something from that file gets the same shared data.

I'm interested in this `setState` function (`useState(globalState)[1]`) because whenever this function is called the component that uses my custom hook will re render and we'll need this later to re render our components when our state changes.

Now of course it would be great that if a component is unmounted we get rid of its listeners, though. Therefore also use the `useEffect` hook here.

```javascript
 useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
```

<!---
[comment]: it works with text, you can rename it how you want

![image info](./1_sc1.png)

**<span style='color: #875c5c'>IMPORTANT:**
**<span style='color: #495fcb'> Note:**
**<span style='color: #a3842c'>Link:**
**<span style='color: #9e5231'>Error:**

**<span style='color: #a8c62c'> TabButton.jsx**

<ins>text to underline</ins>

--- : horizontal line

| Property    | Description | Default |
| -------- | ------- | ------- |
| view engine  | The default engine extension to use when omitted. NOTE: Sub-apps will inherit the value of this setting.    | |
| views |  A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array. | `process.cwd() + '/views'` |

-->

<!-- markdownlint-enable MD033 -->
<!-- markdownlint-enable MD024 -->