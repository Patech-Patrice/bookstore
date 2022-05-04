import { createContext, useState } from 'react';

import Books from  '/Users/patricedrayton/bookstore/bookable/src/components/books/books.js'

export const BookContext = createContext({
    books: [],
});

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState(Books);
    const value = {books};
    return <BookContext.Provider 
                value={value}> {children}
            </BookContext.Provider>; 
}