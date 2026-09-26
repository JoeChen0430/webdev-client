import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      {/* On your own (2.1.1): green background, yellow foreground */}
      <p
        id="wd-your-style-attr"
        style={{ backgroundColor: "green", color: "yellow" }}
      >
        This paragraph still uses the style attribute: a green background with
        yellow text, written in camelCase.
      </p>
      {/* With AI (2.1.1): sample purple on white */}
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        A sample paragraph styled with the style attribute: purple background,
        white text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        {/* On your own (2.1.3) */}
        <p id="wd-id-selector-3">
          A third paragraph with its own id and its own teal color scheme.
        </p>
        {/* With AI (2.1.3) */}
        <p id="wd-ai-id-selector">
          A sample fourth paragraph selected by id, styled indigo on white.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        {/* On your own (2.1.4): one class shared by a p and an h4 */}
        <p className="wd-your-class">
          This paragraph and the heading below share my own class.
        </p>
        <h4 className="wd-your-class">
          Same class, different tag, identical look
        </h4>
        {/* With AI (2.1.4): sample class on a p and an h4 */}
        <p className="wd-ai-class-selector">
          A sample class applied to this paragraph and the heading below.
        </p>
        <h4 className="wd-ai-class-selector">Sample class on a heading</h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              {/* On your own (2.1.5): direct child of .wd-selector-3 */}
              <span className="wd-your-selector-5">
                This span is mine, matched only as a direct child of
                .wd-selector-3
              </span>
              <br />
              {/* With AI (2.1.5): descendant at any depth */}
              <span className="wd-ai-selector-5">
                This sample span is matched as a descendant of .wd-selector-1
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade" className="wd-cascade-demo">
        <h3>Cascade and specificity</h3>
        {/* With AI (2.1.6): tag green, class yellow, id red - the ID wins */}
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Three rules set a background on this paragraph: a tag rule (green), a
          class rule (yellow), and an id rule (red). The ID selector is the most
          specific, so this renders red.
        </p>
        {/* On your own (2.1.6): my own conflict, id wins again */}
        <p id="wd-your-cascade" className="wd-your-cascade">
          My own conflict: the class rule says orange, the id rule says indigo.
          The id wins.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
