import { PIPE_SPRITES } from '@/constants/pipe-pieces';
import { Sprite, SpritesName } from '@/types/sprites';

export const getSpriteByName = (
  spriteName: SpritesName,
  isPainted: boolean
): Sprite => {
  const { painted, unPainted } = PIPE_SPRITES;
  return isPainted ? painted[spriteName] : unPainted[spriteName];
};
