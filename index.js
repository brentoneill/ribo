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
    // .option('-c, --component <component>', 'The component name to create test for, e.g. <Modal /> would be Modal')
    .action(function(component) {
        console.log('Creating enzyme test file for: <%s>', component);
        const componentCaps = component.charAt(0).toUpperCase() + component.slice(1);
        const fileName = `${component}-test.tsx`;
        const contents =
`
import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import ${componentCaps} from '../${componentCaps}';

describe('<${componentCaps} /> component', () => {
    it('should render a div with className .${component}', () => {
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
