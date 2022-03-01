import { connect } from "../mongodb/client";

const findOneTest = async () => {
  try {
    const connection = await connect().connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");

    let cursor = personsCollection.find({});
    const foundPersons = await cursor.toArray();

    const _id = foundPersons[0]._id;
    const result = await personsCollection.findOne({ _id });
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

findOneTest();