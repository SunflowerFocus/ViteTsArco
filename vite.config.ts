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
    viteMockServe(),
  ],
})
