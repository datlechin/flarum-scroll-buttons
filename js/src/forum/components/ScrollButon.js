import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import classList from 'flarum/utils/classList';

export default class ScrollButton extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    window.onscroll = () => {
      this.scroll();
    };
  }

  view() {
    const className = classList('Button', 'Button--icon', 'ScrollButtons-button');
    const scrollTopIcon = 'fas fa-angle-double-up';
    const scrollBottomIcon = 'fas fa-angle-double-down';
    const scrollToTopButton = app.forum.attribute('scrollToTopButton')
      ? Button.component({
          className,
          icon: scrollTopIcon,
          onclick: () => {
            this.scrollToTop();
          },
        })
      : '';
    const scrollToBottomButton = app.forum.attribute('scrollToBottomButton')
      ? Button.component({
          className,
          icon: scrollBottomIcon,
          onclick: () => {
            this.scrollToBottom();
          },
        })
      : '';

    return (
      <>
        {scrollToTopButton}
        {scrollToBottomButton}
      </>
    );
  }

  scroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollButtonsClass = document.getElementsByClassName('ScrollButtons')[0];

    if (scrollTop > 0 && scrollTop < maxScroll) {
      scrollButtonsClass.classList.add('is-visible');
    } else {
      scrollButtonsClass.classList.remove('is-visible');
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
