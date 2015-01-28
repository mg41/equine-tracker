Iron.utils.debug = true;

Horses = new Mongo.Collection("horses");

Router.route('/', {
  controller: 'HorseController',
  action: 'index'
  //name: 'home'
});

Router.route('/horses', {
  controller: 'HorseController',
  action: 'index'
});

Router.route('/horses/:_id', {
  controller: 'HorseController',
  action: 'show'
});

if (Meteor.isClient) {
  Meteor.subscribe("horses");

  ApplicationController = RouteController.extend({
    layoutTemplate: 'AppLayout',

/*    onBeforeAction: function () {
      console.log('app before hook!');
      this.next();
    },
*/
    action: function () {
      console.log('this should be overridden!');
    }
  });

  HorseController = ApplicationController.extend({

    show: function () {
      var id = this.params._id;
      this.render('HorseShow', {
        data: {
          horse_id: this.params._id
        }
      });
    },

    index: function () {
      this.render('HorseIndex');
    }

  });
}

if (Meteor.isServer) {
  Meteor.publish("horses", function () {
    return Horses.find( );
  });
}