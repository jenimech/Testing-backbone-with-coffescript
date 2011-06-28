(function() {
  (function($) {
    var ListView, listView;
    ListView = Backbone.View.extend({
      el: $('body'),
      initialize: function() {
        _.bindAll(this, 'render');
        return this.render();
      },
      render: function() {
        return $(this.el).append("<ul> <li>hello world</li> </ul>");
      }
    });
    return listView = new ListView();
  })($);
}).call(this);
