export function Cards({ card }) {
  return (
    <>
      <div className="card-group">
        <div className="card">
          <img className="d-block w-30 mw-20" src={card.img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
/*<li className="">
      <img
        width={230}
        height={345}
        className=""
        src={imageUrl}
        alt={card.title}
      />
      <div>{card.title}</div>
    </li> */
