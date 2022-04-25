<div align="center">
<img src="https://imgur.com/xPygSgY.png" align="center" width="10%" alt="">

# @t3ned/logger

**Logger configuration for error tracking**

</div>

# Installation

```sh
# npm
> npm i -D @t3ned/logger

# yarn
> yarn add -D @t3ned/logger

# pnpm
> pnpm add -D @t3ned/logger
```

# Usage

```ts
import { 
  Logger, LogLevel,
  ConsoleTransport, SentryTransport
  FileTransport, FileRotateTransport, 
} from "@t3ned/logger";

const logger = Logger("My Service");

if (process.env.NODE_ENV === "production") {
  logger.add(SentryTransport("~dsn~", {
    sentry: {
      tracesSampleRate: 1.0
    }
  }));

  logger.add(FileRotateTransport({
    logFilesDirectory: "logs",
    fileName: "error.log",
    level: LogLevel.ERROR,
    zippedArchive: true
  }));
} else {
  logger.add(ConsoleTransport());

  logger.add(FileTransport({
    logFilesDirectory: "logs",
    fileName: "error.log",
    level: LogLevel.ERROR
  }));
}

logger.info("Hello world");
logger.warn("Hello world");
logger.verbose("Hello world");
logger.debug("Hello world");

const error = new Error("Hello world");

logger.error(error.message, {
  error: {
    stack: error.stack
  }
});
```
