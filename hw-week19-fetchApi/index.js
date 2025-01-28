async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      document.getElementById('error').textContent = 'An error occurred while fetching data. Please try again later.';
      return [];
    }
  }

  function displayData(users) {
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error');
    resultsDiv.innerHTML = '';
    errorDiv.textContent = '';

    if (users.length === 0) {
      errorDiv.textContent = 'Ақпарат өкінішке орай табылмады!';
      return;
    }

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        
        <h3>${user.name}</h3>
        <p>${user.title}</p>
      `;

      resultsDiv.appendChild(card);
    });
  }

  document.getElementById('searchButton').addEventListener('click', async () => {
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
    const data = await fetchData();

    const filteredData = data.filter(user =>
      user.name.toLowerCase().includes(searchValue)
    );

    displayData(filteredData);
  });

  // Initial load to show all users
  window.addEventListener('load', async () => {
    const data = await fetchData();
    displayData(data);
  });