export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  const color = new Array(6)
    .fill("")
    .map(() => letters[Math.floor(Math.random() * letters.length)])
    .join("");
  return `#${color}`;
};
