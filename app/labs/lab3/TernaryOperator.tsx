export default function TernaryOperator() {
  let loggedIn = true;
  // With AI: sample premium flag
  const premium = false;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {premium ? <p>Premium</p> : <p>Free</p>}
      <hr />
    </div>
  );
}
