import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],

})


// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react-swc'

// export default ({ mode }) => {
//   // Load app-level env vars to node-level env vars.
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

//   return defineConfig({
//     plugins: [react()],
//   });
// }
