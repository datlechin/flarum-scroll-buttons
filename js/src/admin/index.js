import app from 'flarum/admin/app';

app.initializers.add('datlechin/flarum-scroll-buttons', () => {
  app.extensionData
    .for('datlechin-scroll-buttons')
    .registerSetting({
      setting: 'datlechin-scroll-buttons.scroll-to-top-button',
      label: app.translator.trans('datlechin-flarum-scroll-buttons.admin.scroll_to_top_button_label'),
      help: app.translator.trans('datlechin-flarum-scroll-buttons.admin.scroll_to_top_button_help'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'datlechin-scroll-buttons.scroll-to-bottom-button',
      label: app.translator.trans('datlechin-flarum-scroll-buttons.admin.scroll_to_bottom_button_label'),
      help: app.translator.trans('datlechin-flarum-scroll-buttons.admin.scroll_to_bottom_button_help'),
      type: 'boolean',
    });
});
