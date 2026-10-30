import * as migration_20261030_152809_initial from './20261030_152809_initial';

export const migrations = [
  {
    up: migration_20261030_152809_initial.up,
    down: migration_20261030_152809_initial.down,
    name: '20261030_152809_initial'
  },
];
