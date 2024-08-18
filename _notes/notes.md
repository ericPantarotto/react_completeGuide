<!-- markdownlint-disable MD033 -->
# React - The Complete Guide 2024 (incl. Next.js, Redux)

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

**<span style='color: #495fcb'> Note:** *Vite*, *create-react-app, ... , give you such a build process (no custom setup or tweaking neede)

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

```js
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

<!---
[comment]: it works with text, you can rename it how you want

![image info](./1_sc1.png)

**<span style='color: #875c5c'>IMPORTANT:**
**<span style='color: #495fcb'> Note:**
**<span style='color: #a3842c'>Link:**

**<span style='color: #a8c62c'> TabButton.jsx**,

<ins>text to underline</ins>

--- : horizontal line

| Property    | Description | Default |
| -------- | ------- | ------- |
| view engine  | The default engine extension to use when omitted. NOTE: Sub-apps will inherit the value of this setting.    | |
| views |  A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array. | `process.cwd() + '/views'` |

-->

<!-- markdownlint-enable MD033 -->