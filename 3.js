(function() {
  (function($) {
    var Item, List, ListView, listView;
    Item = Backbone.Model.extend({
      defaults: {
        part1: "Hello",
        part2: "Word"
      }
    });
    List = Backbone.Collection.extend({
      model: Item
    });
    ListView = Backbone.View.extend({
      el: $('body'),
      events: {
        "click button#add": 'addItem'
      },
      initialize: function() {
        _.bindAll(this, 'render', 'addItem', 'appendItem');
        this.collection = new List();
        this.collection.bind('add', this.appendItem);
        this.counter = 0;
        return this.render();
      },
      render: function() {
        $(this.el).append("<button id='add'>Add list item</button>");
        $(this.el).append("<ul></ul>");
        return _(this.collection.models).each(function(item) {
          return appendItem(item);
        }, this);
      },
      addItem: function() {
        var item;
        this.counter++;
        item = new Item();
        item.set({
          part2: item.get('part2') + this.counter
        });
        return this.collection.add(item);
      },
      appendItem: function(item) {
        return $('ul', this.el).append("<li>" + item.get('part1') + " " + item.get('part2') + "</li>");
      }
    });
    return listView = new ListView();
  })($);
}).call(this);
