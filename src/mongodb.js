// CRUD - Create
// CRUD - Read
// CRUD - Update
// CRUD - Delete

const { MongoClient, ObjectID } = require("mongodb");
const chalk = require("chalk");

const message = {
  success: (text) => console.log(chalk.green(text)),
  error: (text) => console.log(chalk.red(text)),
};

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const id = new ObjectID();

const createDocument = (description, completed) => ({ description, completed });

MongoClient.connect(connectionURL, mongoOptions, (error, client) => {
  if (error) {
    message.error("Unable to connect to MongoDB");
  } else {
    message.success("Connected to MongoDB");
    const db = client.db(databaseName);

    const users = db.collection("users");
    const tasks = db.collection("tasks");

    tasks
      .deleteOne({ description: "test" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
});
