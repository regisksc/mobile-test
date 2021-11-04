const express = require("express");
const faker = require("faker");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running! -> port ${port}`));

app.get("/seed", (req, res) => {
  var expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + 20);

  console.log(faker.internet.httpsUrl);
  res.send({
    seed: faker.internet.email(),
    expiration: expiration.toISOString(),
  });
});
