(function() {
  (function($) {
    var Item, ItemView, List, ListView, listView;
    Backbone.sync = function(method, model, success, error) {
      return success();
    };
    Item = Backbone.Model.extend({
      defaults: {
        part1: "Hello",
        part2: "world"
      }
    });
    List = Backbone.Collection.extend({
      model: Item
    });
    ItemView = Backbone.View.extend({
      tagName: 'li',
      events: {
        "click span.swap": 'swap',
        "click span.delete": 'remove'
      },
      initialize: function() {
        _.bindAll(this, 'render', 'unrender', 'swap', 'remove');
        this.model.bind('change', this.render);
        return this.model.bind('remove', this.unrender);
      },
      render: function() {
        $(this.el).html('<span style="color:black;">' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
        return this;
      },
      unrender: function() {
        return $(this.el).remove();
      },
      swap: function() {
        var swapped;
        swapped = {
          part1: this.model.get('part2'),
          part2: this.model.get('part1')
        };
        return this.model.set(swapped);
      },
      remove: function() {
        return this.model.destroy();
      }
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
