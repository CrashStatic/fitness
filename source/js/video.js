const VIDEO_URL = 'https://www.youtube.com/embed/9TZXsZItgdw?si=3j81mTOex9oSFEt9&autoplay=1';
const VIDEO_TITLE = 'Бесплатные интерактивные онлайн-курсы';

const videoContainer = document.querySelector('.video');
const videoPlayBtn = document.querySelector('.video__button');
const videoPreviewImage = document.querySelector('.video__preview-image');

const initVideo = () => {
  if (!videoContainer || !videoPlayBtn || !videoPreviewImage) {
    return;
  }

  const createVideoIframe = () => {
    const videoIframe = document.createElement('iframe');
    videoIframe.classList.add('video__iframe');
    videoIframe.setAttribute('src', VIDEO_URL);
    videoIframe.setAttribute('title', VIDEO_TITLE);
    videoIframe.setAttribute('frameborder', '0');
    videoIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    videoIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    videoIframe.setAttribute('loading', 'lazy');
    videoIframe.setAttribute('allowfullscreen', '');
    videoContainer.appendChild(videoIframe);
  };

  videoPlayBtn.addEventListener('click', () => {
    videoPlayBtn.remove();
    videoPreviewImage.remove();
    videoContainer.classList.add('video--without-background');
    createVideoIframe();
  });
};

export { initVideo };
