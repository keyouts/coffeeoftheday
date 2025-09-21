function pickRandomCoffee() {
  const inventory = JSON.parse(localStorage.getItem('coffeeInventory')) || [];
  const card = document.getElementById('coffeeCard');
  const error = document.getElementById('errorMsg');

  if (inventory.length === 0) {
    card.innerText = "☕ No coffee available!";
    error.innerText = "Your inventory is empty.";
    error.style.display = 'block';
    return;
  }

  error.style.display = 'none';
  const randomIndex = Math.floor(Math.random() * inventory.length);
  const coffee = inventory[randomIndex];

  // Ensure all expected properties exist
  const name = coffee.name || "Unnamed Coffee";
  const roast = coffee.roast || "Unknown Roast";
  const caffeine = coffee.caffeine !== undefined ? `${coffee.caffeine}mg caffeine` : "Caffeine unknown";

  card.innerText = `${name} • ${roast} • ${caffeine}`;
}

