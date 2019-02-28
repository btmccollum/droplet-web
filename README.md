# README

Droplet is a work-in-progress. More to come in the future!

At this point in time you can expect the following functionality:<br>
* A user is able to create an account and link their existing Reddit account (or create a new one)
* A user is able to log in and log out successfully
* Ability to browse the 100 most popular subreddits at load time and add them to your personalized feed
* Ability to browse the 100 top posts from your personalized feed
* Ability to open any given post from Reddit and view up to the 100 most recent comments

Droplet-api is the backend repo for the Droplet web app. To access the React/Redux frontend, droplet-web, please [click here](https://github.com/btmccollum/droplet-web).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start:
1) You'll need to clone both the front and backend repos:
```
git clone git@github.com:btmccollum/droplet-web.git
git clone git@github.com:btmccollum/droplet-api.git
```

2) Navigate into the droplet-api file and run:
```
bundle install
```

3) From the droplet-api file:
```
rake db:migrate
```

4) Start the server for the backend using:
```
thin start --ssl
```

5) Navigate into the droplet-web file and run:
```
npm install
```

6) Start the server for the droplet-web frontend using:
```
npm start
```

7) Enjoy!

### NOTES: 
* You may need to manually visit (https://localhost:3000) to provide SSL authorization

* If the frontend is not loaded on port 3001 you will need to adjust the following files to point to the correct page: 
```
config/initializers/cors.rb
controllers/api/v1/users/omnniauth_callbacks_controller.rb
```

## Built With
* React.js
* Redux.js
* JavaScript
## Authors
* Brad McCollum
## License
This project is licensed under the MIT License - see the LICENSE.md file for details
## Acknowledgments
* Flatiron and their help!
* Anyone who has helped inspire and motivate me

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
