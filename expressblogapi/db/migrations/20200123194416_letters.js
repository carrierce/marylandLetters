exports.up = function(knex) {
  return knex.schema.createTable('letters', table => {
    table.increments('letter_id');
    table.text('concludingNote');
    table.integer('day');
    table.string('fromFirstName');
    table.string('fromLastName');
    table.integer('letterId');
    table.integer('month');
    table.text('notes');
    table.text('openingNote');
    table.string('place');
    table.text('postmark');
    table.text('print');
    table.text('separator');
    table.integer('sumWords');
    table.text('text');
    table.text('toAddress');
    table.text('toPersonFromPerson');
    table.text('to');
    table.text('wholeDate');
    table.integer('wordCount');
    table.integer('year');
    table.timestamp('create_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knew.schema.dropTable('letters');
};
