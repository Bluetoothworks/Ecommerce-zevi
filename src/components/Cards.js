const Cards = ({ detail }) => {
    // Extract text until the second empty space
    const extractText = (text) => {
      const words = text.split(' ');
      return words.slice(0, 2).join(' ');
    };
  
    return (
      <div className='suggestion-cards'>
        <img src={detail.image} alt={detail.title} />
        <p>{extractText(detail.title)}</p>
      </div>
    );
  };
  
  export default Cards;
  