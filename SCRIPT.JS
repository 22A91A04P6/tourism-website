async function fetchPlaces() {
    const response = await fetch('places.json');
    const places = await response.json();
    return places;
}

async function searchPlace() {
    const searchBar = document.getElementById('searchBar').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const places = await fetchPlaces();
    const place = places[searchBar];
    if (place) {
        const placeDiv = document.createElement('div');
        placeDiv.classList.add('place');

        const tourismTitle = document.createElement('h2');
        tourismTitle.textContent = `Tourism Spots in ${searchBar}`;
        placeDiv.appendChild(tourismTitle);

        const tourismList = document.createElement('ul');
        place.tourism.forEach(spot => {
            const listItem = document.createElement('li');
            listItem.textContent = spot.name;

            const image = document.createElement('img');
            image.src = spot.image;
            image.alt = spot.name;

            tourismList.appendChild(listItem);
            tourismList.appendChild(image);
        });
        placeDiv.appendChild(tourismList);

        const foodTitle = document.createElement('h2');
        foodTitle.textContent = `Famous Foods in ${searchBar}`;
        placeDiv.appendChild(foodTitle);

        const foodList = document.createElement('ul');
        place.food.forEach(food => {
            const listItem = document.createElement('li');
            listItem.textContent = food.name;

            const image = document.createElement('img');
            image.src = food.image;
            image.alt = food.name;

            foodList.appendChild(listItem);
            foodList.appendChild(image);
        });
        placeDiv.appendChild(foodList);

        resultsDiv.appendChild(placeDiv);
    } else {
        resultsDiv.textContent = 'Place not found. Please try searching for New York, California, Texas, Florida, or Illinois.';
    }
}
