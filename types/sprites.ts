type Sprite = {
  imgUrl: string;
  stepsQuantity: number;
};

type Sprites = {
  rect: Sprite;
  curve: Sprite;
  doubleCurve: Sprite;
  cross: Sprite;
  start: Sprite;
  end: Sprite;
};

export type PipeSprites = {
  unPainted: Sprites;
  painted: Sprites;
};

export type SpritesName = keyof Sprites;
