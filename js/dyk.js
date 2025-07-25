document.addEventListener('DOMContentLoaded', function() {
    // Define all potential container IDs
    const containerIds = ['facts-container', 'facts-container-m'];
    const allFactContainers = [];

    // Get references to all existing container elements
    containerIds.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            allFactContainers.push(container);
        }
    });

    // If no containers are found, there's nothing to do, so exit the script.
    if (allFactContainers.length === 0) {
        console.warn("No 'Did You Know?' fact containers found on the page (looked for: " + containerIds.join(', ') + ")");
        return; // Exit script if no target elements are found
    }

    // IMPORTANT: Double-check this path. If dykdat.json is in your site's root,
    // and this JS file is in /assets/js/, then '../dykdat.json' is correct.
    // If dykdat.json is in /assets/, then the path would be '../dykdat.json' (if script is in assets/js/)
    // If dykdat.json is in /assets/data/, then the path would be '../../assets/data/dykdat.json' etc.
    // Consider using an absolute path if possible, e.g., '/dykdat.json' if it's at the root of your _site.
    const factsURL = '../dykdat.json';
    let allFacts = [];
    const numberOfFactsToDisplay = 6; // Set how many facts you want to display per container

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

    // Function to display a given set of facts in a specific target container
    function populateContainerWithFacts(targetContainer, factsToRender) {
        if (!targetContainer) return; // Safety check

        if (factsToRender.length === 0) {
            targetContainer.textContent = "No facts available.";
            return;
        }

        // Clear previous facts
        targetContainer.innerHTML = '';

        // Display the chosen number of facts
        factsToRender.forEach(fact => {
            const factParagraph = document.createElement('p');
            // Use innerHTML to render HTML tags (like <a>)
            factParagraph.innerHTML = fact;
            targetContainer.appendChild(factParagraph);
        });
    }

    // Fetch the facts and display them in all detected containers
    fetch(factsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for ${factsURL}`);
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                allFacts = data;

                // Generate ONE set of shuffled facts to display for all containers.
                // This ensures consistency if multiple containers are on the same page.
                const actualFactsToDisplay = Math.min(numberOfFactsToDisplay, allFacts.length);
                const factsForThisPageLoad = shuffleArray([...allFacts]).slice(0, actualFactsToDisplay);

                // Populate each found container with this set of facts
                allFactContainers.forEach(container => {
                    populateContainerWithFacts(container, factsForThisPageLoad);
                });

            } else {
                console.warn("Facts data is empty or not an array:", data);
                // Display 'No facts available' message in all containers
                allFactContainers.forEach(container => {
                    container.textContent = "No facts available.";
                });
            }
        })
        .catch(error => {
            console.error("Error fetching facts:", error);
            // Display error message in all containers
            allFactContainers.forEach(container => {
                container.textContent = "...that the facts are currently unavailable due to a source code error.";
            });
        });
});