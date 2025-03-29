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
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

function BookList() {

  const {author, title, img} = firstBook

  return (
    <section className='booklist'>
      <Book author = {author} title= {title} img={img}/>
      <Book author = {author} title= {title} img={img}/>
      <Book author = {firstBook.author} title= {firstBook.title} img={firstBook.img}/>
    </section>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);