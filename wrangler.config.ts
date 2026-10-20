import { defineWranglerConfig } from "wrangler/experimental-config";

// Config dell'adapter di build per cf: le impostazioni runtime del Worker vivono
// in cloudflare.config.ts, e questo file punta solo gli strumenti agli asset
// preparati in dist/.
export default defineWranglerConfig({
  assetsDirectory: "dist",
});
