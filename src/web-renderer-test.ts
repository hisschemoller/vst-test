import { el } from '@elemaudio/core';
import WebRenderer from '@elemaudio/web-renderer';

async function startWebRenderer() {
  const ctx = new AudioContext();
  const core = new WebRenderer();
  
  core.on('load', () => {
    core.render(el.cycle(440), el.cycle(441));
  });
  
  const node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });

  node.connect(ctx.destination);
}

export default function setup() {
  const startBtn = document.getElementById('start');
  if (startBtn) {
    startBtn.addEventListener('click', startWebRenderer);
  }
}
