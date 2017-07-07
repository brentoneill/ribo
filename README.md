# ribo
Super basic CLI tool that spits out enzyme test file boilerplate for use with React.


> Enzymes are a type of protein, and like other proteins, they are made by the translation of the genetic code into a particular sequence of amino acids by *ribo*somes


## Installation
`ribo` should be intalled as a global package so that you can use it whereever you need it.

To install `ribo` globally, run:

`npm install -g ribo`

## Usage
`ribo` is incredibly simple to use.

Just type `ribo <componentName>` and ribo will spit out an enzyme test file (Just `.tsx` as of now).

## Help
```
  Usage: ribo [options] <component>

  Options:

    -h, --help                   output usage information
    -e, --extension <extension>  changes the default extension from .tsx to whatever extension you desire, e.g. -e ts
    -s, --sinon                  imports sinon as a dependency
    -m, --mount                  imports the mount method from enzyme
    -r, --render                 imports the render(static HTML render) from enzyme
 ```
