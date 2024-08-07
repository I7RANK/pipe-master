import { useRef, useState } from 'react';
import { PIPE_SPRITES } from '@/constants/pipe-pieces';
import { SpritesName } from '@/types/sprites';

type SpriteProps = {
  readonly spriteName: SpritesName;
  readonly isPainted: boolean;
};

export default function Sprite({ spriteName, isPainted }: SpriteProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { painted, unPainted } = PIPE_SPRITES;
  const sprite = isPainted ? painted[spriteName] : unPainted[spriteName];
  const [currentRotation, setCurrentRotation] = useState(0);
  const rotate90DegPiece = () => {
    const rotateTo = currentRotation + 90;
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `rotate(${rotateTo}deg)`;
    setCurrentRotation(rotateTo);
    console.log(buttonRef.current.style.transform);
  };

  return (
    <button
      ref={buttonRef}
      className="w-[calc(100%+4px)] h-[calc(100%+4px)] -mt-0.5 bg-contain bg-center transition-transform"
      style={{ backgroundImage: `url(${sprite.imgUrl})` }}
      onClick={rotate90DegPiece}
    />
  );
}
