var horsesData = [
  {
    name: 'Dunny',
    imageURL: 'horse1.jpg',
    thumbURL: 'horsethumb1.jpg'
  }, 
  {
    name: 'Sam',
    imageURL: 'horse2.jpg',
    thumbURL: 'horsethumb2.jpg'
  }, 
  {
    name: 'Gamble',
    imageURL: 'horse3.jpg',
    thumbURL: 'horsethumb3.jpg'
  }
];

Template.horsesList.helpers({
  horses: function() {
    return Horses.find();
  }
});
