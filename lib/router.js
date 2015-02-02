Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('horses'); }
});

Router.route('/', {name: 'horsesList'});