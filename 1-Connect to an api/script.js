let searchedForText = 'cats';

function search(query) {
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
		.then(response => response.json())
		.then(getData)
		.catch(e => console.log('there was a problem with the request ' + e));
}

function getData(data) {
	const books = data.items;

	console.log(books)
}

search(searchedForText);
