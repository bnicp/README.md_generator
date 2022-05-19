// function that returns a license badge
// no license returns an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }
  if (license === "ISC") {
    return `[!License: ISC.](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  if (license === "MIT") {
    return `![License: MIT.](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license === "Mozilla") {
    return `![License: MPL 2.0.](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  if (license === "GNU GPL v3") {
    return `![License: GPL v3.](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
};

// function that returns the license link
// no license returns an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }
  if (license == "MIT") {
    return "MIT: https://opensource.org/licenses/MIT";
  }
  if (license == "GNU GPL v3") {
    return "GNU GPL v3: https://www.gnu.org/licenses/gpl-3.0.en.html";
  }
  if (license == "ISC") {
    return "ISC: https://opensource.org/licenses/ISC";
  }
  if (license === "Mozilla") {
    return `Mozilla Public: https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`;
  }
};

module.exports = {renderLicenseBadge, renderLicenseLink};
