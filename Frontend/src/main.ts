import "./style.css";
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <h1 style="text-decoration: underline;">Cross Chain Referal Program</h1>
    <h2>Buy one,<br> get one for Free</h2>
    <div class="container">
      <img src="/buyOne.jpg"/>
        <button class="astar">Buy NFT on Astar</button>
    </div>

    <br>

    <div class="container">
      <button class="moonbeam">Get 1 Free on Moonbeam</button>
      <img src="/buyOne.jpg"/>
    </div>

    <br>


    <div class="container">
      <img src="/wow.jpg"/>
      <button style="">Wow, <br> explain me whats happening</button>
    </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
