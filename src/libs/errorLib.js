import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({ dsn: "https://55fb00331118436bbdc1f5eeb4b30d64@o568930.ingest.sentry.io/5714325" });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        message = error.message;
    }

    alert(message);
}
