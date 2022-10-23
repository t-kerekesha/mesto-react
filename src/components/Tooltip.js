import React from "react";

function Tooltip(props) {
  const [isOpen, setOpen] = React.useState(props.isOpen);
  const [position, setPosition] = React.useState({
    top: props.position.top,
    left: props.position.left,
    right: 'auto'
  });
  const tooltip = React.useRef(null);

  React.useEffect(() => {
    const coords = tooltip.current.getBoundingClientRect();
    if(coords.right > document.documentElement.clientWidth) {
      setPosition({
        top: position.top,
        left: 'auto',
        right: 0
      })
    }
  }, []);

  return (
    <div className={`tooltip-likes ${isOpen && 'popup_opened'}`}
      ref={tooltip}
      style={{
            top: position.top,
            left: position.left,
            right: position.right
          }}>
      {props.likes.map((like, i) => (
        <img key={like._id}
          src={like.avatar}
          className="tooltip-likes__avatar" />
      ))}
    </div>
  );
}

export default Tooltip;
