import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // Явно указываем локальный IP вместо localhost
    port: 5173, // Можно сменить порт, если текущий блокируется
    strictPort: true, // Не искать другие порты, если этот занят
  },
});
