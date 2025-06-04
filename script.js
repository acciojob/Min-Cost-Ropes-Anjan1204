function mincost(arr) {
  let cost = 0;

  // Continue until one rope remains
  while (arr.length > 1) {
    // Sort ropes by length
    arr.sort((a, b) => a - b);

    // Combine the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();
    let sum = first + second;

    cost += sum;
    arr.push(sum); // Push back the combined rope
  }

  return cost;
}

function calculateMinCost() {
  const input = document.getElementById("ropeInput").value;
  const arr = input
    .split(",")
    .map(str => parseInt(str.trim()))
    .filter(num => !isNaN(num) && num > 0);

  if (arr.length < 2) {
    document.getElementById("result").innerText =
      "Please enter at least two valid rope lengths.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").innerText = "Minimum cost: " + result;
}
