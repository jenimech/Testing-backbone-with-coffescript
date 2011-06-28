(($) ->
  ListView = Backbone.View.extend
    el: $('body')
    initialize: -> 
      _.bindAll(@, 'render')
      @render()
    render: -> $(@el).append("<ul> <li>hello world</li> </ul>")
  listView = new ListView()
)($)