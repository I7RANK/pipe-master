import { Level } from '@/types/sprites';

export const DEFAULT_LEVEL: Level = [
  [
    { name: 'curve', position: 3 },
    { name: 'curve', position: 0 },
    { name: '', position: null },
    { name: '', position: null },
    { name: '', position: null },
  ],
  [
    { name: 'rect', position: 0 },
    { name: 'curve', position: 2 },
    { name: 'curve', position: 0 },
    { name: '', position: null },
    { name: '', position: null },
  ],
  [
    { name: 'rect', position: 0 },
    { name: '', position: null },
    { name: 'rect', position: 0 },
    { name: '', position: null },
    { name: '', position: null },
  ],
  [
    { name: 'start', position: 2 },
    { name: '', position: null },
    { name: 'end', position: 2 },
    { name: '', position: null },
    { name: '', position: null },
  ],
  [
    { name: '', position: null },
    { name: '', position: null },
    { name: '', position: null },
    { name: '', position: null },
    { name: '', position: null },
  ],
];
