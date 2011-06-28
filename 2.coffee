(($) ->
  ListView = Backbone.View.extend
    el: $('body')

    events: 
      "click button#add": "addItem"

    initialize: ->
      _.bindAll(@, 'render', 'addItem')
      @counter = 0
      @render()

    render: ->
      $(@el).append("<button id='add'>Add list item</button>")
      $(@el).append("<ul></ul>")

    addItem: ->
      @counter++
      $("ul", @el).append("<li>hello world"+@counter+"</li>")  
  
  listView = new ListView()
)($)