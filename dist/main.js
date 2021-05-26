(function(graph){
      function require(module){
        function localRequire(relativePath){
          return require(graph[module].dependecies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(localRequire,exports,graph[module].code);
        return exports;
      }
      require('./src/entry.js')
    })({"./src/entry.js":{"dependecies":{"./message.js":"src\\message.js","./add.js":"src\\add.js"},"code":"\"use strict\";\n\nvar _message = _interopRequireDefault(require(\"./message.js\"));\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_message[\"default\"]);\nconsole.log((0, _add[\"default\"])(1, 2));"},"src\\message.js":{"dependecies":{"./name.js":"src\\name.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _name = require(\"./name.js\");\n\nvar _default = \"hello \".concat(_name.name, \"!\");\n\nexports[\"default\"] = _default;"},"src\\add.js":{"dependecies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nfunction _default(a, b) {\n  return a + b;\n}"},"src\\name.js":{"dependecies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.name = void 0;\nvar name = 'world';\nexports.name = name;"}})