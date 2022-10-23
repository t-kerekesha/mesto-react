import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard('');
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {isEditProfilePopupOpen &&
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          classContainer="popup__container_type_two-input"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__item">
            <input id="name-input"
              type="text"
              name="name"
              className="form__input"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required/>
            <span className="name-input-error form__input-error"></span>
          </div>
          <div className="form__item">
            <input id="about-input"
              type="text"
              name="about"
              className="form__input"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required/>
            <span className="about-input-error form__input-error"></span>
          </div>
          <button type="submit"
            className="form__save-button">
              Сохранить
          </button>
        </PopupWithForm>
      }

      {isEditAvatarPopupOpen &&
        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          classContainer="popup__container_type_one-input"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__item">
            <input id="avatar-input"
              type="url"
              name="avatar"
              className="form__input"
              placeholder="Ссылка на аватар"
              required/>
            <span className="avatar-input-error form__input-error"></span>
          </div>
          <button type="submit"
            className="form__save-button">
              Сохранить
          </button>
        </PopupWithForm>
      }

      {isAddPlacePopupOpen &&
        <PopupWithForm
          title="Новое место"
          name="add-image"
          classContainer="popup__container_type_two-input"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="form__item">
            <input id="title-input"
              type="text"
              name="title"
              className="form__input"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required/>
            <span className="title-input-error form__input-error"></span>
          </div>
          <div className="form__item">
            <input id="link-input"
              type="url"
              name="link"
              className="form__input"
              placeholder="Ссылка на картинку"
              required/>
            <span className="link-input-error form__input-error"></span>
          </div>
          <button type="submit"
            className="form__save-button">
              Создать
          </button>
        </PopupWithForm>
      }

      {isConfirmationPopupOpen &&
        <PopupWithForm
          title="Вы уверены?"
          name="confirm-delete"
          classContainer="popup__container_type_confirmation"
        >
          <button type="submit" class="form__save-button">Да</button>
        </PopupWithForm>
      }

      {selectedCard &&
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />
        }
    </>
  );
}

export default App;
