const calculateCharCount = (str) => str
  .toLowerCase()
  .split('')
  .reduce((acc, char) => {
    const currentCount = acc[char] || 0;
    return { ...acc, [char]: currentCount + 1 };
  });

const isEqual = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (const key of firstKeys) {
    if (first[key] !== second[key]) {
      return false;
    }
  }

  return true;
};

const isAnagram = (firstWord, secondWord) => {
  const charsInFirstWordCount = calculateCharCount(firstWord);
  const charsInSecondWordCount = calculateCharCount(secondWord);

  return isEqual(charsInFirstWordCount, charsInSecondWordCount);
};

export default isAnagram;
