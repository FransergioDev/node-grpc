const client = require("./client-grpc");

client.list({}, (error, notes) => {
  if (!error) console.error(notes);
  else console.error(error);
});
