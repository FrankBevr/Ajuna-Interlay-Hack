import "./style.css";
import { chapter_talismann } from "./1-talisman.ts";
import { chapter_substrate } from "./2-substrate.ts";
import { chapter_polkadotJsApp } from "./3-polkadotJsApp.ts";
import { chapter_polkadotJsAppSimple } from "./4-polkadotJsSimple.ts";
import { chapter_acquireUnderstanding } from "./5-acquireUnderstanding.ts";
import { chapter_polkadotJsAdvanced } from "./6-polkadotJsAdvanced.ts";
import { chapter_frontend } from "./7-frontend.ts";

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

    <br>
    <div id="chapter-1"></div>

    <div id="chapter-2"></div>

    <div id="chapter-3"></div>

    <div id="chapter-4"></div>

    <div id="chapter-5"></div>

    <div id="chapter-6"></div>

    <div id="chapter-7"></div>
`;

chapter_talismann(document.querySelector("#chapter-1")!);
chapter_substrate(document.querySelector("#chapter-2")!);
chapter_polkadotJsApp(document.querySelector("#chapter-3")!);
chapter_polkadotJsAppSimple(document.querySelector("#chapter-4")!);
chapter_acquireUnderstanding(document.querySelector("#chapter-5")!);
chapter_polkadotJsAdvanced(document.querySelector("#chapter-6")!);
chapter_frontend(document.querySelector("#chapter-7")!);
