import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
};

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

const Book = (props) => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
    </article>
  );
};

function BookList() {
  return (
    <section className='booklist'>
      <Book author = {firstBook.author} title= {firstBook.title} img={firstBook.img}/>
      <Book author = {firstBook.author} title= {firstBook.title} img={firstBook.img}/>
      <Book author = {firstBook.author} title= {firstBook.title} img={firstBook.img}/>
    </section>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);