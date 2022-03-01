import { connect } from "../mongodb/client";

const findDocumentTest = async () => {
  try {
    const connection = await connect().connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("addresses");
    
    let cursor = personsCollection.find({ name: "Jack" });
    const foundPersons = await cursor.toArray();
    console.log(foundPersons);

    cursor = addressesCollection.find({});
    const foundAddress = await cursor.toArray();
    console.log(foundAddress);
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

findDocumentTest();