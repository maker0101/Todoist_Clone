export const closeModalOnOverlayClick = (ref, handler) => {
  const listener = (event) => {
    const el = ref?.current;
    const modalOverlayWasClicked = el.className === event.target.className;

    if (!modalOverlayWasClicked) return;

    handler(event);
  };

  document.addEventListener('mousedown', listener);
  document.addEventListener('touchstart', listener);

  return () => {
    document.removeEventListener('mousedown', listener);
    document.removeEventListener('touchstart', listener);
  };
};
