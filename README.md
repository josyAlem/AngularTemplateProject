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
    a)Replace the following in angular.json
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
    OR run the following commands seperately to have the same effect as a and b

1)ng config projects.<project-name>.architect.build.builder @angular-builders/custom-webpack:browser
2)ng config projects.<project-name>.architect.build.options.customWebpackConfig.path custom-webpack.config.js
3)ng config projects.<project-name>.architect.build.options.customWebpackConfig.replaceDuplicatePlugins true
4)ng config projects.<project-name>.architect.serve.builder @angular-builders/custom-webpack:dev-server

### 6. Install tailwindcss

    1)npm i -D tailwindcss@latest
    2)initialize tailwindcss
      npx tailwindcss init
    3)add the following to tailwind config
      content: ["./src/**/*.{html,ts,scss}"],
    4)add the following to stypes.css
      @import "tailwindcss/base";
      @import "tailwindcss/components";
      @import "tailwindcss/utilities";
