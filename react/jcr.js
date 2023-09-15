import * as React from "react";
const SvgJcr = (props) => /* @__PURE__ */ React.createElement("svg", { width: 128, height: 128, viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...props }, /* @__PURE__ */ React.createElement("rect", { width: 128, height: 128, fill: "url(#jcr-pattern0)" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id: "jcr-pattern0", patternContentUnits: "objectBoundingBox", width: 1, height: 1 }, /* @__PURE__ */ React.createElement("use", { xlinkHref: "#jcr-image0_1_26", transform: "scale(0.0078125)" })), /* @__PURE__ */ React.createElement("image", { id: "jcr-image0_1_26", width: 128, height: 128, xlinkHref: "data:image/png;base64,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" })));
export default SvgJcr;
