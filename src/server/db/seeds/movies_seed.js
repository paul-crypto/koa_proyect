
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, 
        name: 'spiderman', 
        sinopsis: 'el hombre araña', 
        raiting: 5,
        cover_image: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
          },

        {id: 2, 
          name: 'Star Wars', 
          sinopsis: 'guerra de las galaxias', 
          raiting: 9,
          cover_image: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg'
          }
      ]);
    });
};
