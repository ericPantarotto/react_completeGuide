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

<!---
[comment]: it works with text, you can rename it how you want

![image info](./1_sc1.png)

**<span style='color:   #875c5c'>IMPORTANT:**
**<span style='color: #495fcb'> Note:**
**<span style='color: #a3842c'>Link:**

<ins>text to underline</ins>

--- : horizontal line

| Property    | Description | Default |
| -------- | ------- | ------- |
| view engine  | The default engine extension to use when omitted. NOTE: Sub-apps will inherit the value of this setting.    | |
| views |  A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array. | `process.cwd() + '/views'` |

-->

