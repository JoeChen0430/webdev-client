export default function OptionalChaining() {
  const house = {
    bedrooms: 4,
    address: {
      street: "Via Roma",
      city: "Roma",
    },
  } as {
    bedrooms: number;
    address?: { street: string; city: string; zip?: string };
    garage?: { cars: number };
  };
  const missing = undefined as { prop?: string } | undefined;
  return (
    <div id="wd-optional-chaining">
      <h4>Optional Chaining</h4>
      house.address?.city = {house.address?.city}
      <br />
      missing?.prop ?? &quot;n/a&quot; = {missing?.prop ?? "n/a"}
      <br />
      {/* On your own: there is no garage, so the fallback appears */}
      house.garage?.cars ?? 0 = {house.garage?.cars ?? 0}
      <br />
      {/* With AI: missing zip uses the fallback */}
      house.address?.zip ?? &quot;unknown&quot; = {house.address?.zip ?? "unknown"}
      <hr />
    </div>
  );
}
