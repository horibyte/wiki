document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');
  const searchDataURL = '/search.json'; // Adjust path if needed
  let searchIndex = [];

  fetch(searchDataURL)
    .then(response => response.json())
    .then(data => {
      searchIndex = data;
    });

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    displayResults(search(query));
  });

function search(query) {
    if (!query) {
      return [];
    }
    return searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }
  function displayResults(results) {
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
    const ul = document.createElement('ul');

    results.forEach(result => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.title;
      li.appendChild(link);
      ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
  }
});