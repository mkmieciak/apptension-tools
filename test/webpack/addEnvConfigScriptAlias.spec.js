import assert from 'power-assert';

import addEnvConfigScriptAlias from '../../webpack/addEnvConfigScriptAlias';
import {production} from '../../env';

describe('addEnvConfigScriptAlias', () => {
  const env = production();

  it('should add env-config alias', () => {
    const config = addEnvConfigScriptAlias({
      env, paths: {environment: '/environment'}
    })({resolve: {alias: {}}});

    assert.equal(config.resolve.alias['env-config'], `/environment/${env.scriptEnv}.js`);
  });
});