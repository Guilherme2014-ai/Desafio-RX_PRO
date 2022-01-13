"use strict";
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var database_1 = __importDefault(require("./database"));
var routes_1 = __importDefault(require("./routes"));
var errorsHandlerMIddleware_1 = __importDefault(
  require("./middlewares/errorsHandlerMIddleware"),
);
var App = /** @class */ (function () {
  function App() {
    this.app = express();
    this.Database();
    this.Middlewares();
    this.Routes();
  }
  App.prototype.Database = function () {
    database_1
      .default()
      .then(function () {
        return console.log("Database Connected !");
      })
      .catch(function (e) {
        return console.error(e);
      });
  };
  App.prototype.Middlewares = function () {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  };
  App.prototype.Routes = function () {
    this.app.use("/", routes_1.default);
    this.app.use(errorsHandlerMIddleware_1.default); // ErrorHandler
  };
  return App;
})();
exports.default = new App().app;
