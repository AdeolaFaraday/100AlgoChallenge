function Book(title, author) {
	(this.title = title),
		(this.author = author),
		(this.getAuthor = function () {
			return `Author: ${author}`;
		}),
		(this.getTitle = function () {
			return `Title: ${title}`;
		});
}

let HP = new Book('Harry', 'JK.Rollings');

console.log(HP.title);

// Instantiate your Book cons
