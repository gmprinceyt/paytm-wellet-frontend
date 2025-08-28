// Navigate Event
const locationNavigate = new Event("navigate");

// Link
const Link = ({ to, children, ...props }) => {
  function handler(e) {
    e.preventDefault();
    history.pushState({}, null, to);
    window.dispatchEvent(locationNavigate);
  }

  return (
    <a href={to} onClick={handler} {...props}>
      {children}
    </a>
  );
};

// Navigate
export const Navigate = (to) => {
  history.replaceState({}, null, to);
  window.dispatchEvent(locationNavigate);
  window.location.reload();
};

export default Link;
