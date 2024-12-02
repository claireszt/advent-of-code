const data = `3   4
4   3
2   5
1   3
3   9
3   3`;

const parsedData = data.split("\n");

const finalData = [];
for (let x of parsedData) {
  finalData.push(x.split("   "));
}

const leftColumn = [];
const rightColumn = [];
for (let x of finalData) {
  leftColumn.push(Number(x[0]));
  rightColumn.push(Number(x[1]));
}

console.log(leftColumn.sort());
console.log(rightColumn.sort());

const results = [];

for (let i = 0; i < leftColumn.length; i++) {
  results.push(Math.abs(rightColumn[i] - leftColumn[i]));
}

console.log(results);

let resultsTot = 0;
for (let x of results) {
  resultsTot += x;
}

console.log(resultsTot);
