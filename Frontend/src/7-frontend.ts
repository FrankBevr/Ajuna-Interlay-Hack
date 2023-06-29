export function chapter_frontend(element: HTMLDivElement) {
  element.innerHTML = `
    <h3>Chapter 7 - Frontend</h3>
    <div class="list">
      <ol>
        <li>Create a index.html</li>
        <li>Create a div.</li>
        <li>Give the div, the id of app.</li>
        <li>Create a typescript. Call it main.ts</li>
        <li>Write a function, called mount. </li>
        <li>It takes a div with id of app and changes the innerHTML</li>
        <li>The inner HTML is "Hello World"</li>
        <li>Include main.ts via script tag in your html file.</li>
        <li>Serve your html via vite.</li>
        <li>Go to the given localhost</li>
        <li>You see Hello World.</li>
        <li>Create a style.css</li>
        <li>Select your h1 and change the color to red.</li>
        <li>Include style.css via link tag to your html.</li>
        <li>Change the inner html to a div with an id of balanceof</li>
        <li>Create function which takes a div as an Input</li>
        <li>It changes the inner html. Its should be now "Hello Component"</li>
        <li>Hurei, now we have our simple compoent setup.</li>
      </ol>
    </div>
  `;
}
