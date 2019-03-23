[![Powered by Tanuel](https://img.shields.io/badge/Powered%20by-Tanuel-b22.svg)](https://gitlab.com/Tanuel)
[![npm](https://img.shields.io/npm/dt/tmutil.svg?logo=npm)](https://www.npmjs.com/package/tmutil)
[![Build Pipeline](https://gitlab.com/Tanuel/tmutil/badges/master/pipeline.svg)](https://gitlab.com/Tanuel/tmutil/pipelines)

# TmUtil

Simple collection of function or wrappers i use for my own projects.

This was originally created for my own projects like TmWindow or TmBox,
but is open to be used by anyone

[Reference can be found here](https://tanuel.gitlab.io/tmutil/globals.html)

## Installing

    #yarn
    yarn add tmutil
    
    #npm
    npm install tmutil
    
## Usage (TypeScript)

```TypeScript
//clear currently selected text
import {clearSelection} from "tmutil";
clearSelection();

//create a dom element with properties
import {create} from "tmutil";
const myDiv = create<"div">("div", {
    className: "myClass",
    id: "myId",
    style: {
        width: "100px",
        height: "100px"
    }
});

// loop over an object
import {each} from "tmutil"
const obj = {k1: "v1", k2: "v2"};
each(obj, (key, value) => {
    // do something with key and value
});
```