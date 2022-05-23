# Reproduction for Nuxt Error
This is a reproduction repo for [Issue 4584](https://github.com/nuxt/framework/issues/4584).


## Installation

```bash
npm install
```

## Reproduction

```bash
npm run dev
```

Npw, visit the on applicaton at `http://localhost:3000` and take at look the terminal:

```bash

Nuxt CLI v3.0.0-rc.3                                                                                                                                                                                                       16:38:32
                                                                                                                                                                                                                           16:38:32
  > Local:    http://localhost:3000/ 
  > Network:  http://192.168.2.145:3000/

ℹ Using default Tailwind CSS file from runtime/tailwind.css                                                                                                                                               nuxt:tailwindcss 16:38:33
ℹ Merging Tailwind config from ~/tailwind.config.js                                                                                                                                                       nuxt:tailwindcss 16:38:33
ℹ Tailwind Viewer: http://localhost:3000/_tailwind/                                                                                                                                                       nuxt:tailwindcss 16:38:34
ℹ Vite client warmed up in 775ms                                                                                                                                                                                           16:38:35
ℹ Vite server using experimental vite-node...                                                                                                                                                                              16:38:35
ℹ Vite server warmed up in 43ms                                                                                                                                                                                            16:38:35
✔ Nitro built in 196 ms                                                                                                                                                                                              nitro 16:38:35
(node:73691) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)

```