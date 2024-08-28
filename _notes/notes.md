<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD024 -->
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

Even though we're setting a default value in our `CartContext` context provider component, **you also must add a `value` prop **.

**<span style='color: #495fcb'> Note:** The default value set when creating the context is only used if a component that was not wrapped by the provider component tries to access the context value.

we set the default value is just helpful to get the auto-completion.

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
<!-- markdownlint-enable MD024 -->