export const getImage = async (number: number) => {
  return import(`../images/memory_${number}.webp`).then(
    (image) => image.default
  );
};
