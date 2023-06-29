export function chapter_callContract(element: HTMLDivElement) {
  element.innerHTML = `
    <h3>Call Contract</h3>
    1. Go to PolkadotJsApp 
    2. Go to the extrinsic
    3. Use the xcm pallet and call the contract
    4. Reproduce it via the polkadotJSAPi
    5. Make a component which show the output of the call
    6. Include it in the main.ts file.
  `;
}
