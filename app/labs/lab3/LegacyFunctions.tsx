function add(a: number, b: number) {
  return a + b;
}

// On your own: a subtract function
function subtract(a: number, b: number) {
  return a - b;
}

// With AI: sample multiply function
function multiply(a: number, b: number) {
  return a * b;
}

export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  const nineMinusFour = subtract(9, 4);
  const threeTimesSeven = multiply(3, 7);
  console.log(threeTimesSeven);
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <br />
      nineMinusFour = {nineMinusFour}
      <br />
      subtract(9, 4) = {subtract(9, 4)}
      <br />
      threeTimesSeven = {threeTimesSeven}
      <br />
      multiply(3, 7) = {multiply(3, 7)}
      <hr />
    </div>
  );
}
