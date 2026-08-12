/**
 * Lightweight error reporter used by the root error boundary.
 * Logs errors to the console with structured context so they are
 * easy to find in production logging pipelines.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[ErrorBoundary]", message, {
    route: window.location.pathname,
    ...context,
    ...(stack !== undefined && { stack }),
  });
}
