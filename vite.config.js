import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        create: path.resolve(__dirname, 'src/create.html'),
        feed: path.resolve(__dirname, 'src/feed.html'),
        profile: path.resolve(__dirname, 'src/profile.html')
      }
    }
  }
})
