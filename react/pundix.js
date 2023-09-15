import * as React from "react";
const SvgPundix = (props) => /* @__PURE__ */ React.createElement("svg", { id: "pundix-Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "64px", viewBox: "0 0 64 64", enableBackground: "new 0 0 64 64", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "pundix-image0", width: 64, height: 64, x: 0, y: 0, href: "data:image/png;base64,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 a2EAAAAASUVORK5CYII=" }));
export default SvgPundix;
