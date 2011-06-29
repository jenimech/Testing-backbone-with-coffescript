(function() {
  (function($) {
    var Item, ItemView, List, ListView, listView;
    Item = Backbone.Model.extend({
      defaults: {
        part1: "Hello",
        part2: "World"
      }
    });
    List = Backbone.Collection.extend({
      model: Item
    });
    ItemView = Backbone.View.extend({
      tagName: "li",
      initialize: function() {
        return _.bindAll(this, 'render');
      },
      render: function() {
        $(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
        return this;
      }
    });
    ListView = Backbone.View.extend({
      el: $('body'),
      events: {
        'click button#add': 'addItem'
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
        var itemView;
        itemView = new ItemView({
          model: item
        });
        return $('ul', this.el).append(itemView.render().el);
      }
    });
    return listView = new ListView();
  })($);
}).call(this);
