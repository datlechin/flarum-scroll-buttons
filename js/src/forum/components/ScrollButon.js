import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import icon from 'flarum/helpers/icon';
import extractText from 'flarum/utils/extractText';
import classList from 'flarum/utils/classList';

export default class ScrollButton extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    window.onscroll = () => {
      this.scroll();
    };
  }

  view() {
    return (
      Button.component({
        icon: 'fas fa-angle-double-up',
        className: 'Button Button--icon ScrollButton',
        onclick: () => {
          this.scrollToTop();
        }
      })
    );
  }

  scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.element.classList.add('is-visible');
    } else {
      this.element.classList.remove('is-visible');
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
