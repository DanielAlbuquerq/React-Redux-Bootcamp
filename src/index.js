import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const author = 'Jordan Moore';
const title = 'Interesting Facts For Curious Minds';
const imgSrc = 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return (
    <article className='book'>
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <h4 style={inlineHeadingStyles}> {author} </h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);