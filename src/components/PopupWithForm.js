import React from "react";

function PopupWithForm(props) {

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, []);

  function handleEscClose(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function close() {
    props.onClose();
  }

  return(
    <div className={`popup popup_type_form popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
      onMouseDown={close}>
      <button className="popup__close-button button"
        type="button"
        aria-label="Закрыть"
        onMouseDown={close}>
      </button>
      <form className={`popup__container ${props.classContainer} form`}
        name="edit-profile"
        noValidate>
        <h2 className="form__title">
          {props.title}
        </h2>
        {props.children}
        <button type="submit"
          className="form__save-button">
            {props.buttonText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
