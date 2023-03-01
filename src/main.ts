import { el } from '@elemaudio/core';
import WebRenderer from '@elemaudio/web-renderer';

const startBtn = document.getElementById('start');

if (startBtn) {
  startBtn.addEventListener('click', () => {
    const ctx = new AudioContext();
    const core = new WebRenderer();
    
    core.on('load', () => {
      core.render(el.cycle(440), el.cycle(441));
    });
    
    (async function main() {
      let node = await core.initialize(ctx, {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [2],
      });
    
      node.connect(ctx.destination);
    })();
  });
}
