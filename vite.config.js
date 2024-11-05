import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        create: 'src/create.html',
        feed: 'src/feed.html',
        profile: 'src/profile.html'
      }
    }
  }
})
