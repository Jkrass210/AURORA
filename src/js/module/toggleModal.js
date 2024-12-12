export function toggleModal(buttonSelector, modalSelector, closeBtnClass, innerModalClass) {
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll(buttonSelector);

        buttons.forEach((btn) => {
            const modal = btn.nextElementSibling;

            if (modal && modal.matches(modalSelector)) {
                const closeButton = modal.querySelector(closeBtnClass);
                const innerModal = modal.querySelector(innerModalClass);

                const openModal = () => {
                    modal.classList.add('active');
                    document.body.classList.add('stop-scroll');
                };

                const closeModal = () => {
                    modal.classList.remove('active');
                    document.body.classList.remove('stop-scroll');
                };

                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    openModal();
                });

                modal.addEventListener('click', (event) => {
                    if (!innerModal.contains(event.target)) {
                        closeModal();
                    }
                });

                if (innerModal) {
                    innerModal.addEventListener('click', (event) => {
                        event.stopPropagation();
                    });
                }

                if (closeButton) {
                    closeButton.addEventListener('click', (event) => {
                        event.preventDefault();
                        closeModal();
                    });
                }

                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape' && modal.classList.contains('active')) {
                        closeModal();
                    }
                });
            }
        });
    });
}

