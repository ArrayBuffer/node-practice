/**
 * http verb
 */

const pathToRegexp = require('path-to-regexp');

const methods = [
  'get',
  'post'
]


/**
 * exports
 */
module.exports = Router;


function Router(opts) {
  this.methods = methods;
  this.stack = [];
};

/**
 * add methods for Router.prototype
 */
methods.forEach(function (method) {
  Router.prototype[method] = function (path, middleware) {
    this.register(path, [method], middleware);
    return this;
  };
});

// 路由注册
Router.prototype.register = function (path, methods, middleware, opts) {
  opts = opts || {};
  var router = this;
  var stack = this.stack;
  var route = {
    name: opts.name,
    path: path,
    methods: methods,
    middleware: middleware
  }
  stack.push(route);
  return route;
};


Router.prototype.routes = function () {
  var router = this;
  var stack = this.stack;
  var dispatch = function (req, res) {
    let path = req.url;
    let method = req.method;
    stack.forEach((route) => {
      if (pathToRegexp(route.path).test(path)) {
        let regMatches = [];
        let matchResult = pathToRegexp(route.path, regMatches);
        let result = matchResult.exec(req.url);
        let paramsValues = result.slice(1);
        let params = {};
        regMatches.forEach((item, index) => {
          if (item.name && paramsValues[index] !== undefined) {
            params[item.name] = paramsValues[index];
          }
        });
        req.params = params;
        route.middleware(req, res);
      }
    })
  }
  return dispatch;
};