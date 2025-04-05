import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
]


function BookList() {

  //Destructuring to instanciate a component.
  // const {author, title, img} = firstBook

  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={index} {...book} />
      })}
      <EventTest />
    </section>
  );
}

const EventTest = () => {
  const [value, setValue] = useState(' ');
  const handleInput = (e) => {
    console.log(e.target.value);
  }
  const handleSubmit = () => {
    alert(value);
    setValue(' ');
  }
  return (
   <section>
    <form>
      <input type='text' onChange={(e) => setValue(e.target.value)} value={value}/>
      <button type='button' onClick={handleSubmit}>Click me</button>
    </form>
   </section>
  )
}

const Book = ({img, title, autho}) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{autho} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);