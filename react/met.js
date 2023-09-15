import * as React from "react";
const SvgMet = (props) => /* @__PURE__ */ React.createElement("svg", { id: "met-Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "123px", height: "123px", viewBox: "0 0 123 123", enableBackground: "new 0 0 123 123", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "met-image0", width: 123, height: 123, x: 0, y: 0, href: "data:image/png;base64,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" }));
export default SvgMet;
