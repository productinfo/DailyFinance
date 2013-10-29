# DailyFinance

DailyFinance is a end to end web application to let people easily save the each single expense they spent any where any time throgh any devices, all you need is web connection.

## Run the app

##### Pre-required
You need to have those tools installed first before you go to next step.

* [node.js](http://nodejs.org)
* [npm](http://npmjs.org)
* [bower](http://bower.io)
* [grunt](http://gruntjs.com)
* [mongoDB](http://www.mongodb.org)

To run the application **you need to have the mongoDB running on the local or remote machine**, to set up mongoDB please follow instruction on offical website, after database start to run, all you need to do is to specify the mongoDB url in the [config file](https://github.com/LeoAJ/DailyFinance/blob/master/config/config.json#L5), otherwise the code will broken and will not be able to run. After all those set up, please do.

```
npm install
bower install
grunt server
```

### Check the code quality
This will run jshint and jsbeautifier automatically.

```
grunt
```

### Test
Run karma unit testing.

```
grunt test
```

## Database (MongoDB)

## RESTful API

## Server

### Client
* Use [AngularJS](http://angularjs.org) as main javascript framework to build the MVC structure of UI.
* Use [Bootstrap 3](http://getbootstrap.com) as main css framework to automatically adjust layout in different devices such as mobile, tablet and laptop.

## Grunt libraries

* watch
* express
* open
* compass