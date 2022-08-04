const containerNotif = document.getElementById('notification');
const notification = document.querySelector('.notification-panel');
const btnNotif = document.querySelector('.btn-notif');

// animation notification hide with sliding up
btnNotif.addEventListener('click', () => {
  containerNotif.style.transitionDuration = '800ms';
  containerNotif.style.overflow = 'hidden';
  containerNotif.style.height = '0px';
  notification.style.transitionDuration = '500ms';
  notification.style.overflow = 'hidden';
  notification.style.height = '0px';
});

// animation newsletter pop up

const newsLetter = document.querySelector('.newsletter-notif');
let isClosed = false;
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 0) {
    notification.style.position = 'fixed';
  } else {
    notification.style.position = 'relative';
  }
  if (!isClosed && window.pageYOffset >= 300) {
    newsLetter.style.bottom = '0';
    newsLetter.style.transitionDuration = '800ms';
  }
});

const closeNews = document.getElementById('close');
closeNews.addEventListener('click', () => {
  isClosed = true;
  newsLetter.removeAttribute('style');
  setInterval(() => {
    isClosed = false;
  }, 600000);
});

// const newsUp = () => {};
