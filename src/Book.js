
const Book = ({img, title, author, id, findBook, incrementObj}) => {

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => findBook(id)}>Click me</button>
      <h4>{author} </h4>
    </article>
  );
};

export default Book;
// This component is used to display the book information.

