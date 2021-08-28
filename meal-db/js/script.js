//click button functon
const searchFood = async () => {
  //get id
  const searchField = document.getElementById("search-field");
  //get value
  const searchFieldValue = searchField.value;
  if (searchField.value == "") {
    const errorMessage = document.getElementById("error-message");
    const notFoundMessage = document.getElementById("not-found-message");
    errorMessage.innerHTML = "Sorry! Please Input a Value";
    notFoundMessage.innerHTML = "";
    // console.log("done");
  } else {
    //api call and api method
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`;
    const res = await fetch(url);
    const data = await res.json();
    loadDisplay(data.meals);
    /*    fetch(url)
      .then((res) => res.json())
      .then((data) => loadDisplay(data.meals));
      */
  }
  //clear search field
  searchField.value = "";
};

//display show functoin
const loadDisplay = (data) => {
  const notFoundMessage = document.getElementById("not-found-message");
  const searchResult = document.getElementById("search-result");
  const errorMessage = document.getElementById("error-message");
  searchResult.textContent = "";
  //   debugger;
  if (data == null) {
    notFoundMessage.innerHTML = "Sorry! 4O4 don't found";
    errorMessage.innerHTML = "";
  }
  //else condition
  else {
    //for each method
    data.forEach((meal) => {
      //create element div
      const div = document.createElement("div");
      //add claslist
      div.classList.add("col");
      //set innerhtml div
      div.innerHTML = `
        <div onclick="mealDetails(${meal.idMeal})" class="card p-3 shadow-lg">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <small class="card-text text-danger">
                        categroy : ${meal.strCategory}
                    </small>
                    <p class="card-text">${meal.strInstructions.slice(
                      0,
                      200
                    )}</p>
                </div>
        </div>
      `;
      notFoundMessage.innerHTML = "";
      errorMessage.innerHTML = "";
      //append child div
      searchResult.appendChild(div);
    });
  }
};

// mealDetails function
const mealDetails = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetais(data.meals[0]));
};
//displayMealDetais function
const displayMealDetais = (mealDetails) => {
  //get meals details div
  const mealDetailsDiv = document.getElementById("meal-details");
  mealDetailsDiv.textContent = "";
  // create element div
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `   
  <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">${mealDetails.strMeal}</h5>
        <small class="card-text text-danger">
            categroy : ${mealDetails.strCategory}
        </small>
        <p class="card-text">${mealDetails.strInstructions.slice(0, 200)}</p>
        <a
        href="
        ${mealDetails.strYoutube}"
        class="btn btn-primary">
            Go somewhere
        </a>
    </div>
  `;
  //append child div
  mealDetailsDiv.appendChild(div);
};
