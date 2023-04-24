// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { "The MIT License", "The GPL License", "Apache License", "GNU License"
  let userLicense = '';
  if (license === "MIT") {
    userLicense += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === "GPLv3") {
    userLicense += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (license === "Apache") {
    userLicense += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === "Perl") {
    userLicense += '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
  } else if (license === "N/A") {
    userLicense = '';
  }

  return userLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let userLicense = '';
  if (license === "MIT") {
    userLicense += '(https://opensource.org/licenses/MIT)'
  } else if (license === "GPLv3") {
    userLicense += '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === "Apache") {
    userLicense += '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "Perl") {
    userLicense += '(https://opensource.org/licenses/Artistic-2.0)'
  } else if (license === "N/A") {
    userLicense = '';
  }

  return userLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseTitle = "";
  if (license !== "N/A") {
    licenseTitle += "## License";
  } else {
    licenseTitle = "";
  }

  return licenseTitle;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

            ## Description
            
            ${data.description}
            
            ## Table of Contents
            
            - [Installation](#installation)
            - [Usage](#usage)
            - [Contributions](#contributions)
            - [License](#license)
            
            ## Installation

            ${data.installation}
            
            ## Usage
            
            ${data.usage}

            ## Contributions
            
            ${data.contribution}
            
            ${renderLicenseSection(data.license)}
            
            ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

            ## Questions
            
            - Github: https://github.com/${data.github}
            - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
