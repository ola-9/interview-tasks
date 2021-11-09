// Тасование Фишера — Йетса

const shuffle = (items) => {
  const { length } = items;
  const clonedItems = [...items];

  for (let i = length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    console.log(i);
    const temp = clonedItems[i];
    clonedItems[i] = clonedItems[j];
    clonedItems[j] = temp;
  }

  return clonedItems;
};

export default shuffle;
