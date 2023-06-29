export function chapter_thinkMore(element: HTMLDivElement) {
  element.innerHTML = `
    <h3>Chapter 16 - Think more</h3>
    <div class="list">
      <p>
      Ok now we know some stuff. </br>
      So the question remains. </br>
      How do I make a button?</br> 
      It should allow you to buy an NFT. </br>
      And you get another Asset for free on another chain.</br>
      XCM feels like a promising way to achieve it.</br>
      But I mostly likely I need to add the logic in the contract</br>
      That scream like chain extenstension or Moonbeams precompiled</br>
      </br>
      To make "buy one get two" work.<br>
      I would do suggest a offchain way would be the best.
      </p>
    </div>
    <div class="list">
      <ol>
        <li>Create an NFT on Astar</li>
        <li>Create an NFT on Moonbeam</li>
        <li>Create a Wallet on Moonbeam</li>
        <li>If buy Astar NFT, Wallet adds Address to a claim function</li>
        <li>Person has to claim NFT</li>
        <li>Increase UX by adding logic</li>
        <li>Logic: If NFT is minted on Astar, claim NFT on Moonbeam</li>
      </ol>
    </div>
  `
}
