import test from "./tests.mjs";
import {books} from "./data.mjs";

function booksFunction(books, result, author) {
    for (const book of books) {
        const part = book.title.slice(0, 3)
        if (part === "The") {
            result.the.push(book);
        }
        if (book.author.match("t")) {
            result.t_authors.push(book);
        }
        if (book.publication_year > 1992) {
            result.after_1992 = result.after_1992 + 1;
        }
        if (book.publication_year < 2004) {
            result.before_2004 = result.before_2004 + 1;
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
    after_1992: 0,
    before_2004: 0,
    isbn: [],
}

function asc_books_name(books) {
    return books.sort((a, b) => a.title.localeCompare(b.title));
}

function desc_books_name(books) {
    return books.sort((a, b) => b.title.localeCompare(a.title));
}

function asc_books_year(books) {
    return books.sort((a, b) => a.publication_year - b.publication_year);
}

function desc_books_year(books) {
    return books.sort((a, b) => b.publication_year - a.publication_year);
}

function asc_books_first_name(books) {
    return books.sort((a, b) => a.author.split(" ")[0].localeCompare(b.author.split(" ")[0]));
}

function desc_books_first_name(books) {
    return books.sort((a, b) => b.author.split(" ")[0].localeCompare(a.author.split(" ")[0]));
    
}

function asc_books_last_name(books) {
    return books.sort((a, b) => a.author.split(" ").slice(-1)[0].localeCompare(b.author.split(" ").slice(-1)[0]));
}

function desc_books_last_name(books) {
    return books.sort((a, b) => b.author.split(" ").slice(-1)[0].localeCompare(a.author.split(" ").slice(-1)[0]));
}

book_result = booksFunction(books, book_result, "Terry Pratchett");
console.log("books starting with The: ", book_result.the);
console.log("authors with T in their name: ", book_result.t_authors);
console.log("number of books written after 1992: ", book_result.after_1992);
console.log("number of books written before 2004: ", book_result.before_2004);
console.log("isbn numbers for all books written by Terry Pratchett: ", book_result.isbn);
console.log("books in ascending order sorted by name: ", asc_books_name(books));
console.log("books in descending order sorted by name: ", desc_books_name(books));
console.log("books in ascending order chronologically: ", asc_books_year(books));
console.log("books in descending order chronologically: ", desc_books_year(books));
console.log("books in ascending order sorted by authors first name: ", asc_books_first_name(books));
console.log("books in descending order sorted by authors first name: ", desc_books_first_name(books));
console.log("books in ascending order sorted by authors last name: ", asc_books_last_name(books));
console.log("books in descending order sorted by authors last name: ", desc_books_last_name(books));

const testBooks = test ("Books");