function insert(str, index, target) {
  const a = str.substring(0, index);
  const b = str.substring(index, str.length);

  return a + target + b;
}

const str = "ABCDEFG";

const result = insert(str, 3, "HELLO WORLD");
console.log(result);
