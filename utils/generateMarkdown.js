
function renderLicenseBadge(license) {
  if (license) {

    return `[![License](https://img.shields.io/badge/License-LICENSE-brightgreen.svg)](https://opensource.org/licenses/LICENSE)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/LICENSE)`;
  }
  return '';
}

function renderLicenseSection(license) {if (license) {
  return `## License

This project is licensed under the terms of the ${license} license. For more details, please see the [${license}](https://opensource.org/licenses/${license}) file.`;
}
return '';}


function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [${data.license ? 'License' : ''}](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseBadge}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or additional information, you can reach me on [GitHub](https://github.com/${data.github}) or email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
