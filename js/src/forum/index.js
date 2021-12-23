import app from 'flarum/forum/app';
import { extend } from 'flarum/forum/extend';
import ForumApplication from 'flarum/forum/ForumApplication';
import ScrollButton from './components/ScrollButon';

app.initializers.add('datlechin/flarum-scroll-buttons', () => {
  extend(ForumApplication.prototype, 'mount', () => {
    const div = document.createElement('div');
    div.classList.add('ScrollButtons');
    app.initializers.has('acpl/mobile-tab') || app.initializers.has('itnt-uitab') ? div.classList.add('has-MobileTab') : null;
    m.mount(document.body.appendChild(div), ScrollButton);
  });
});
