import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import ScrollListener from 'flarum/common/utils/ScrollListener';

export default class ScrollButtons extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.visible = false;
    this.scrollListener = new ScrollListener(this.onscroll.bind(this));
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    this.scrollListener.start();
  }

  onremove(vnode) {
    super.onremove(vnode);
    this.scrollListener.stop();
  }

  view() {
    const showTop = app.forum.attribute('scrollToTopButton');
    const showBottom = app.forum.attribute('scrollToBottomButton');

    return (
      <div className={'ScrollButtons' + (this.visible ? ' is-visible' : '')}>
        {showTop && (
          <Button className="Button Button--icon ScrollButtons-button" icon="fas fa-angle-double-up" onclick={this.scrollToTop.bind(this)} />
        )}
        {showBottom && (
          <Button className="Button Button--icon ScrollButtons-button" icon="fas fa-angle-double-down" onclick={this.scrollToBottom.bind(this)} />
        )}
      </div>
    );
  }

  onscroll(top) {
    const visible = top > 50;
    if (visible !== this.visible) {
      this.visible = visible;
      m.redraw();
    }
  }

  scrollToTop() {
    const routeName = app.current.data.routeName;
    if (routeName === 'discussion' || routeName === 'discussion.near') {
      app.current.data.stream.goToFirst();
    } else {
      window.scrollTo(0, 0);
    }
  }

  scrollToBottom() {
    const routeName = app.current.data.routeName;
    if (routeName === 'discussion' || routeName === 'discussion.near') {
      app.current.data.stream.goToLast();
    } else {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
}
