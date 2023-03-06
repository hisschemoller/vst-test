import { el } from '@elemaudio/core';
import { default as core } from '@elemaudio/plugin-renderer';

core.on('load', function() {
  core.render(
    el.mul(0.3, el.cycle(440)),
    el.mul(0.3, el.cycle(440)),
  );
});

core.on('playhead', function(e) {
  // console.log(e);
});

core.initialize();

export default function setup() {
  console.log('setup plugin-renderer');
}