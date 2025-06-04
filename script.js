function mincost(arr) {
  let cost = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let first = arr.shift();
    let second = arr.shift();
    let sum = first + second;
    cost += sum;
    arr.push(sum);
  }
  return cost;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
  const input = document.getElementById("ropeInput").value;
  const arr = input.split(',').map(Number).filter(n => !isNaN(n) && n > 0);

  if (arr.length < 2) {
    document.getElementById("result").textContent = "Please enter at least two valid rope lengths.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").textContent = "Minimum cost: " + result;
});
