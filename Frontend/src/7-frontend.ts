export function chapter_frontend(element: HTMLDivElement) {
  element.innerHTML = `
    <h3>Chapter 7 - Frontend</h3>
    1. Create a index.html
    2. Create a div. 
    3. Give the div, the id of app.
    4. Create a typescript. Call it main.ts
    5. Write a function, called mount. It takes the div with id of app and changes the innerHTML as heading 1 "Hello World".
    6. Include main.ts via script tag in your html file.
    7. Serve your html via vite. 
    8. Go to the given localhost
    9. You see Hello World.
    10. Create a style.css
    11. Select your h1 and change the color to red.
    12. Include style.css via link tag to your html. Now you see a red Hello World.
    13. change the inner html to a div with an id of balanceof
    14. Create function which takes a div as an Input and changes the inner html to a heading 1 "Hello Component"
    15. Hurei, now we have our simple compent setup.
  `;
}
