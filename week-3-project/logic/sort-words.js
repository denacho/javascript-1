/* sort characters

  sort the words in a string, words are substrings separated by spaces

*/

const sortTests = [
  { name: "first", args: ["4321 cde"], expected: "1234 cde" },
  { name: "second", args: ["abcd 153"], expected: "abcd 135" },
  { name: "third", args: ["howdy doody time"], expected: "dhowy ddooy eimt" }
];

// write me!

function sort(str) {
  let exp = [];
  let newArr = str.split(" ");

  for (let index in newArr) {
    let arrstr = newArr[index].split("");
    let sortedstr = arrstr.sort();
    let mashedstr = sortedstr.join("");
    exp.push(mashedstr);
  }

  return exp.join(" ");
}
evaluate(sort, sortTests);
