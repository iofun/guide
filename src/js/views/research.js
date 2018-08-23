fun.views.research = Backbone.View.extend({
  events: {
    'click .navigate': 'navigate'
  },

  template: _.template(fun.utils.getTemplate(fun.conf.templates.research)),

  render: function () {
    this.$el.html(this.template(fun.strings));
    this.extra();
    return this;
  },

  extra: function () {
    var extraView = new fun.views.extra({el: '#fun_e'});
    extraView.render();
  },

  navigate: function (event) {
    event.preventDefault();
    var href = $(event.target).attr('href');
    Backbone.history.navigate(href, {trigger: true});
  }

})