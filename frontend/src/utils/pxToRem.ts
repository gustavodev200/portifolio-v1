export default function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

//exemplo de como usar

// margin: ${pixelToRem(17)};
