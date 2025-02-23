import test from "./tests.mjs";

function books(books, result, author) {
    for (const book of books) {
        const part = books.title.slice(0, 2)
        if (part === "The") {
            result.the.push(book);
        }
        if (book.author.match("t")) {
            result.t_authors.push(book);
        }
        if (book.publication_year > 1992) {
            result.after_1992.push(book);
        }
        if (book.publication_year < 2004) {
            result.before_2004.push(book);
        }
        if (book.author === author) {
            result.isbn.push(book.isbn);
        }
    }
    return result;
    
}

let book_result = {
    the: [],
    t_authors: [],
    after_1992: [],
    before_2004: [],
    isbn: [],
}

function asc_books_name(books) {
    books.sort((a, b) => a.title - b.title);
}

function desc_books_name(books) {
    books.sort((a, b) => b.title - a.title);
}

function asc_books_year(books) {
    books.sort((a, b) => a.publication_year - b.publication_year);
}

function desc_books_year(books) {
    books.sort((a, b) => b.publication_year - a.publication_year);
}

function asc_books_first_name(books) {
    books.sort((a, b) => a.title - b.title);
}

function desc_books_first_name(books) {
    books.sort((a, b) => b.author - a.author);
}

function asc_books_last_name(books) {
    books.sort((a, b) => a.author.split()[1] - b.author.split()[1]);
}

function desc_books_last_name(books) {
    books.sort((a, b) => b.author.split()[1] - a.author.split()[1]);
}

console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

const testBooks = test ("Books");