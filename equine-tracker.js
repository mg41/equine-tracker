Iron.utils.debug = true;

Horses = new Mongo.Collection("horses");

Router.route('/', {
  controller: 'HorseController',
  action: 'index'
  //name: 'home'
});

Router.route('/horses', {
  this.redirect('/');
});

Router.route('/horses/:_id', {
  controller: 'HorseController',
  action: 'show'
});

Template.HorseShow.helpers({
  imagePath: function () { // data context set to profile
    return "images/horse" + this._id + ".jpg";
  }
});

Template.HorseIndex.helpers({
  imagePath: function () { // data context set to profile
    return "images/horsethumb" + this._id + ".jpg";
  }
});

if (Meteor.isClient) {
  Meteor.subscribe("horses");

  ApplicationController = RouteController.extend({
    layoutTemplate: 'AppLayout',

  });

  HorseController = ApplicationController.extend({

    show: function () {
      // get one horse
      this.render('HorseShow', {
        data: function() {
          return Horses.findOne( this.params._id );
        }
      });
    },

    index: function () {
      // get all the horses
      this.render('HorseIndex', {
        data: function() {
          return Horses.find();
        }
      });
    }

  });
}

if (Meteor.isServer) {
  Meteor.publish("horses", function () {
    return Horses.find( );
  });
}