var arrUser = [];
for (i = 0; i < 5; i++) {
  arrUser.push(Number(prompt("enter 5 nums (to sort decenting or acending)")));
}
console.log(`u've entered the values of ${arrUser.join(" ,")}`);

// arrUser = [5, 7, 1, 9, 4];

arrUser.sort(function (a, b) {
  return a - b;
});
console.log(`ur values after being sorted ascending ${arrUser}`);

arrUser.sort(function (a, b) {
  return b - a;
});
console.log(`ur values after being sorted ascending ${arrUser}`);
