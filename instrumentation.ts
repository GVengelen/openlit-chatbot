import { registerOTel } from '@vercel/otel';

export function register() {
  console.log(' > Registering OpenTelemetry instrumentation');
  console.log(
    process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
    process.env.OTEL_EXPORTER_OTLP_HEADERS,
  );
  registerOTel({ serviceName: 'ai-chatbot' });
}
