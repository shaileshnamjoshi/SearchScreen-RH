React App
==========================

### Grunt
This template uses Grunt, the Javascript Task Runner. To use Grunt with this Template App, do the following:

Install grunt: npm install -g grunt-cli
In your App directory, run: npm install. This installs Grunt plugins, etc for use with this App.
Run grunt serve to preview this App locally

###  local development

You can also use Grunt to point your App at a local developement server. To do this, use the ```grunt serve:local``` command. Some notes on using the serve:local task:

* by default, the local server development url is: http://localhost:8001
* you can change this directly in your local Gruntfile.js, in the app config:

```
  app: {
    // configurable paths
    app: 'www',
    url: '',
    default_local_server_url: 'http://localhost:8001'
  },
```

* you can also pass a 'url' optional flag to server:local, e.g. ```grunt serve:local --url=http://localhost:9000```

