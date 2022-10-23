import React from "react";

function ImagePopup(props) {

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

  return (
    <div className={`popup popup_type_zoom-image ${props.card != null && 'popup_opened'}`}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
      onMouseDown={close}>
      <button className="popup__close-button button"
        type="button"
        aria-label="Закрыть"
        onMouseDown={close}>
      </button>
      <figure className="popup__container popup__container_type_zoom-image">
        <img src={props.card != null ? props.card.link : "#"}
          className="popup__zoom-image"
          alt={props.card != null ? props.card.name : "" } />
        <figcaption className="popup__zoom-caption">
          {props.card != null ? props.card.name : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
