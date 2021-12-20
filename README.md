# Angular Template Project

## Packages in template

### 1. Shared Components

    chckout README.md on app/shared

### 2. Fake Backend

    a. For quick set up
      npm install json-server
    b. For extended http service use
      npm install angular-in-memory-web-api

### 3. Server to run app in production

    npm install http-server

### 4. To create scripts in package json

    refering scripts already created requires using 'run-s' , install np-run-all pkg

### 5. To create custom webpack config

    npm i -D @angular-builders/custom-webpack@<angular_cli_version_of_project>
    a)Replace the following in agular.json
      "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
           "options": {
            "customWebpackConfig": {
              "path": "./custom-webpack.config.js",
              "replaceDuplicatePlugins":true
            },
            "outputPath":"dist",
            .....
           }.....
      "serve": {
          "builder": "@angular-builders/custom-webpack:dev-server",
          .....
    b)Add your custom config on "./custom-webpack.config.js"
