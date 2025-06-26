import { createJiti } from "../../../node_modules/.pnpm/jiti@2.4.2/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@vben/tailwind-config": "/Users/chenxi/Desktop/Chen/photography-take-orders/internal/tailwind-config"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/Users/chenxi/Desktop/Chen/photography-take-orders/internal/tailwind-config/src/postcss.config.js")} */
const _module = await jiti.import("/Users/chenxi/Desktop/Chen/photography-take-orders/internal/tailwind-config/src/postcss.config.ts");

export default _module?.default ?? _module;