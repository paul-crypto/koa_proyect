
exports.up = function(knex) {
    return knex.schema.createTable('movies', table =>{
        table.increments();
        table.string('name').notNullable().unique();
        table.string('sinopsis');
        table.integer('raiting').notNullable();
        table.string('cover_image').notNullable().defaultTo('https://cdn3.movieweb.com/i/article/GjNrMP3WRlxGDgWDvGmwqvQ4CRhmEf/738:50/Thor-The-Dark-World-Empire-Magazine-Covers-And.jpg');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('movies');
};
