
const Book = ({img, title, author, id, findBook, number}) => {

  return (
    <article className='book_component'>
      <img src={img} alt={title} />
      <h2 className="book_title">{title}</h2>
      <h4 className="book_author">{author} </h4>
      <span className='book_number'>{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
// This component is used to display the book information.

