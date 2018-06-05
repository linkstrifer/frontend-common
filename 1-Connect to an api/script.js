let searchedForText = 'cats';

(function searchBook() {
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchedForText}`).then(response => response.json())
	.then(getData)
	.catch(e => console.log('there was a problem with the request ' + e));
}())

function getData(data) {
	const books = data.items;

	console.log(books)
}
