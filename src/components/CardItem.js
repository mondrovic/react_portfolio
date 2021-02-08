import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <a
          href={props.path ? props.path : props.gh}
          className="cards-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img
              className="cards-item-img"
              alt="Sample from project"
              src={props.src}
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">Description: {props.text}</h5>
            <a href={props.gh}>{props.gh}</a>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
