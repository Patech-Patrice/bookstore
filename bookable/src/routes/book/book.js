import BOOK_DATA from '../../book-data.json';


const Book = () => {
    return (
        <div>
            {BOOK_DATA.map(({ id, genre }) => (
                <div key={id}>
                    <h1>{genre}</h1>
                    </div>
            ))}
            </div>
    );
};

export default Book;