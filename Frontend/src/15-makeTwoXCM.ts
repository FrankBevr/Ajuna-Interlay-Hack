export function chapter_makeTwoXCM(element: HTMLDivElement) {
  element.innerHTML = `
    <h3>Chapter 15 - Make two XCM Transaction</h3>
    <div class="list">
      <ol>
        <li>Go to PolkadotJsApp</li>
        <li>Go to the extrinsic</li>
        <li>Use the xcm pallet and call the NFT contract</li>
        <li>Use the xcm pallet and call the Flipper contract</li>
        <li>Reproduce it via the polkadotJSApi</li>
        <li>Make a component which shows the output of the call</li>
        <li>Make it clickalbe. If click, show output.</li>
        <li>Include it in the main.ts file.</li>
      </ol>
    </div>
  `
}
