Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('horses'); }
});

Router.route('/', {name: 'horsesList'});
Router.route('/horses/:_id', {
  name: 'horsePage',
  data: function() { return Horses.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'horsePage'});
