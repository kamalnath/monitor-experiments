const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const exporter = new OTLPTraceExporter({
  // optional - url default value is http://localhost:4318/v1/traces
  //url: '<your-collector-endpoint>/v1/traces',

  // optional - collection of custom headers to be sent with each request, empty by default
  //headers: {},
});
// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.TRACE);

const sdk = new opentelemetry.NodeSDK({
  //traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  serviceName:"dashboard",
  traceExporter: exporter,
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()
