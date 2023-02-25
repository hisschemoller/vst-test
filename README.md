# VST Test

Testing the Elementary Audio plugin renderer.

## Setup

```bash
# install dependencies
npm init

# copy dev kit vst plugin, when asked where: /Library/Audio/Plug-Ins
npx elem-copy-binaries

# nss/certutils are needed for Firefox and Chrome.
brew install nss

# https-localhost to serve over https
npm i -g --only=prod https-localhost

# start server
PORT=3000 HOST=127.0.0.1 serve src
```

Then view in browser at https://127.0.0.1:3000/<br>
Or open in VST host with the ElementaryDevKit VST plugin.

## Documentation and tutorials

* Build a native audio plugin with Elementary
  * https://blog.logrocket.com/build-native-audio-plugin-elementary/
