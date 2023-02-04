# From Three.js Journey maked by Bruno Simon

## Texture Wrapping

When you will use repeating on the door texture, the texture is not repeating itselfs by default (try to set repeat with the default wrapping), so we need to use `Repeat` or `Mirrored Repeat`.

Center is the point of rotation of the texture, it will move the offset of the texture, so if you want to change the center rotation at the center for example (0.5, 0.5). You can set the offet with (0.5, 0.5).

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
