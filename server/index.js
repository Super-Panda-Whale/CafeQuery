const app = require('./sqlServer');

app.listen(3000, () => {
  console.log(`Server listening on port: ${PORT}...`);
});