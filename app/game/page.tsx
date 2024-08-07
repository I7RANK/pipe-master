'use client';

import GameHeader from '@/components/GameHeader';
import Sprite from '@/components/Sprite';
import { ReactElement } from 'react';

export default function Page() {
  const height = 5;
  const width = 5;
  const table: ReactElement<any, any>[] = [];

  for (let indexY = 0; indexY < height; indexY++) {
    const row: ReactElement<any, any>[] = [];
    for (let indexX = 0; indexX < width; indexX++) {
      row.push(
        <div key={indexY + indexX} className="bg-red-600 w-full relative">
          <Sprite spriteName={'doubleCurve'} isPainted />
        </div>
      );
    }
    table.push(
      <div key={indexY} className="flex h-full gap-x-1">
        {row}
      </div>
    );
  }

  return (
    <div className="pt-5 h-screen">
      <GameHeader />

      <div className="relative mx-auto bg-lime-500 max-w-[calc(100vmin_-_16px)] lg:aspect-square max-h-[calc(100vmin_-_16px)] lg:h-4/5">
        <div className="relative w-full h-full pb-[100%] lg:pb-0 lg:w-auto ">
          <div className="absolute top-0 left-0 w-full h-full p-1 flex flex-col bg-slate-500/5 gap-y-1">
            {table}
          </div>
        </div>
      </div>
    </div>
  );
}
