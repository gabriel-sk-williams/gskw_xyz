import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/essays/*.md', // Copy all .md files from src/essays
          dest: 'essays' // Place them in dist/essays
        }
      ]
    })
  ],
  assetsInclude: ['**/*.md'],
})