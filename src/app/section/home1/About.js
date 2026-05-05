"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AboutSection;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _CounterUp = _interopRequireDefault(require("../../components/elements/CounterUp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var counters = [{
  value: 25
}];
function AboutSection() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "about-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-column col-xl-8"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sec-title"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "title"
  }, "Our approach is straightforward Prioritizing functionality, speed, and clarity for solutions"), /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "The point of using is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making readable English."), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/page-contact",
    className: "btn-style-one"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-title"
  }, "Contact us"), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "dot-item"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "image tm-gsap-img-parallax"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/resource/about1-1.jpg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "image2"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/resource/about1-2.jpg",
    alt: ""
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-column col-xxl-3 col-xl-4 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/icons/logo.png",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("svg", {
    id: "rotatingText",
    className: "animation__rotateX",
    viewBox: "0 0 188 188",
    width: "188",
    height: "188"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("path", {
    id: "circle",
    d: "M 94, 94 m -69, 0 a 69,69 0 1,0 138,0 a 69,69 0 1,0 -138,0"
  })), /*#__PURE__*/_react.default.createElement("text", null, /*#__PURE__*/_react.default.createElement("textPath", {
    alignmentBaseline: "hanging",
    xlinkHref: "#circle",
    className: "text",
    textLength: "433",
    startOffset: "0"
  }, "About Us . aurex . About Us . aurex . About Us . aurex .")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-counter-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "count-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "count-text"
  }, /*#__PURE__*/_react.default.createElement(_CounterUp.default, {
    end: counters[0].value
  })), "+"), /*#__PURE__*/_react.default.createElement("h5", {
    className: "title"
  }, "Years of experience"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, "Explore how we transform ideas into extraordinary digital experiences"), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/resource/info4.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/resource/info5.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/resource/info6.jpg",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/resource/info7.jpg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("h5", {
    className: "mb-0"
  }, "1200+ happy users review")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "shape-1 bounce-y"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/icons/shape6.png",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "shape-2 tm-gsap-img-parallax"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/assets/images/icons/shape7.png",
    alt: ""
  })));
}