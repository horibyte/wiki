document.addEventListener('DOMContentLoaded', function() {
    const factsContainer = document.getElementById('facts-container');
    const factsURL = '../dykdat.json';
    let allFacts = [];
    const numberOfFactsToDisplay = 6; // Set how many facts you want to display

    // Fisher-Yates (Knuth) Shuffle algorithm
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    // Function to display multiple random unique facts
    function displayMultipleRandomFacts() {
        if (allFacts.length === 0) {
            factsContainer.textContent = "No facts available.";
            return;
        }

        // Ensure we don't try to display more facts than we have
        const actualFactsToDisplay = Math.min(numberOfFactsToDisplay, allFacts.length);

        // Get a shuffled copy of all facts to pick unique ones
        const shuffledFacts = shuffleArray([...allFacts]); // Create a shallow copy and shuffle it

        // Clear previous facts
        factsContainer.innerHTML = '';

        // Display the chosen number of facts
        for (let i = 0; i < actualFactsToDisplay; i++) {
            const factParagraph = document.createElement('p');
            // *** THE CRUCIAL CHANGE: Use innerHTML to render HTML tags ***
            factParagraph.innerHTML = shuffledFacts[i]; // This will now parse <a> tags etc.
            // *************************************************************
            factsContainer.appendChild(factParagraph);
        }
    }

    // Fetch the facts and display multiple immediately on page load
    fetch(factsURL)
        .then(response => {
            if (!response.ok) {
                // If the response is not OK (e.g., 404 Not Found), throw an error
                throw new Error(`HTTP error! Status: ${response.status} for ${factsURL}`);
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                allFacts = data;
                displayMultipleRandomFacts(); // Display multiple random facts immediately
            } else {
                console.warn("Facts data is empty or not an array:", data);
                factsContainer.textContent = "No facts available.";
            }
        })
        .catch(error => {
            console.error("Error fetching facts:", error);
            factsContainer.textContent = "Could not load facts.";
        });
});