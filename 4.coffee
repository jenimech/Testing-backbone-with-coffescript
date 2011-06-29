(($) ->
  Item = Backbone.Model.extend
    defaults:
      part1: "Hello"
      part2: "World"
  
  List = Backbone.Collection.extend
    model: Item

  ItemView = Backbone.View.extend
    tagName: "li"
    initialize: ->
      _.bindAll(@, 'render')
    render: ->
      $(@el).html('<span>'+@model.get('part1')+' '+@model.get('part2')+'</span>')
      return @

  ListView = Backbone.View.extend
    el: $('body')
    events: 
      'click button#add': 'addItem'
    initialize: ->
      _.bindAll(@, 'render', 'addItem', 'appendItem')
      @collection = new List()
      @collection.bind('add', @appendItem)
      @counter = 0
      @render()
    render: ->
      $(@el).append("<button id='add'>Add list item</button>")
      $(@el).append("<ul></ul>")
      _(@collection.models).each((item) ->
        appendItem(item)
      @)
    addItem: ->
      @counter++
      item = new Item()
      item.set part2: item.get('part2') + @counter
      @collection.add(item)
    appendItem: (item) ->
      itemView = new ItemView(model: item)
      $('ul', @el).append(itemView.render().el)

  listView = new ListView()
)($)