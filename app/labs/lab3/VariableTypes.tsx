export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  // On your own: a second string and a second number
  let myCity = "Taipei";
  let myLuckyNumber = 7;
  let isMyCityString = typeof myCity;
  let isMyLuckyNumberNumber = typeof myLuckyNumber;
  // With AI: sample string and number
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      myCity = {myCity}, typeof = {isMyCityString}
      <br />
      myLuckyNumber = {myLuckyNumber}, typeof = {isMyLuckyNumberNumber}
      <br />
      sampleCount = {sampleCount}, typeof = {typeof sampleCount}
      <br />
      sampleLabel = {sampleLabel}, typeof = {typeof sampleLabel}
      <hr />
    </div>
  );
}
