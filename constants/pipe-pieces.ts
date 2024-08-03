type Sprites = {
  rect: string;
  curve: string;
  doubleCurve: string;
  cross: string;
};

type PipeSprites = {
  unPainted: Sprites;
  painted: Sprites;
  start: string;
  end: string;
};

export const PIPE_SPRITES: PipeSprites = {
  unPainted: {
    rect: 'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/rec_b_zetbeg.png',
    curve:
      'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/curv_b_tn1jlu.png',
    doubleCurve:
      'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/curv-x2_b_blg3ul.png',
    cross:
      'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/cruz_b_b9lc4v.png',
  },
  painted: {
    rect: 'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/rec_a_mudszp.png',
    curve:
      'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/curv_a_uq6a8f.png',
    doubleCurve:
      'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/curv-x2_a_qruntq.png',
    cross:
      'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/cruz_a_bkhjlo.png',
  },
  start:
    'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/ini_a_iexqea.png',
  end: 'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/fin_a_uhujqz.png',
};
