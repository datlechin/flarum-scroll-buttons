import { extend } from 'flarum/forum/extend';
import ForumApplication from 'flarum/forum/ForumApplication';
import ScrollButton from './components/ScrollButon';

app.initializers.add('datlechin/flarum-scroll-buttons', () => {
  extend(ForumApplication.prototype, 'mount', () => {
    const footer = document.createElement('div');
    m.mount(document.body.appendChild(footer), ScrollButton);
  });
});
