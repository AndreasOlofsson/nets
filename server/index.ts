import Express from 'express';

const app = Express();

app.use(Express.static('static'));
app.use(Express.static('dist'));

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${ app.get('port') }...`);
});
