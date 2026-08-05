import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.open-meteo\.com\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "weather-api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
      manifest: {
        name: "Weather App",
        short_name: "Weather App",
        description: "A weather app built with React and Vite",
        theme_color: "#1e293b",
        background_color: "#1e293b",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/assets/images/logo.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/assets/images/logo.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
