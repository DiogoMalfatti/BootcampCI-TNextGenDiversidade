function soma(a: number, b: number): number {
  return a + b;
}

//soma("ola", 5)
soma(2, 5);

function soma2(a, b) {
  // tipo any
  return a + b;
}

soma2("ola", 3);

let x = 5; // inferiu o tipo

soma(x, 4);
