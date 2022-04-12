let jsondata
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    //jsondata=json
    renderBooks(json)
    find5thBook(json)
    totalPages(json)
    findCharac(json,3)
    //console.log(json)

    // return json
  })
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  console.log()
});


function find5thBook(data){

  const book = data[4].name
  console.log(book)
  return book
}

function totalPages(data){
  let totalPages = 0
  data.forEach(book => {
    totalPages += parseInt(book.numberOfPages)
  })
  console.log(totalPages)
  return totalPages
}

function findCharac(data,num){
  let characterList = []
  //collect all the characters in an array
  data.forEach(book => characterList = characterList.concat(book.characters))

  console.log(characterList[num-1])
  return characterList[num-1]
}

