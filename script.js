function mincost(arr) {
  let cost = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b); // Sort to find 2 smallest ropes

    const first = arr.shift();
    const second = arr.shift();

    const sum = first + second;
    cost += sum;
    arr.push(sum);
  }

  return cost;
}

function calculateMinCost() {
  const input = document.getElementById("ropeInput").value.trim();
  if (!input) {
    document.getElementById("result").textContent = "Please enter valid rope lengths.";
    return;
  }

  const arr = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0);

  if (arr.length === 0) {
    document.getElementById("result").textContent = "Please enter valid rope lengths.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").textContent = `Minimum cost to connect all ropes is: ${result}`;
}
