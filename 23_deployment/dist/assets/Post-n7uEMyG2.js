import{j as s,u as o}from"./index-DQbbnhtO.js";const n="_item_yt3b0_1",c={item:n};function r({post:t}){return s.jsxs("article",{className:c.item,children:[s.jsx("h1",{children:t.title}),s.jsx("p",{children:t.body})]})}function a(){const t=o();return s.jsx(r,{post:t})}function d({params:t}){const e=t.id;return fetch("https://jsonplaceholder.typicode.com/posts/"+e)}export{a as default,d as loader};
