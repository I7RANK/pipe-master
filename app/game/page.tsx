'use client';

import GameHeader from '@/components/GameHeader';
import Sprite from '@/components/Sprite';
import { ReactElement, useRef, useState } from 'react';
import { SpritesName, Level } from '@/types/sprites';
import { DEFAULT_LEVEL } from '@/constants/levels';
import { getSpriteByName } from '@/utils/get-sprite';

export default function Page() {
  const tableSize = 5;
  const table: ReactElement<any, any>[] = [];
  const level: Level = DEFAULT_LEVEL;
  const [hasChanged, setHasChanged] = useState(false);

  const getUserGame = (isRandomPositions: boolean = true): Level => {
    const game = [];

    function getRandomPosition(max: number) {
      return Math.floor(Math.random() * max);
    }

    for (const row of DEFAULT_LEVEL) {
      const gameRow = [];
      for (const sprite of row) {
        if (!sprite.name) {
          gameRow.push({ ...sprite });
          continue;
        }
        const spriteData = getSpriteByName(sprite.name, false);
        let position = sprite.position;
        if (isRandomPositions && sprite.position !== null) {
          position = getRandomPosition(spriteData.stepsQuantity);
        }
        gameRow.push({ name: sprite.name, position });
      }
      game.push(gameRow);
    }

    return game;
  };

  const userGame = useRef<Level>(getUserGame());

  const setUserGamePositions = (value: number, x: number, y: number) => {
    userGame.current[x][y].position = value;
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

      row.forEach((piece, x) => {
        if (level[y][x].position !== piece.position) {
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
          {userGame.current[indexY][indexX].name !== '' && (
            <Sprite
              spriteName={userGame.current[indexY][indexX].name as SpritesName}
              spriteInitialPosition={userGame.current[indexY][indexX].position}
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
          <div
            key={hasChanged.toString()}
            className="absolute top-0 left-0 w-full h-full p-1 flex flex-col gap-y-1"
          >
            {table}
          </div>
        </div>
      </div>

      <div>
        <button
          className="px-4 py-2 bg-slate-300"
          onClick={() => {
            userGame.current[0][0].position = 0;
            setHasChanged(!hasChanged);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}
