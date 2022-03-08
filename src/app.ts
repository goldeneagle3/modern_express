import express from "express";

import { ApiRoutes } from "./routes";

export class Server {
  public static bootstrap(): Server {
    return new Server();
  }

  public app: express.Application;

  constructor() {
    // Create express.js application
    this.app = express();

    // configure application
    this.config();

    // add routes
    this.routes();
  }

  public config() {
    // mount logger
    // this.app.use(
    //   morgan('tiny', {
    //     stream: {
    //       write: (message: string) => logger.info(message.trim()),
    //     },
    //   } as morgan.Options),
    // );

    // mount json form parser
    this.app.use(express.json());


    // mount override?
    // this.app.use(helmet());
    // this.app.use(cors());
    // this.app.use(compression());
    // this.app.use(methodOverride());
    // this.app.use(expressStatusMonitor());

    // catch 404 and forward to error handler
    this.app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        err.status = 404;
        next(err);
      }
    );
  }

  private routes() {
    // use router middleware
    this.app.use(ApiRoutes.path, ApiRoutes.router);
  }
}
