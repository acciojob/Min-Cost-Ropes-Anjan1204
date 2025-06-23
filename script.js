function calculateMinCost() {
  const input = document.getElementById("ropeInput").value;
  const arr = input
    .split(",")
    .map(Number)
    .filter((n) => !isNaN(n) && n > 0);

  if (arr.length < 2) {
    document.getElementById("result").textContent =
      "Please enter at least 2 valid rope lengths.";
    return;
  }

  const totalCost = minCost(arr);
  document.getElementById("result").textContent =
    "Minimum cost to connect all ropes: " + totalCost;
}

function minCost(arr) {
  let total = 0;
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    const cost = first + second;
    total += cost;

    // insert in sorted position
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (cost < arr[i]) {
        arr.splice(i, 0, cost);
        inserted = true;
        break;
      }
    }
    if (!inserted) arr.push(cost);
  }

  return total;
}
