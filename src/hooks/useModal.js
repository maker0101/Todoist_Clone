import { useEffect } from 'react';

export default function useModal() {
	// QUESTION: Is it ok to have useEffect inside a function here?
	const closeModalOnOverlayClick = (ref, handler) => {
		useEffect(() => {
			const listener = (event) => {
				const el = ref?.current;
				const modalOverlayWasClicked = el.className === event.target.className;

				if (!modalOverlayWasClicked) {
					return;
				}

				handler(event);
			};

			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		}, [ref, handler]);
	};

	return { closeModalOnOverlayClick };
}
