# TmUtil

Simple collection of function or wrappers i use for my own projects.

This was originally created for my own projects like TmWindow or TmBox,
but is open to be used by anyone

[Reference can be found here](https://tanuel.gitlab.io/tmutil)

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
```