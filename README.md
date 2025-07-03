<h1 align="center">
Rivals JS
</h1>

<p align="center">
<img alt="NPM License" src="https://img.shields.io/npm/l/rivalsjs">
<img alt="NPM Version" src="https://img.shields.io/npm/v/rivalsjs">
<img alt="NPM Downloads" src="https://img.shields.io/npm/dm/rivalsjs">
</p>

<p align="center">
A modern, lightweight, functional, fully typed, and treeshakeable library for interacting with the unofficial <a href="https://marvelrivalsapi.com/" target="_blank">Marvel Rivals API</a>.
</p>

## 🚀 Core Ideas
- **Fully Typed** – code with confidence
- **Functional** – because classes are so... Java
- **Complete Coverage** – for the entire Marvel Rivals API
- **Lean** & **Light** – no unnecessary bloat



## Q&A
#### How close is this to the API?
The goal for v1 of the library is to align as closely as possible with the API, with only a few differences:
- Everything is camel cased
- The update player endpoint has [custom transformation logic](https://github.com/MatthewSH/rivalsjs/blob/main/src/v1/transformers/player.ts#L17) as there's 2 different types of responses
- All asset urls are fully qualified

#### Why functional?
Functional design allows RivalsJS to remain treeshakeable, letting bundlers strip unused code for minimal footprint.

Also because:
- No need to manage class hierarchies
- Just one Axios client to pass around
- Simple testing: input in, output out

#### Will you ever add a class-based framework?
Maybe, but the core will always remain functional. If we did do a class-based framework it would be part of a bigger piece of the puzzle which we would try to solve on the foundational level first.

A full fledged framework is a huge task and frankly may be outside of the scope of this library. 

#### You already have a v2 wishlist?
[Yes!](https://github.com/MatthewSH/rivalsjs/issues/1) It was the first issue I created. While v1 focuses on building a solid foundation of the library, v2 I want to fix parts of the API that bug me. If there's something you'd like, then throw it on the list!

# Getting Started
## ✅ Before you start
You must have an API key which you can retrieve [here](https://marvelrivalsapi.com/dashboard/settings). If you have any issues with the API you can [join the Discord server](https://discord.gg/tDkmkaUAP8).

## 📦 Installation
```
npm install rivalsjs  # or
yarn add rivalsjs     # or
bun add rivalsjs
```

# ⚡ Jumping In
## Creating the client
RivalsJS is designed to be thin, flexible, and functional. We've created a helper function that handles the ground work you need and you pass that Axios client to each function. No blackbox magic here.

```typescript
import { createRivalsClient } from 'rivalsjs'

// This is just a standard AxiosInstance: https://axios-http.com/docs/instance
const client = createRivalsClient({
  apiKey: 'your-api-key'
})
```

## Example
We support both CJS and ESM, but all examples use ESM. We use [`neverthrow`](https://www.npmjs.com/package/neverthrow) under the hood, so you can rely on clean control flow using `isOk()` and `isErr()`. All functions return `Result` objects from neverthrow so you always know whether you're working with success or error values. No more try/catch clutter.

```typescript
import { getHealthCheck } from 'rivalsjs/v1'

const healthcheck = await getHealthCheck(client)

if (healthcheck.isErr()) {
  console.error('An error occurred: ', healthcheck.error)
}

if (healthcheck.isOk()) {
  console.log(healthcheck.value)
  /*
    Output:
    {
      "error": false,
      "message": "Server is healthy",
      "serverTime": "timestamp",
      "serverResponseTime": "0ms",
      "status": 200
    }
  */
}
```

The same applies to all functions. All functions are documented with JSDoc, so you'll see everything inline in your editor.