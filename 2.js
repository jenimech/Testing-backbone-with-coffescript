(function() {
  (function($) {
    var ListView, listView;
    ListView = Backbone.View.extend({
      el: $('body'),
      events: {
        "click button#add": "addItem"
      },
      initialize: function() {
        _.bindAll(this, 'render', 'addItem');
        this.counter = 0;
        return this.render();
      },
      render: function() {
        $(this.el).append("<button id='add'>Add list item</button>");
        return $(this.el).append("<ul></ul>");
      },
      addItem: function() {
        this.counter++;
        return $("ul", this.el).append("<li>hello world" + this.counter + "</li>");
      }
    });
    return listView = new ListView();
  })($);
}).call(this);
