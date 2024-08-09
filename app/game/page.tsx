'use client';

import GameHeader from '@/components/GameHeader';
import Sprite from '@/components/Sprite';
import { ReactElement, useRef } from 'react';
import { SpritesName, Level } from '@/types/sprites';
import { DEFAULT_LEVEL } from '@/constants/levels';

export default function Page() {
  const tableSize = 5;
  const table: ReactElement<any, any>[] = [];
  const userGame = useRef(
    Array(tableSize)
      .fill(null)
      .map(() => Array(tableSize).fill(null))
  );

  const level: Level = DEFAULT_LEVEL;

  const setUserGamePositions = (value: number, x: number, y: number) => {
    userGame.current[x][y] = value;
    console.log(userGame.current);
    const userWon = checkIfUserWon();
    if (userWon) {
      console.log(
        '%cUser Won!',
        'color: #32c825; font-family: sans-serif; text-decoration: underline; font-size: 32px;'
      );
    }
  };

  const checkIfUserWon = () => {
    let stopChecking = false;
    userGame.current.forEach((row, y) => {
      if (stopChecking) return;

      row.forEach((piecePosition, x) => {
        if (level[y][x].positionToWin !== piecePosition) {
          stopChecking = true;
        }
      });
    });
    return !stopChecking;
  };

  for (let indexY = 0; indexY < tableSize; indexY++) {
    const row: ReactElement<any, any>[] = [];
    for (let indexX = 0; indexX < tableSize; indexX++) {
      row.push(
        <div key={indexY + indexX} className="bg-[#333649] w-full relative">
          {level[indexY][indexX].name !== '' && (
            <Sprite
              spriteName={level[indexY][indexX].name as SpritesName}
              isPainted
              onPositionChange={(value: number) => {
                setUserGamePositions(value, indexY, indexX);
              }}
            />
          )}
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

      <div className="relative bg-[#5a6288] mx-auto max-w-[calc(100vmin_-_16px)] lg:aspect-square max-h-[calc(100vmin_-_16px)] lg:h-4/5">
        <div className="relative w-full h-full pb-[100%] lg:pb-0 lg:w-auto ">
          <div className="absolute top-0 left-0 w-full h-full p-1 flex flex-col gap-y-1">
            {table}
          </div>
        </div>
      </div>
    </div>
  );
}
