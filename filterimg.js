//Select all filterable buttons and images.
const filterButtons= document.querySelectorAll(".container button");
const filterableImages= document.querySelectorAll(".filter img"); 

//Define the filterImage function
const filterImage= i => {
    document.querySelector(".active").classList.remove("active");
    i.target.classList.add("active");

    //Iterate over all Filterable Images
    filterableImages.forEach(filter => {
        //Add hide class to hide the images initially
        filter.classList.add("hide");
        //check if the image matches the selected filter or "all" is selected
        if(filter.dataset.name === i.target.dataset.name || i.target.dataset.name === "All"){
            filter.classList.remove("hide")
        }
    });
      
};

//Add click event listener to each event button
filterButtons.forEach(button => button.addEventListener("click",filterImage));
