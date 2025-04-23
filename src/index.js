import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books'; // Importing the books data
import Book from './Book'; // Importing the Book component

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
    <section className='booklist'>
      <h1>Book List</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
      {books.map((book, index) => {
        return <Book key={index} findBook={findBook} {...book} />
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);