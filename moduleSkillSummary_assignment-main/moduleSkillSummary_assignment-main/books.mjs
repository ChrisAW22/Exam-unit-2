import test from "./tests.mjs";
import {books} from "./data.mjs";

function booksFunction(books, result, author) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return result; 
    }

    for (const book of books) {
        if (book && book.title) {
            const part = book.title.slice(0, 3);
            if (part === "The") {
                result.the.push(book);
            }
        }
        if (book && book.author) {
            if (book.author.match("t")) {
                result.t_authors.push(book);
            }
        }

        if (book && typeof book.publication_year === "number") {
            if (book.publication_year > 1992) {
                result.after_1992 = result.after_1992 + 1;
            }
            if (book.publication_year < 2004) {
                result.before_2004 = result.before_2004 + 1;
            }
        }

        if (book && book.author === author) {
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
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => a.title.localeCompare(b.title));
}

function desc_books_name(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => b.title.localeCompare(a.title));
}

function asc_books_year(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => a.publication_year - b.publication_year);
}

function desc_books_year(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => b.publication_year - a.publication_year);
}

function asc_books_first_name(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => a.author.split(" ")[0].localeCompare(b.author.split(" ")[0]));
}

function desc_books_first_name(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => b.author.split(" ")[0].localeCompare(a.author.split(" ")[0]));
}

function asc_books_last_name(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => a.author.split(" ").slice(-1)[0].localeCompare(b.author.split(" ").slice(-1)[0]));
}

function desc_books_last_name(books) {
    if (!Array.isArray(books)) {
        console.log("Error: books is not an array.");
        return [];
    }
    return books.sort((a, b) => b.author.split(" ").slice(-1)[0].localeCompare(a.author.split(" ").slice(-1)[0]));
}

book_result = booksFunction(books, book_result, "Terry Pratchett");
console.log("Books starting with 'The': ", book_result.the);
console.log("Authors with 't' in their name: ", book_result.t_authors);
console.log("Number of books written after 1992: ", book_result.after_1992);
console.log("Number of books written before 2004: ", book_result.before_2004);
console.log("ISBN numbers for all books written by Terry Pratchett: ", book_result.isbn);
console.log("Books in ascending order sorted by name: ", asc_books_name(books));
console.log("Books in descending order sorted by name: ", desc_books_name(books));
console.log("Books in ascending order chronologically: ", asc_books_year(books));
console.log("Books in descending order chronologically: ", desc_books_year(books));
console.log("Books in ascending order sorted by authors first name: ", asc_books_first_name(books));
console.log("Books in descending order sorted by authors first name: ", desc_books_first_name(books));
console.log("Books in ascending order sorted by authors last name: ", asc_books_last_name(books));
console.log("Books in descending order sorted by authors last name: ", desc_books_last_name(books));

const testBooks = test ("Books");

// Valid Cases
testBooks.isEqual(book_result.the.length > 0, true, "books starting with 'The' should return books with 'The' in title");
testBooks.isEqual(book_result.t_authors.length > 0, true, "authors with 't' in their name should return authors with 't' in their name");
testBooks.isInRange(book_result.after_1992, 0, books.length, "number of books written after 1992 should be within the valid range");
testBooks.isInRange(book_result.before_2004, 0, books.length, "number of books written before 2004 should be within the valid range");
testBooks.isEqual(book_result.isbn.length > 0, true, "isbn numbers for all books written by Terry Pratchett should return an array of isbn numbers");

// Sorting Functions - Ascending and Descending Tests
testBooks.isEqual(asc_books_name(books)[0].title, "A", "books in ascending order sorted by name should have the first book starting with 'A'");
testBooks.isEqual(desc_books_name(books)[0].title, "Z", "books in descending order sorted by name should have the first book starting with 'Z'");

testBooks.isEqual(asc_books_year(books)[0].publication_year, Math.min(...books.map(b => b.publication_year)), "books in ascending order chronologically should have the first book being the earliest published");
testBooks.isEqual(desc_books_year(books)[0].publication_year, Math.max(...books.map(b => b.publication_year)), "books in descending order chronologically should have the first book being the latest published");

testBooks.isEqual(asc_books_first_name(books)[0].author.split(" ")[0], "A", "books in ascending order sorted by authors first name should have the first author starting with 'A'");
testBooks.isEqual(desc_books_first_name(books)[0].author.split(" ")[0], "Z", "books in descending order sorted by authors first name should have the first author starting with 'Z'");

testBooks.isEqual(asc_books_last_name(books)[0].author.split(" ").slice(-1)[0], "A", "books in ascending order sorted by authors last name should have the first author last name starting with 'A'");
testBooks.isEqual(desc_books_last_name(books)[0].author.split(" ").slice(-1)[0], "Z", "books in descending order sorted by authors last name should have the first author last name starting with 'Z'");

// Edge Cases
testBooks.isEqual(asc_books_name([]), [], "empty book array should return an empty array when sorted by name");
testBooks.isEqual(asc_books_year([]), [], "empty book array should return an empty array when sorted by year");
testBooks.isEqual(asc_books_first_name([]), [], "empty book array should return an empty array when sorted by author's first name");
testBooks.isEqual(asc_books_last_name([]), [], "empty book array should return an empty array when sorted by author's last name");

// Incorrect Inputs
testBooks.isEqual(asc_books_name("invalid"), [], "invalid input (non-array) should return an empty array when sorted by name");
testBooks.isEqual(asc_books_year("invalid"), [], "invalid input (non-array) should return an empty array when sorted by year");
testBooks.isEqual(asc_books_first_name("invalid"), [], "invalid input (non-array) should return an empty array when sorted by author's first name");
testBooks.isEqual(asc_books_last_name("invalid"), [], "invalid input (non-array) should return an empty array when sorted by author's last name");
testBooks.isEqual(booksFunction("invalid"), undefined, "invalid input (non-array) should return undefined");