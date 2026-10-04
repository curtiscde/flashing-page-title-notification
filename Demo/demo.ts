import { pageTitleNotification } from '../src/index';

document.querySelector('.btn-on')?.addEventListener('click', () => {
  pageTitleNotification.on('test', 1000);
});

document.querySelector('.btn-off')?.addEventListener('click', () => {
  pageTitleNotification.off();
});
