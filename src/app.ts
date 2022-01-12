import * as express from "express";
import connection from "./database";
import routes from "./routes";
import errorsHandlerMIddleware from "./middlewares/errorsHandlerMIddleware";

class App {
  app: express.Application = express();

  constructor() {
    this.Database();
    this.Middlewares();
    this.Routes();
  }

  private Database() {
    connection()
      .then(() => console.log("Database Connected !"))
      .catch((e) => console.error(e));
  }
  private Middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  private Routes() {
    this.app.use("/", routes);

    this.app.use(errorsHandlerMIddleware); // ErrorHandler
  }
}

export default new App().app;
