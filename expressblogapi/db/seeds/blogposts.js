exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogposts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('blogposts').insert([
        {
          title: 'hello',
          content:
            'Cupidatat reprehenderit voluptate ipsum laboris dolor sit consequat cillum consectetur fugiat ipsum nisi ut.'
        },
        { title: 'awesome', content: 'Enim sunt ut sunt aute.' },
        { title: 'world', content: 'Mollit dolore ut id eu dolor.' }
      ]);
    });
};
