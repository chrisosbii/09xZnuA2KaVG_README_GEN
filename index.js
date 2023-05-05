const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        message: 'Please add a description of your project that explains what it does, why you made it, and how it works',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please add any installation instructions that a user would have to follow to run the project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please add steps so that a user can utilze the project',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please add any licenses here',
        name: 'license',
        choices: ['none', 'Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'BSD 3-Clause', 'CC0', 'Attribute 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the Fuck You Want to Public License', 'The zlib/libpng License']
    },
    {
        type: 'input',
        message: 'Please add anyone who contributed to your project',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Please add any tests that where created',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please add any questions, next steps, or bugs and issues you would like the reader to know about',
        name: 'questions'
    }
]).then((data) => {
    // set the filename here
    const filename = `README.md`;
    console.log(input);
    // validate input was good

    // make the readme file output
    var output = makeReadMe(data);
    console.log(output);     
    // write output to file
    // create new output directory if not here
    fs.mkdir('./output', { recursive: true }, (err) => {
        if (err) throw err;
    });
    // write to output folder the README.md file
    fs.writeFile(`./output/${filename}`, output, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});

/**
 * Takes in a string representing chosen license and outputs the respective badge used in markdown
 * @param {String} licenseType 
 * @returns 
 */
function licenseMap(licenseType){
    switch(licenseType) {
        case 'none':
            return "";   
        case 'Apache 2.0':
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case 'Boost 1.0':
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case 'BSD 3-Clause':
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case 'BSD 3-Clause':
            return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        case 'CC0':
            return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
        case 'Attribute 4.0 International':
            return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
        case 'Attribution-ShareAlike 4.0 International':
            return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
        case 'Attribution-NonCommercial 4.0 International':
            return "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
        case 'Attribution-NoDerivates 4.0 International':
            return "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
        case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
            return "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
        case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
            return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
        case 'Eclipse Public License 1.0':
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        case 'GNU GPL v3':
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case 'GNU GPL v2':
            return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        case 'GNU AGPL v3':
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case 'GNU LGPL v3':
            return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        case 'GNU FDL v1.3':
            return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
        case 'The Hippocratic License 2.1':
            return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
        case 'The Hippocratic License 3.0':
            return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
        case 'IBM Public License Version 1.0':
            return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        case 'ISC License (ISC)':
            return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        case 'The MIT License':
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case 'Mozilla Public License 2.0':
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        case 'Attribution License (BY)':
            return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
        case 'Open Database License (ODbL)':
            return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
        case 'Public Domain Dedication and License (PDDL)':
            return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
        case 'The Perl License':
            return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        case 'The Artistic License 2.0':
            return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        case 'SIL Open Font License 1.1':
            return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
        case 'The Unlicense':
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        case 'The Do What the Fuck You Want to Public License':
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        case 'The zlib/libpng License':
            return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
    }
}

/**
 * 
 * @param {[title, description, installation, usage, license, credits, tests, questions]} input 
 * @returns 
 */
function makeReadMe(input){
    return `# ${input.title}

    ## Description
    
    ${input.description}
    
    ## Table of Contents
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    
    ${input.installation}
    
    ## Usage
    
    ${input.usage}
    
    ## Credits
    
    ${input.credits}
    
    ## License
    
    ${licenseMap(input.license)}
    
    ## Tests
    
    ${input.tests}
    
    ## Questions
    
    ${input.questions}`
}