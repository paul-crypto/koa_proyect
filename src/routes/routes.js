const Router = require('koa-router');
const queries = require('../server/db/queries/movies');
const router = new Router();

// Read
router.get('/', async ctx => {
    ctx.type = 'application/json';
    ctx.body = {
        status: 'succes',
        message: 'Taller de koa.js'
    }
})

router.get('/movies', async ctx => {
    try {
        const movies = await queries.getAllMovies();
        ctx.type = 'application/json';
        ctx.body = {
            status: 'succes',
            dta: movies
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'Not found',
            error
        }
    }
})

router.get('/movies/:id', async ctx => {
    ctx.type = 'application/json';

    try {
        const movie = await queries.getMovie(ctx.params.id)
        if (!movie.length) {
            ctx.status = 404;
            ctx.body = {
                status: 'Error',
                message: 'La pelicula no fue encontrada'
            }
            return;
        }
        ctx.status = 200;
        ctx.body = {
            status: 'succes',
            data: movie
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'Error',
            message: 'La pelicula no fue encontrada'
        }
    }
})

// Create
router.post('/', async ctx => {
    ctx.type = 'application/json';
    ctx.state = 201;
    ctx.body = {
        status: 'succes',
        message: 'esto es un POST'
    }
})

router.post('/movies', async ctx => {
    ctx.type = 'application/json';
    try {
        const movie = await queries.createMovie(ctx.request.body);
        if (movie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'succes',
                message: 'La pelicula fue creada correctamente',
                data: movie
            }
        } else {
            ctx.status = 422;
            ctx.body = {
                status: 'Error',
                message: 'Algo salio mal y la pelicula no fue creada'
            }
        }
    } catch (error) {
        ctx.status = 422;
        ctx.body = {
            status: 'Error',
            message: 'Algo salio mal y la pelicula no fue creada'
        }
    }
})

// Update
router.put('/update/miregistro', async ctx => {
    ctx.type = 'application/json';
    ctx.state = 201;
    ctx.body = {
        status: 'succes',
        message: 'esto es una actualización'
    }
})

router.put('/movies/:id', async ctx => {
    ctx.type = 'application/json';
    try {
        const { id } = ctx.params
        const { body } = ctx.request
        const updatedMovie = await queries.updateMovie(id, body);   
        
        if (updatedMovie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'succes',
                message: ' La pelicula fue actualizada con exito',
                data: updatedMovie
            }
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'Error',
            message: 'La pelicula no fue encontrada',
            data: error
        }
    }
})

//Delete
router.delete('/delete/miregistro', async ctx => {
    ctx.type = 'application/json';
    ctx.state = 201;
    ctx.body = {
        status: 'succes',
        message: 'esto es una eliminación'
    }
})

router.delete('/movies/:id', async ctx => {
    ctx.type = 'application/json';
    try {
        const { id } = ctx.params
        console.log(id);
        const deletedMovie = await queries.deleteMovie(id);

        if (deletedMovie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'succes',
                message: 'La pelicula fue eliminada con exito',
                data: deletedMovie
            }
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'Error',
            message: 'La pelicula no fue encontrada',
            data: error
        }
    }
})

module.exports = router;