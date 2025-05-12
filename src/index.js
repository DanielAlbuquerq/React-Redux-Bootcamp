import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import { books } from './books'; // Importing the books data
import Book from './Book'; // Importing the Book component
=======
import  {books} from './booksList.js'; // Importing the books data
import Book from './Book.js'; // Importing the Book component
>>>>>>> newbranch

function BookList() {

  //Destructuring to instanciate a component.
  // const {author, title, img} = firstBook

  //funtion to get the value and filter it
  const findBook = (id) => {

  const book = books.find((book) => book.id === id);
  console.log(book.id);
};  
//____________________
const [count, setCount] = useState(0);

const increaseCount = () => {
  setCount((prevCount) => prevCount + 1); // Increment count

};


//____________________
  return (
    <div className='bookContainer'>
      <h1 className='book_heading'>Amazon Best Sellers</h1>
      <section className='book_section'>
        {books.map((book, index) => {
          return <Book key={index} number={index} findBook={findBook} {...book} />
        })}
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);