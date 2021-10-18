const path = require("path");
import {uglify} from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

export default {
    "input": path.resolve(
        __dirname,
        "./src/original.js"
    ),
    "output": {
        "file": path.resolve(
            __dirname,
            "./dist/dz-emitter.js"
        ),
        "format": "umd",
        "name": "dzEmitter",
        "sourcemap": true
    },
    "plugins": [
        uglify(),
        babel({"exclude": "node_modules/**"})
    ]
};
