const accordionButtons = document.querySelectorAll('.faq-content button');
const faqTabsButtons = document.querySelectorAll('.faq-button__button');
const faqTabsContents = document.querySelectorAll('.faq-content');

const initFaqAccordion = () => {
  if (!accordionButtons) {
    return;
  }

  accordionButtons.forEach((button) => {
    button.addEventListener('click', buttonHandler);
  });

  function buttonHandler(e) {
    e.preventDefault();
    const currentBox = e.target.closest('.faq-content__item');
    const currentContent = currentBox.querySelector('div');

    currentBox.classList.toggle('faq-content__item--active');

    if (currentBox.classList.contains('faq-content__item--active')) {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    } else {
      currentContent.style.maxHeight = 0;
    }

    window.addEventListener('resize', () => {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    });
  }

  document.querySelector('.faq-content button').click();
};

const faqInitTabs = () => {
  if (!faqTabsButtons || !faqTabsContents) {
    return;
  }

  faqTabsButtons.forEach((item) => {
    item.addEventListener('click', () => {
      const currentButton = item;
      const tabId = currentButton.getAttribute('data-tab');
      const currentTub = document.querySelector(tabId);

      if (currentButton.classList.contains('faq-button__button--active')) {
        return;
      }

      faqTabsButtons.forEach((button) => {
        button.classList.remove('faq-button__button--active');
      });

      faqTabsContents.forEach((content) => {
        content.classList.remove('faq-content--active');
      });

      currentButton.classList.add('faq-button__button--active');
      currentTub.classList.add('faq-content--active');
    });
  });
};

export { initFaqAccordion, faqInitTabs };
