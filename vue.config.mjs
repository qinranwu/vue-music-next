import { defineConfig } from '@vue/cli-service'
import path from 'path'
import { fileURLToPath } from 'url'
import registerRouter from './backend/router.mjs'

// 获取当前模块的目录路径，确保跨平台兼容性
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  // 配置开发服务器
  devServer: {
    host: '0.0.0.0',
    open: true,
    proxy: {},
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        console.error('Error: devServer is not defined')
        throw new Error('devServer is not defined')
      }
      try {
        const app = devServer.app
        console.log('Registering routes...')
        registerRouter(app)
        console.log('Routes registered successfully.')
      } catch (error) {
        console.error('Error registering routes:', error)
        throw error
      }
      return middlewares
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                  @import "@/assets/scss/variable.scss";
                  @import "@/assets/scss/mixin.scss";
                `,
      },
    },
  },
})
