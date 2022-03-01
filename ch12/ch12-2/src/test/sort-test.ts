import { connect } from "../mongodb/client";

const sortTest = async () => {
  try {
    const connection = await connect().connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    await personsCollection.createIndex({ name: 1, age: -1 });
    await personsCollection.deleteMany({});
    await personsCollection.insertMany([
      { name: "Jack", age: 32 }, { name: "Jack", age: 33 }, { name: "Jane", age: 10 }
    ]);

    const cursor = personsCollection.find({ name: "Jack" }).sort({ age: -1 });
    const result = await cursor.toArray();
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

sortTest();