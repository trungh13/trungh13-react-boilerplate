# trungh13-react-boilerplate
I made the boilerplate for making my own ReactJS application. The boilerplate will update by times when Application-base need to be more mature by times.

trungh13-react-boilerplate was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**You’ll need to have Node >= 6 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### Installing

A step by step series of examples that tell you how to get a development env running

```
git clone https://github.com/trungh13/trungh13-react-boilerplate.git

cd trungh13-react-boilerplate

npm install
```
### Using
First of all, you need to change the package.json.
From :
```
  "name": "trungh13-react-boilerplate",
```
To:
```
  "name": "your-project-name",
```
## 

## Version
### v0.1 create-react-app & install css-modules
* initial boilerplate bootstrap by create-react-app
* npm eject and modify files to use css-modules ([link to instruction](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2))
### v0.2 No more eject.

* Take `css-module` out, so no more eject.
* Change from `npm` to `yarn`. As `package-lock.json` automatic upgrade modules without permission.
* Add `.gitattributes` to automatic change into LF as Windows, Mac, Unix users have different lifebreaks setting.
* Upgrade `.eslintrc.json` and move into `src` folder as only need to add linter into this folder.
* Add `store/action` folders to seperate actions
* Added new modules into this version:
   1. csslint : CSS Linter 
   2. redux-form: Ready to use Redux for Form.
   3. redux-thunk: Write action creators that return a function instead of an action
   
---
©2018 Trung Hoang. Visit me on <a href="https://github.com/trungh13/">Github :octocat:</a> 