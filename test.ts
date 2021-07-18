import strStr from ".";
const chalk = require("chalk");

console.log('Case: Input: haystack = "hello", needle = "ll"');
if (strStr("hello", "ll") === 2) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

console.log('Case: Input: haystack = "aaaaa", needle = "bba"');
if (strStr("aaaaa", "bba") === -1) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

console.log('Case: Input: haystack = "", needle = ""');
if (strStr("", "") === 0) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

console.log('Case: Input: haystack = "aaa", needle = "a"');
if (strStr("aaa", "a") === 0) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

console.log('Case: Input: haystack = "aaa", needle = "aaaa"');
if (strStr("aaa", "a") === 0) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}
