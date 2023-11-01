# can-parse-csv

This is a simple example of how to parse a CSV file in js. It uses the [csv-parse](https://www.npmjs.com/package/csv-parse) package. It also uses vite to demonstrate how to build 3p npm packages into a project.

**Note: Projects that use vite will not use vscode's Live Server. Read below for how to use such a project in case it's your first use of npm**

# NodeJS and NPM

1. Install [NodeJS](https://nodejs.org/en/download/)
1. open this folder in vscode
1. open a terminal (to this folder, such that when you run `ls` you see this README.md file, but more importantly, you see a `package.json` file)
1. run `npm i` which is short for `npm install` to install the dependencies that are listed in the package.json file (and recursively, any of their dependencies).
1. run `npm run dev` to start the vite server. This will open a browser window with the app running. You can also open the browser manually and navigate to the url that is printed in the terminal.