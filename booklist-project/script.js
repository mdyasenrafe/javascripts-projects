const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   delcare
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let year = document.getElementById("year");
  let bookList = document.getElementById("book-list");
  if (title.value == "" || author.value == "" || year.value == "") {
    alert("Please input your information.");
  } else {
    //   creating row
    const tr = document.createElement("tr");
    bookList.appendChild(tr);
    // creating table of data
    const newTitle = document.createElement("td");
    newTitle.innerHTML = title.value;
    tr.appendChild(newTitle);
    // creating table of data
    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = author.value;
    tr.appendChild(newAuthor);
    // creating table of data
    const newYear = document.createElement("td");
    newYear.innerHTML = year.value;
    tr.appendChild(newYear);

    //   empty value
    title.value = "";
    author.value = "";
    year.value = "";
  }
});
