const express = require('express');
const path = require('path');
const app = express();
const sqlWorkspaceRouter = require('./routes/sqlWorkspaceRouter');
const sqlReviewRouter = require('./routes/sqlReviewRouter');
const sqlUserRouter = require('./routes/sqlUserRouter');

const cors = require('cors');
const PORT = 3000;

//parse incoming requests for json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route to corect routes based on url endpoints
app.use('/reviews', sqlReviewRouter);
app.use('/workspace', sqlWorkspaceRouter);
app.use('/user', sqlUserRouter);

//unknown route handler
app.use((req, res) => res.sendStatus(404));

//serve the index.html if in production
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route '/dist'
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(3000, () => {
  console.log(`Server listening on port: ${PORT}...`);
});


