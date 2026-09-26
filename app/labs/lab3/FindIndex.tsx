export default function FindIndex() {
  let numberArray1 = [1, 2, 4, 5, 6];
  let stringArray1 = ["string1", "string3"];
  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  // On your own: there is no 3 in this array, so the index is -1
  const threeIndex = numberArray1.findIndex((a) => a === 3);
  // With AI: a hit at index 4
  const sixIndex = numberArray1.findIndex((a) => a === 6);
  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      fourIndex = {fourIndex}
      <br />
      string3Index = {string3Index}
      <br />
      threeIndex = {threeIndex}
      <br />
      sixIndex = {sixIndex}
      <hr />
    </div>
  );
}
