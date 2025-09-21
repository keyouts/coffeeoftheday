function showError(message) {
      const errorDiv = document.getElementById('errorMsg');
      errorDiv.innerText = message;
      errorDiv.style.display = 'block';
    }

    function clearError() {
      const errorDiv = document.getElementById('errorMsg');
      errorDiv.innerText = '';
      errorDiv.style.display = 'none';
    }

    function pickRandomCoffee() {
      const inventory = JSON.parse(localStorage.getItem('coffeeInventory')) || [];

      if (inventory.length === 0) {
        showError("No beans found in inventory.");
        document.getElementById('coffeeCard').innerText = "☕ No coffee today!";
        return;
      }

      clearError();
      const randomIndex = Math.floor(Math.random() * inventory.length);
      const bean = inventory[randomIndex];
      document.getElementById('coffeeCard').innerText =
        `${bean.bean} • ${bean.roast} • ${bean.qty}g`;
    }

    // Initial pick on load
    pickRandomCoffee();