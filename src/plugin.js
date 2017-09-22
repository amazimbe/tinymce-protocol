import Handlebars from 'handlebars';
import template from './template';

const plugin = (editor) => {
  editor.addButton('protocol', {
    tooltip: 'Protocol',
    icon: 'protocols',

    onclick() {
      editor.settings.store.findAll('protocol', { reload: true }).then(protocols => {
        protocols = protocols.filterBy('canEditContent', true).map(protocol => {
          return { title: protocol.get('title'), content: protocol.get('content') };
        });

        let view = { protocols: Handlebars.compile(template) };
        let html = view.protocols({ protocols });

        let window = editor.windowManager.open({
          title: 'Protocols',
          height: 360,
          width: 460,
          buttons: [{
            text: 'Cancel',
            onclick() {
              window.close();
            }
          }],
          html,
          classes: 'protocols-modal'
        });

        $('.available-protocols li a').click((event) => {
          let element = $(event.target);
          html = element.parent().find('.protocol-data').html();
          editor.insertContent(html);
          window.close();
        });
      });
    }
  });
};

export default plugin;
