if (Horses.find().count() === 0) {
  Horses.insert({
    name: 'Dunny',
    breed: 'Quarter Horse',
    imageURL: 'horse1',
    thumbURL: 'horsethumb1'
  });

  Horses.insert({
    name: 'Sam',
    breed: 'Quarter Horse',
    imageURL: 'horse2',
    thumbURL: 'horsethumb2'
  });

  Horses.insert({
    name: 'Gamble',
    breed: 'Arabian',
    imageURL: 'horse3',
    thumbURL: 'horsethumb3'
  });

  Horses.insert({
    name: 'Sultan',
    breed: 'Quarter Horse',
    imageURL: 'horse4',
    thumbURL: 'horsethumb4'
  });

  Horses.insert({
    name: 'Memphis',
    breed: 'Throughbred',
    imageURL: 'horse5',
    thumbURL: 'horsethumb5'
  });

  Horses.insert({
    name: 'Zanny',
    breed: 'Belgian',
    imageURL: 'horse6',
    thumbURL: 'horsethumb6'
  });
}