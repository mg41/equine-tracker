if (Horses.find().count() === 0) {
  Horses.insert({
    name: 'Dunny',
    breed: 'Quarter Horse',
    imageURL: 'horse1.jpg',
    thumbURL: 'horsethumb1.jpg'
  });

  Horses.insert({
    name: 'Sam',
    breed: 'Quarter Horse',
    imageURL: 'horse2.jpg',
    thumbURL: 'horsethumb2.jpg'
  });

  Horses.insert({
    name: 'Gamble',
    breed: 'Arabian',
    imageURL: 'horse3.jpg',
    thumbURL: 'horsethumb3.jpg'
  });

  Horses.insert({
    name: 'Sultan',
    breed: 'Quarter Horse',
    imageURL: 'horse4.jpg',
    thumbURL: 'horsethumb4.jpg'
  });

  Horses.insert({
    name: 'Memphis',
    breed: 'Throughbred',
    imageURL: 'horse5.jpg',
    thumbURL: 'horsethumb5.jpg'
  });

  Horses.insert({
    name: 'Zanny',
    breed: 'Belgian',
    imageURL: 'horse6.jpg',
    thumbURL: 'horsethumb6.jpg'
  });
}