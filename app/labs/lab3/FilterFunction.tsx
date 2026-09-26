export default function FilterFunction() {
  let numberArray1 = [1, 2, 4, 5, 6];
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  // On your own: greater than or equal to 5
  const numbersGreaterOrEqual5 = numberArray1.filter((a) => a >= 5);
  // With AI: sample less-than-2 filter
  const numbersLessThan2 = numberArray1.filter((a) => a < 2);
  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2}
      <br />
      evenNumbers = {evenNumbers}
      <br />
      oddNumbers = {oddNumbers}
      <br />
      numbersGreaterOrEqual5 = {numbersGreaterOrEqual5}
      <br />
      numbersLessThan2 = {numbersLessThan2}
      <hr />
    </div>
  );
}
