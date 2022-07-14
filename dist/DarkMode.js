"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DarkMode;

var _react = _interopRequireDefault(require("react"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DarkMode() {
  const setDark = () => {
    // 2
    localStorage.setItem("theme", "dark"); // 3

    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }; // 4


  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultDark = storedTheme === "dark" || storedTheme === null && prefersDark;

  if (defaultDark) {
    setDark();
  } // 5


  const toggleTheme = e => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-theme-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\uD83D\uDD06"), /*#__PURE__*/_react.default.createElement("label", {
    className: "toggle-theme",
    htmlFor: "checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "checkbox" // 6
    ,
    onChange: toggleTheme,
    defaultChecked: defaultDark
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider round"
  })), /*#__PURE__*/_react.default.createElement("span", null, "\uD83C\uDF19"));
}