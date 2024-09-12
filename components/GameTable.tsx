import Sprite from '@/components/Sprite';
import { SpritesName, Level } from '@/types/sprites';
import { ReactElement, MutableRefObject } from 'react';

type GameTableProps = {
  tableSize: number;
  currentGame: MutableRefObject<Level>;
  onPositionChange: Function;
};

export default function GameTable({
  tableSize,
  currentGame,
  onPositionChange,
}: GameTableProps) {
  const table: ReactElement<any, any>[] = [];

  for (let indexY = 0; indexY < tableSize; indexY++) {
    const row: ReactElement<any, any>[] = [];
    for (let indexX = 0; indexX < tableSize; indexX++) {
      row.push(
        <div key={indexY + indexX} className="bg-[#333649] w-full relative">
          {currentGame.current[indexY][indexX].name !== '' && (
            <Sprite
              spriteName={
                currentGame.current[indexY][indexX].name as SpritesName
              }
              spriteInitialPosition={
                currentGame.current[indexY][indexX].position
              }
              isPainted
              onPositionChange={(value: number) => {
                onPositionChange(value, indexY, indexX);
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

  return table;
}
