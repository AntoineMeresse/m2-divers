export interface Card {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

export const initialCards: Card[] = [
  {
    id: 1,
    title: 'Random cat card',
    imageUrl: 'https://cataas.com/cat?width=250&height=200',
    description: 'That card shows a random cat image.'
  },
  {
    id: 2,
    title: 'Random cat card',
    imageUrl: 'https://cataas.com/cat/says/Hello?width=250&height=200',
    description: 'That card shows a random cat image with a text !'
  }
];

function initData() {
  const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards') || '{}');
  if(!cards) {
    sessionStorage.setItem('cards', JSON.stringify(initialCards));
  }
}

export function getAllCards(): Promise<Card[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cards: Card[] | null = JSON.parse(sessionStorage.getItem('cards') || '{}');
      if(cards && cards.length) {
        resolve(cards);
      } else {
        reject('No cards found !');
      }
    }, 300);
  });
}

initData();