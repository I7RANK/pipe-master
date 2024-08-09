import { Level } from '@/types/sprites';

export const DEFAULT_LEVEL: Level = [
  [
    { name: 'curve', positionToWin: 3 },
    { name: 'curve', positionToWin: 0 },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
  ],
  [
    { name: 'rect', positionToWin: 0 },
    { name: 'curve', positionToWin: 2 },
    { name: 'curve', positionToWin: 0 },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
  ],
  [
    { name: 'rect', positionToWin: 0 },
    { name: '', positionToWin: null },
    { name: 'rect', positionToWin: 0 },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
  ],
  [
    { name: 'start', positionToWin: 2 },
    { name: '', positionToWin: null },
    { name: 'end', positionToWin: 2 },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
  ],
  [
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
    { name: '', positionToWin: null },
  ],
];
