const newsRouter = require('./news');
const meRouter = require('./me');
const cartRouter = require('./cart');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
function route(app) {
    app.use('/cart',cartRouter);
    app.use('/me',meRouter);
    app.use('/news', newsRouter);
    app.use('/courses',coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
