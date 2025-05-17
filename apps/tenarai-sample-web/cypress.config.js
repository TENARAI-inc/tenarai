import fs from 'fs';
import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1200,
  videoCompression: true,
  videosFolder: 'cypress/videos',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('after:spec', (_spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          );
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    },
    video: process.env.CYPRESS_CI === 'true',
  },
});
