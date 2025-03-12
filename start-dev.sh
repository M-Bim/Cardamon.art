ulimit -n 4096
NODE_OPTIONS="--max-old-space-size=4096" bun run nuxt dev --no-clear
