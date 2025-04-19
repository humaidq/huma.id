import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://huma.id",
  integrations: [mdx(), sitemap(), solidJs()],
  prefetch: {
    prefetchAll: true,
  },
  devOverlay: true,
  redirects: {
    "/blog/own-distro-p1": "/own-distro/",
    "/own-distro-p1": "/own-distro/",
    "/blog/qnap": "/qnap/",
    "/projs": "/projects/",
    "/p": "/projects/",
    "/b": "/blog/",
    "/blogs": "/blog/",
    "/articles": "/blog/",
    "/blog/100-days-to-offload": "/100days/",
    "/blog/barista-express": "/barista/",
    "/blog/best-articles/2018": "/best-2018/",
    "/blog/empty-char-go": "/emptychar/",
    "/blog/go-plugin": "/go-plugin/",
    "/blog/gopher": "/gopher/",
    "/blog/hall-of-fame": "/hall-of-fame/",
    "/blog/mounting-borg-perms": "/borg-perms/",
    "/blog/public-feed": "/public-feed/",
    "/blog/pulseaudio-loopback": "/pa-loopback/",
    "/blog/status-update-1": "/status-update-1/",
    "/blog/tailscale-ios": "/tailscale/",
    "/blog/thinkpad-t590": "/t590/",
    "/blog/yubi": "/yubi/",
    "/blog/kudu-two-year": "/kudu/",
    "/openai-assistant": "/genie/",
    "/geanie": "/genie/",
    "/projects/platform": "/platform/",
    "/projects/cloudflare-ddns-client": "/ddns/",
    "/projects/collabdown": "/collabdown/",
    "/projects/dissertation": "/diss/",
    "/projects/ff-format-patch": "/ff/",
    "/iglu": "/iglü/",
    "/igloo": "/iglü/",
    "/iglo": "/iglü/",
    "/projects/iglu": "/iglü/",
  },
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
});
