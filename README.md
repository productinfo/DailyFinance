# [DailyFinance](http://leoj.net)

DailyFinance ([Live Demo](http://54.201.105.208:1985)) is a end to end full-stack web application for people easily to save the each single expense they spent any where any time through any devices, mobile, tablet or laptop as long as with the browsers, all you need is web connection. 

Provide sign up account, login, retrieve password and basic **CRUD** operations.

Entire web app built with Node.js, Express, MongoDB, AngularJS, Bootstrap and RESTful API.

Take a look to see whether your account got created successfully or not ([Link](http://54.201.105.208:1992))

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
  "mongodbUrl": "Your MongoDB URL"
}
```

To run the application **you need to have the mongoDB running on the local or remote machine first**, to set up mongoDB please follow instruction on official website, after database start to run, all you need to do is to specify the mongoDB url in the [config file](https://github.com/LeoAJ/DailyFinance/blob/master/config/config.json#L5), otherwise the code will broken and will not be able to run. After all those set up, please do.

```
npm install
bower install
grunt server
```
Server is up now!!!


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

### DB Schema

##### Users

<table>
	<tr>
    	<th>Property</th>
    	<th>Type</th>
  	</tr>
  	<tr>
      <td>userId</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>name</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>email</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>password</td>
      <td>String</td>
  	</tr>
</table>

##### Expenses

<table>
	<tr>
    	<th>Property</th>
    	<th>Type</th>
  	</tr>
  	<tr>
      <td>userId</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>expenseId</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>name</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>price</td>
      <td>Number</td>
  	</tr>
	<tr>
      <td>date</td>
      <td>String</td>
  	</tr>
  	<tr>
      <td>time</td>
      <td>String</td>
  	</tr>
</table>


## RESTful API

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
      <td>POST /api/account</td>
      <td>Create new account</td>
  </tr>
  <tr>
      <td>POST /api/password</td>
      <td>Retrieve password</td>
  </tr>
  <tr>
      <td>DELETE /api/expense/:expenseId</td>
      <td>Delete the expense</td>
  </tr>
  <tr>
      <td>DELETE /api/expense</td>
      <td>Delete all expenses</td>
  </tr>
  <tr>
      <td>DELETE /api/account</td>
      <td>Delete account</td>
  </tr>
</table>

## Server

Deploying on Amazon EC2, list all used open source libraries for building entire back-end.

* [express](http://expressjs.com) for building entire server.
* [passport](http://passportjs.org) for authentication.
* [mongoose](http://mongoosejs.com) for modeling data, querying and connecting to mongoDB.
* [emailjs](https://github.com/eleith/emailjs) for sending email.

## Client

List all used open source libraries for building entire front-end.

* Use [AngularJS](http://angularjs.org) as main javascript framework to build the MVC structure of UI.
* Use [Bootstrap 3](http://getbootstrap.com) as main css framework to automatically adjust layout in different devices such as mobile, tablet and laptop.

## Future feature

* add loader
* account setting
* search bar
* deposit VS purchase
* grid view
* social log in (fb, twitter, g+)
* multi-currency

## Author
| [![twitter/Leohsieh0924](http://www.gravatar.com/avatar/d4e9fa87dd47c856e58ddf24f803a060.png)](https://twitter.com/Leohsieh0924 "Follow @Leohsieh0924 on Twitter") |
|---|
| [Leo Hsieh](http://leoj.net) |

## Release History

* 2013-10-05 `v0.0.1` Initial release
* 2014-01-06 `v0.0.2` verify whether the email has been used or not when creating account

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/LeoAJ/dailyfinance/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

