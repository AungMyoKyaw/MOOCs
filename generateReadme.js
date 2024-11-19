const fs = require('fs');

// Load input JSON and output README paths
const inputPath = './moocsData.json';
const outputPath = './README.md';

// Read the input JSON
const inputData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

// Generate README content
const generateReadme = (data) => {
    let readmeContent = `
---
markmap:
  colorFreezeLevel: 3
  autoFit: true
  embedAssets: true
  pan: false
  zoom: false
---

# [Aung Myo Kyaw](https://www.aungmyokyaw.com)

<div>
  <a href="https://moocs.aungmyokyaw.com">
    <img src="https://img.shields.io/badge/MOOCs-0077B5?style=for-the-badge&logo=coursera&logoColor=white">
  </a>
</div>

<p align="center">
  <a href="https://moocs.aungmyokyaw.com">
    <img src="./assets/screenshot.png" alt="Aung Myo Kyaw | MOOCs">
  </a>
</p>

## [MOOCs](${data.moreLink})

`;

    data.items.forEach((item) => {
        if (item.type === 'Course') {
            // Single course
            readmeContent += `### [${item.courseTitle}](${item.certificateLink})\n\n`;
        } else if (item.type === 'Bundle') {
            // Bundle with sub-courses
            readmeContent += `### [${item.courseTitle}](${item.certificateLink})\n\n`;
            item.courses.forEach((subCourse) => {
                readmeContent += `- [${subCourse.title}](${subCourse.certificateLink})\n`;
            });
            readmeContent += '\n';
        }
    });

    return readmeContent.trim();
};

// Generate and save the README content
const readmeContent = generateReadme(inputData);
fs.writeFileSync(outputPath, readmeContent);

console.log(`README.md has been successfully generated at ${outputPath}`);
