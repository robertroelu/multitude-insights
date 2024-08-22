export const calendly = () => {
  const calButton = document.querySelectorAll('[calendly="open"]') as NodeListOf<HTMLElement>;
  if (!calButton) return;
  calButton.forEach((el) => {
    el.addEventListener('click', () => {
      Calendly.initPopupWidget({ url: 'https://calendly.com/joeryanbltn' });
      return false;
    });
  });
};
