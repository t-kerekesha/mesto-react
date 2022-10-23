import React from "react";
import Tooltip from "./Tooltip";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.openTooltip = this.openTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
    this.state = {
      like: false,
      isOpenTooltip: false,
      likes: [],
      positionTooltip: {}
    };
  }

  handleCardClick(card) {
    this.props.onCardClick(card);
  }

  openTooltip({ likes, top, left }) {
    this.setState({
      isOpenTooltip: true,
      likes: likes,
      positionTooltip: {
        top: top,
        left: left
      }
    });
  }

  closeTooltip() {
    this.setState({ isOpenTooltip: false});
  }

  render() {
    return (
      <>
      {this.props.cards.map((card, i) => (
        <li key={card._id} className="gallery__list-item">
          <figure className="card">
            <div className="card__aspect-ratio">
              <img src={card.link}
                className="card__image"
                alt={card.name}
                onClick={() => {
                  this.handleCardClick(card);
                }}
              />
            </div>
            <button className="card__delete-button button"
              type="button"
              aria-label="Удалить">
            </button>
            <figcaption className="card__container-caption">
              <h2 className="card__caption">
                {card.name}
              </h2>
              <button className="card__like-button"
                type="button"
                aria-label="Лайк"
                onMouseEnter={(event) => {
                  if(card.likes.length > 0) {
                    this.openTooltip({
                      likes: card.likes,
                      top: event.pageY,
                      left: event.pageX
                    })
                  }
                }}
                onMouseLeave={this.closeTooltip} >
              </button>
              <p className="card__like-counter">
                {card.likes.length}
              </p>
            </figcaption>
          </figure>
        </li>
      ))}

      {this.state.isOpenTooltip &&
        <Tooltip
          isOpen={this.state.isOpenTooltip}
          likes={this.state.likes}
          position={this.state.positionTooltip} />
      }
      </>
    );
  }
}

export default Card;
