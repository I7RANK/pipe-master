import { useRef, useState, useEffect } from 'react';
import { SpritesName } from '@/types/sprites';
import { createCircularIterator } from '@/utils/circular-iterator';
import '@/styles/sprite.css';
import { getSpriteByName } from '@/utils/get-sprite';

type SpriteProps = {
  readonly spriteName: SpritesName;
  readonly spriteInitialPosition: number | null;
  readonly isPainted: boolean;
  readonly onPositionChange: Function;
};

export default function Sprite({
  spriteName,
  spriteInitialPosition,
  isPainted,
  onPositionChange,
}: SpriteProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const sprite = getSpriteByName(spriteName, isPainted);
  const [currentRotation, setCurrentRotation] = useState(0);
  const getPositionIndex = useRef<Function>(() => {});
  useEffect(() => {
    const initialPosition = spriteInitialPosition ?? 0;
    setPosition(initialPosition);
    getPositionIndex.current = createCircularIterator(
      sprite.stepsQuantity,
      initialPosition
    );
    getPositionIndex.current();
  }, []);
  const rotate90DegPiece = () => {
    const position = getPositionIndex.current();
    const rotateTo = currentRotation + 90;
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `rotate(${rotateTo}deg)`;
    onPositionChange(position);
    setCurrentRotation(rotateTo);
    console.log(position, buttonRef.current.style.transform);
  };
  const setPosition = (position: number) => {
    if (!buttonRef.current) return;
    const rotation = position * 90;
    buttonRef.current.style.transform = `rotate(${rotation}deg)`;
    buttonRef.current.classList.add('fade-in');
    setCurrentRotation(rotation);
  };

  return (
    <button
      ref={buttonRef}
      className="w-[calc(100%+4px)] opacity-0 h-[calc(100%+4px)] -mt-0.5 bg-contain bg-center transition-transform"
      style={{ backgroundImage: `url(${sprite.imgUrl})` }}
      onClick={rotate90DegPiece}
    />
  );
}
