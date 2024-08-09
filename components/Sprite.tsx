import { useRef, useState, useEffect } from 'react';
import { PIPE_SPRITES } from '@/constants/pipe-pieces';
import { SpritesName } from '@/types/sprites';
import { createCircularIterator } from '@/utils/circular-iterator';
import '@/styles/sprite.css';

type SpriteProps = {
  readonly spriteName: SpritesName;
  readonly isPainted: boolean;
  readonly onPositionChange: Function;
};

export default function Sprite({
  spriteName,
  isPainted,
  onPositionChange,
}: SpriteProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { painted, unPainted } = PIPE_SPRITES;
  const sprite = isPainted ? painted[spriteName] : unPainted[spriteName];
  const [currentRotation, setCurrentRotation] = useState(0);
  const getPositionIndex = useRef<Function>(() => {});
  useEffect(() => {
    const initialIndex = setRandomPosition(sprite.stepsQuantity);
    getPositionIndex.current = createCircularIterator(
      sprite.stepsQuantity,
      initialIndex
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
  const setRandomPosition = (maxPositions: number) => {
    if (!buttonRef.current) return;
    const randomNumber = Math.floor(Math.random() * maxPositions);
    const rotation = randomNumber * 90;
    buttonRef.current.style.transform = `rotate(${rotation}deg)`;
    buttonRef.current.classList.add('fade-in');
    setCurrentRotation(rotation);
    onPositionChange(randomNumber);
    return randomNumber;
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
