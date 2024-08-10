const tabsButtons = document.querySelectorAll('.tab-button__button');
const tabsContents = document.querySelectorAll('.tab-content__list');

const initTabs = () => {
  if (!tabsButtons || !tabsContents) {
    return;
  }

  tabsButtons.forEach((item) => {
    item.addEventListener('click', () => {
      const currentButton = item;
      const tabId = currentButton.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId);

      if (currentButton.classList.contains('tab-button__button--active')) {
        return;
      }

      tabsButtons.forEach((button) => {
        button.classList.remove('tab-button__button--active');
      });

      tabsContents.forEach((content) => {
        content.classList.remove('tab-content__list--active');
      });

      currentButton.classList.add('tab-button__button--active');
      currentTab.classList.add('tab-content__list--active');
    });
  });
};

export { initTabs };
