import { PipeSprites } from '@/types/sprites';

const start = {
  imgUrl:
    'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/ini_a_iexqea.png',
  stepsQuantity: 4,
};
const end = {
  imgUrl:
    'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/fin_a_uhujqz.png',
  stepsQuantity: 4,
};

export const PIPE_SPRITES: PipeSprites = {
  unPainted: {
    rect: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/rec_b_zetbeg.png',
      stepsQuantity: 2,
    },
    curve: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/curv_b_tn1jlu.png',
      stepsQuantity: 4,
    },
    doubleCurve: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/curv-x2_b_blg3ul.png',
      stepsQuantity: 2,
    },
    cross: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/cruz_b_b9lc4v.png',
      stepsQuantity: 1,
    },
    start,
    end,
  },
  painted: {
    rect: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/rec_a_mudszp.png',
      stepsQuantity: 2,
    },
    curve: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721864/curv_a_uq6a8f.png',
      stepsQuantity: 4,
    },
    doubleCurve: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/curv-x2_a_qruntq.png',
      stepsQuantity: 2,
    },
    cross: {
      imgUrl:
        'https://res.cloudinary.com/dd36ioqcm/image/upload/q_auto,w_200/v1722721863/cruz_a_bkhjlo.png',
      stepsQuantity: 1,
    },
    start,
    end,
  },
};
