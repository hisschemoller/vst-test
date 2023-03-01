// import { el } from '@elemaudio/core';
import { el } from '@elemaudio/core';
import { default as core } from '@elemaudio/plugin-renderer';

console.log('core', core);

core.on('load', function() {
  console.log('load', core);
  core.render(
    el.mul(0.3, el.cycle(440)),
    el.mul(0.3, el.cycle(440)),
  );
});

core.initialize();
