import { useState } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
    setSelectedCard(null);
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

      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        classContainer="popup__container_type_two-input"
        buttonText="Сохранить"
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
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        classContainer="popup__container_type_one-input"
        buttonText="Сохранить"
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
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add-image"
        classContainer="popup__container_type_two-input"
        buttonText="Создать"
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
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="confirm-delete"
        classContainer="popup__container_type_confirmation"
        buttonText="Да" />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />
    </>
  );
}

export default App;
