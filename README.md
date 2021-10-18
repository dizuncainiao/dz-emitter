# DzEmitter

> Super simple event launcher/publish and subscribe, the same as custom event usage in Vue2!

DzEmitter is a custom event emitter, it can be used in Vue, react and any browser environment, and it can also be used
in Typescript.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [More](#more)

## Install

```shell
yarn add dz-emitter
# or
npm i dz-emitter -S
```

## Usage

```typescript
import Emitter from 'dz-emitter'

const dzEmitter = new Emitter()

function foo(e) {
    console.log(e)
}

// Listen for an event
dzEmitter.on('custom-event', e => console.log('custom-event', e))
dzEmitter.on('custom-event', foo)

// Listen for an event. It is one-time!
dzEmitter.once('custom-event', foo)

// Trigger an event
dzEmitter.emit('custom-event', 'Hello dz-emitter!')

// Remove an event
dzEmitter.off('custom-event')

// Remove an event callback
dzEmitter.off('custom-event', foo)
```

## Use in Vue3
There are many ways to use in vue3, the following are recommended.
```typescript
import { createApp, provide, inject } from 'vue'
import App from '@/App.vue'
import Emitter, { DzEmitter } from 'dz-emitter'

const App = createApp(App)
const dzEmitter = new Emitter()

// 1. Use globalProperties
App.config.globalProperties.dzEmitter = dzEmitter
// 2. Use Provide/Inject. PS: Within the root component
provide('dzEmitter', dzEmitter)
// 3. Hang directly on the window
(window as any).dzEmitter = dzEmitter

// Use in composition api
setup() {
    const { globalProperties } = (getCurrentInstance() as ComponentInternalInstance).appContext.config
    const injectEmitter = inject('dzEmitter') as DzEmitter
    const globalEmitter = globalProperties.dzEmitter as DzEmitter
    const windowEmitter: DzEmitter = (window as any).dzEmitter
}
```

## More

For more information, please check
the [dizuncainiao](https://blog.csdn.net/dizuncainiao/article/details/116500197?spm=1001.2014.3001.5502) blog.
