function calculateMinCost() {
  const input = document.getElementById('ropeInput').value;
  const arr = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  
  if (arr.length < 2) {
    document.getElementById('result').innerText = "Enter at least two valid rope lengths.";
    return;
  }

  const cost = mincost(arr);
  document.getElementById('result').innerText = `Minimum cost to connect ropes: ${cost}`;
}

function mincost(arr) {
  arr.sort((a, b) => a - b);
  let totalCost = 0;

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    const sum = first + second;
    totalCost += sum;

    // Insert sum in the correct position to keep array sorted
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (sum < arr[i]) {
        arr.splice(i, 0, sum);
        inserted = true;
        break;
      }
    }
    if (!inserted) arr.push(sum);
  }

  return totalCost;
}
