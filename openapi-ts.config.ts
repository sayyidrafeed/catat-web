import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: 'fetch',
  input: '/api/openapi.json',
  output: {
    path: 'src/lib/api/generated',
  },
  plugins: ['@hey-api/client-fetch', '@hey-api/typescript', '@tanstack/react-query'],
});
