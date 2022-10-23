import React from "react";
import Card from "./Card";
import api from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((dataFromServer) => {
        setUserName(dataFromServer.name);
        setUserDescription(dataFromServer.about);
        setUserAvatar(dataFromServer.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsFromServer) => {
        setCards(cardsFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <img src={userAvatar}
          alt="Аватар"
          className="profile__avatar"/>
        <div className="profile__avatar-overlay"
          onClick={props.onEditAvatar}>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button button"
            onClick={props.onEditProfile}
            type="button"
            aria-label="Редактировать">
          </button>
          <p className="profile__about">
            {userDescription}
          </p>
        </div>
        <button className="profile__add-button button"
          onClick={props.onAddPlace}
          type="button"
          aria-label="Добавить картинку">
        </button>
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          <Card
            cards={cards}
            onCardClick={props.onCardClick} />
        </ul>
      </section>
    </main>
  );
}

export default Main;
