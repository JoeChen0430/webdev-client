export default function ArrayIndexAndLength() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);
  // On your own: a value that is not in the array
  const missingIndex = numberArray1.indexOf(9);
  // With AI: a hit at index 0
  const indexOf1 = numberArray1.indexOf(1);
  return (
    <div id="wd-array-index-and-length">
      <h4>Array index and length</h4>
      length1 = {length1}
      <br />
      index1 = {index1}
      <br />
      indexOf(9) = {missingIndex}
      <br />
      indexOf1 = {indexOf1}
      <hr />
    </div>
  );
}
