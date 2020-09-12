let string1 = prompt("nhập vào chuỗi cách nhau bởi dấu phẩy");
let string2 = prompt("nhập vào chuỗi cách nhau bởi dấu phẩy");
const a1 = string1.split(",");
const a2 = string2.split(",");
output = [];

newa1 = removeDuplicate(a1);
newa2 = removeDuplicate(a2);
newarr = [];

for (let i = 0; i <= newa1.length - 1; i++) {
  for (let j = 0; j <= newa2.length - 1; j++) {
    if (newa1[i] == newa2[j]) {
      newarr.push(newa1[i]);
    }
  }
}
for (let i = 0; i <= newarr.length - 1; i++) {
  for (let j = 0; j <= newa1.length - 1; j++) {
    if (newa1[j] == newarr[i]) {
      newa1.splice(j, 1);
      j = j - 1;
    }
  }
  for (let j = 0; j <= newa2.length - 1; j++) {
    if (newa2[j] == newarr[i]) {
      newa2.splice(j, 1);
      j = j - 1;
    }
  }
}

for (let i of newa1) {
  output.push(i);
}
for (let i of newa2) {
  output.push(i);
}

console.log(newa1);
console.log(newa2);
console.log(newarr);
console.log(output);

function removeDuplicate(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}
