1. open terminal and run command "make"
2. open package.json and edit file
    - add "start" and "dev" in "scripts" like this
        "scripts": {
            "start": "node index.js",
            "dev": "nodemon server"
        },
    - add "engines" like this
        "engines": {
            "node": "14.16.0"
        }

#### For example
```
{
    "name": "nodejs-template",
    "version": "1.0.0",
    "description": "Clean Architecture with Node.js API Template",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js",
        "dev": "nodemon server"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.18.1"
    },
    "engines": {
        "node": "14.16.0"
    }
}
```
