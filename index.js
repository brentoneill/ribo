#!/usr/bin/env node --harmony
// Tell what env to run this in

// Bring in deps
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const fs = require('fs');

// Start the actual work

// Tell the user that something is happening
console.log('Ribo is preparing to translate genetic code...');

// Set up the args/options
program
    .arguments('<component>')
    .option('-e, --extension <extension>', 'changes the default extension from .tsx to whatever extension you desire, e.g. -e ts')
    .option('-s, --sinon', 'imports sinon as a dependency')
    .option('-m, --mount', 'imports the mount method from enzyme')
    .option('-r, --render', 'imports the render(static HTML render) from enzyme')
    .action(function(component) {
        console.log('Creating enzyme test file for: <%s />', component);

        let componentCaps = component;
        componentCaps = componentCaps.charAt(0).toUpperCase() + componentCaps.slice(1);
        component = componentCaps.charAt(0).toLowerCase() + componentCaps.slice(1);

        // args
        const extension = program.extension ? program.extension : 'tsx';
        const sinon = program.sinon ? `import * as sinon from 'sinon'` : '';
        const mount = program.mount ? ', mount' : '';
        const render = program.render ? ', render': '';


        const fileName = `${componentCaps}-test.${extension}`;
        const contents = `import * as React from 'react';
${sinon}
import { shallow${mount}${render} } from 'enzyme';
import ${componentCaps} from '../${componentCaps}';

describe('<${componentCaps} /> component', () => {
    it('should render a div with className .${componentCaps}', () => {
        const ${component} = shallow(<${component} />);
        expect(${component}.find('div.${componentCaps}').length).toBe(1);
    });
});
`;

        fs.writeFile(fileName, contents, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log('File created: ', fileName);
        })
    })
    .parse(process.argv);
