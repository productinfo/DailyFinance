# [DailyFinance](http://leoj.net)

DailyFinance is a end to end web application for people easily to save the each single expense they spent any where any time through any devices, all you need is web connection. 

Entire web app built with Node.js, Express, MongoDB, AngularJS, Bootstrap and RESTful API.

## Run the app

### Pre-required

You need to have those tools installed first before you go to next step.

* [node.js](http://nodejs.org)
* [npm](http://npmjs.org)
* [bower](http://bower.io)
* [grunt](http://gruntjs.com)
* [mongoDB](http://www.mongodb.org)
* [compass](http://compass-style.org)

### Configuration

* `port` defined the server port.
* `client` specify the client code folder name.
* `server` specify the server code folder name.
* `mongodbUrl` point to mongoDB database.

Example:


```
{
  "port": "1985",
  "client": "client",
  "server": "server",
  "mongodbUrl": "mongodb://localhost/test"
}
```

To run the application **you need to have the mongoDB running on the local or remote machine**, to set up mongoDB please follow instruction on official website, after database start to run, all you need to do is to specify the mongoDB url in the [config file](https://github.com/LeoAJ/DailyFinance/blob/master/config/config.json#L5), otherwise the code will broken and will not be able to run. After all those set up, please do.

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

Preserve all user profile and expense data in the mongoDB.



## RESTful API

All API built in **RESTful**. Main operations are **CRUD** which is create, read, update and delete. Use `GET` as read and `DELETE` as delete operations as usual, for create I used `POST` and update use `PUT`, which is not necessary to use `POST` as create, `POST` can be used as update as well. The main difference between them are whether it is **idempotent**.

### APIs

Content is `application/json`.

<table>
  <tr>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
      <td>GET /api/expense</td>
      <td>Get expenses list</td>
  </tr>
  <tr>
      <td>GET /api/expense/:expenseId</td>
      <td>Get expense detail</td>
  </tr>
  <tr>
      <td>POST /api/expense</td>
      <td>Create new expense</td>
  </tr>
  <tr>
      <td>PUT /api/expense/:expenseId</td>
      <td>Update the expense</td>
  </tr>
  <tr>
      <td>DELETE /api/expense/:expenseId</td>
      <td>delete the expense</td>
  </tr>
</table>

## Server

List all used open source library for building entire back-end.

* [express](http://expressjs.com) for building entire server.
* [passport](http://passportjs.org) for authentication.
* [mongoose](http://mongoosejs.com) for modeling data, querying and connecting to mongoDB.

## Client

List all used open source library for building entire front-end.

* Use [AngularJS](http://angularjs.org) as main javascript framework to build the MVC structure of UI.
* Use [Bootstrap 3](http://getbootstrap.com) as main css framework to automatically adjust layout in different devices such as mobile, tablet and laptop.

## Grunt libraries

Help running javascript tasks.

* watch
* express
* open
* compass

## Future feature

* <del>sign up<del>
* delete all
* grid view
* social log in (fb, twitter, g+)
* multi-currency

## Release History

v0.0.1 Initial release