const Card = () => {
  let cardData = {
    imgUrl: "http://picsum.photos/100/60",
    cardTitle: "El título",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    buttonLink: "#",
    buttonText: "Ver más",
    cardCol: "card col-2 rounded-3",
  };

  let cardObj = [cardData, cardData, cardData, cardData];

  return (
    <div className="col-12 bg-light p-5 d-flex align-items-center justify-content-center " id="cardContainer">
      {cardObj.map((card, i) => {
        return (
          <>
            <div className={card.cardCol} key={i}>
              <img className="card-img-top" src={card.imgUrl} alt="" />
              <div className="card-body p-4">
                <h5 className="card-title">{card.cardTitle}</h5>
                <p className="card-text">{card.description}</p>
                <a href={card.buttonLink} className="btn btn-primary">
                  {card.buttonText}
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
