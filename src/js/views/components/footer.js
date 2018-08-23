fun.views.footer = Backbone.View.extend({
  events: {
    'click .navigate': 'navigate'
  },

  template: _.template(fun.utils.getTemplate(fun.conf.templates.components.footer)),

  render: function () {
    this.$el.html(this.template(fun.strings));
    return this;
  },

  navigate: function (event) {
    event.preventDefault();
    var href = $(event.target).attr('href');
    Backbone.history.navigate(href, {trigger: true});
  }

})