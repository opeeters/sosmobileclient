var ChartControlsView = (function() {
  return Backbone.View.extend({
    className: 'controls',
    template: Handlebars.helpers.getTemplate('chartControls'),
    
    events: {
      'click .action': 'perform',
      'click .view-settings-btn': 'openViewSettings',
      'click .range-settings-btn': 'openRangeSettings',
      'click .btn-prev-periode': 'prevPeriode',
      'click .btn-next-periode': 'nextPeriode',
      'click .btn-refresh': 'fireRefreshRequest'
    },
    subscriptions: {
      'chart:zoom:changed': 'highlight'
    },

    initialize: function() {
      this.listenTo(window.settings, 'change:timespan', this.render);
    },

    render: function() {
      var data = {
        timespan: window.settings.get('timespan')
      };

      this.$el.html(this.template(data));

      if (window.settings.get('timespan').label == "live") {
        this.$('.btn-prev-periode').hide();
        this.$('.btn-next-periode').hide();
      } else if (moment(window.settings.get('timespan').till).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")) {
        this.$('.btn-next-periode').hide();
        this.$('.btn-refresh').hide();
      } else {
        this.$('.btn-refresh').hide();
      }

      return this;
    },

    fireRefreshRequest: function() {
      window.settings.trigger('change:timespan'); 
    },

    prevPeriode: function() {
      window.settings.set('timespan', Helpers.getNearbyPeriode('subtract'));
    },

    nextPeriode: function() {
      window.settings.set('timespan', Helpers.getNearbyPeriode('add'));
    },

    highlight: function(ranges) {
      var resetBtn = this.$('.reset-btn');
      resetBtn.addClass('highlight');
      setTimeout(function() {
        resetBtn.removeClass('highlight');
      }, 1000);
    },

    openRangeSettings: function(e) {
      e.preventDefault();
      
      new ChartRangeSettingsView({model: window.settings}).render();
    },

    perform: function(e) {
      Helpers.performElementAction(e, false);
    }
  });
})();