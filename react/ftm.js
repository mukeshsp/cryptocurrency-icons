import * as React from "react";
const SvgFtm = (props) => /* @__PURE__ */ React.createElement("svg", { id: "ftm-Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "123px", height: "123px", viewBox: "0 0 123 123", enableBackground: "new 0 0 123 123", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "ftm-image0", width: 123, height: 123, x: 0, y: 0, href: "data:image/png;base64,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 AAAASUVORK5CYII=" }));
export default SvgFtm;
