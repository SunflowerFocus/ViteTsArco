import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { // 服务器选项
    port: 3100, // 服务器主机
    open: false, // 是否自动打开浏览器
    strictPort: true // 端口占用退出
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: "mock",
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
    }),
  ],
})
