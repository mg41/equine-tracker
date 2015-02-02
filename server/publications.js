Meteor.publish('horses', function() {
  return Horses.find();
});
