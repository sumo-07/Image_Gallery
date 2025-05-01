const search = document.querySelector(".search input");  // Select the search input field
const images = document.querySelectorAll(".filter img");  // Select all the image elements

// Event listener for keyup event, fires as the user types
search.addEventListener("keyup", () => {
    let searchValue = search.value.trim();  // Get the input value and remove leading/trailing spaces
    let value = searchValue.toLowerCase();  // Convert the input value to lowercase for case-insensitive comparison
    
    images.forEach(image => {
        let imageName = image.dataset.name.toLowerCase();  // Get the data-name of the image and convert to lowercase

        // If the search value matches the image's data-name (case-insensitive), display it
        if (imageName.includes(value)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";  // Hide the image if it doesn't match
        }
    });
});

// Reset the image display when search input is cleared
search.addEventListener("input", () => {
    if (search.value === "") {
        images.forEach(image => {
            image.style.display = "block";  // Show all images when search is empty
        });
    }
});
