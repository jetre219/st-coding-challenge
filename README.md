# Shop Token coding challenge

[![Shop Token coding challenge workflow](https://github.com/jetre219/st-coding-challenge/actions/workflows/workflow.yml/badge.svg)](https://github.com/jetre219/st-coding-challenge/actions/workflows/workflow.yml)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## First setup

Build scripts use node; it is a good practice to use nvm to manage node versions:

- Install or update nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
- Install project's node version: `nvm install v12.18.3`
- Use the project's version of node: `nvm use`

Once this is done, you can install all dependencies using yarn

- Run `yarn` or `yarn install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner with coverage.\
Will fail if a test fails or if 100% coverage is not met

### `yarn lint`

Run lint and prettier on all files in the src folder.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## State of the app

Right now, as asked in the coding challenge documentation, you'll be able to find the `sortCategoriesForInsert` function in `./src/service/sortCategoriesForInstert.ts`.
I also have included in the code three basic trees that can be used and displayed in the app.
When you'll start the app, you'll fall on a single page application that is used to display a three as defined in the coding challenge.
You can select one of the three trees that are included in this project, or input your JSON in the text area.
Please note that it only supports valid JSON string.

## Thoughts on what could be done next

Since this coding challenge was a limited time challenge, some shortcuts have been taken, and a lot of things could be done in order to increase the quality of the project.
Here are some of them:

### Setup and write visual regression and end-to-end tests

For now, there's only unit test in the repo. Of course, they cover most of the app functionnality, but they lack UI verification.
Some visual regression tests would ensure that the visual rendering of our components is always like what we think.
It would provide a visual way to document our components, but would also make sure that it fits our standards.

Some end-to-end tests would ensure that all the functionalities still work from a user perspective.
By booting the app and making various actions while expecting results, we would make sur that a user will always have the desired experience.

### Deploy the application continuously

Of course the code has no value if it's never shipped to a customer.
By adding scripts and running them using Github Actions, we would ensure that our customer always have the latests version.

### Use CSS libraries

For now CSS is only included in files and is not shared at all.
By using some libraries, we could define some theme, and some design tokens in order to enhance the scalability of our app design.
Also, we could use some already designed component in order to speed up development and avoid re-inventing the wheel.

### Setup navigation in the app

Of course, since there's only one page in this app, navigation was not necessary.
But, in case of a multiple app application, we would need to setup navigation

### Add some logging and production monitoring

Right now there's no logging and no production monitoring.
This is an important part of an application when you send it to production.

### Others

- Improve repository quality by linting other files like yml, md, json, etc.
- Automatise quality gates, like sending message on CI failure, lint commit name, create release on github when deploying
- Improve repository quality by protecting master branch, making CI workflows mandatory, etc.
- Support JSON file
- Enhance error catching and display error message
- And so much more...
