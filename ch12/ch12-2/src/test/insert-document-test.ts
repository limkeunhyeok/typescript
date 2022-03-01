import { connect } from "../mongodb/client";

const insertDocumentTest = async () => {
  try {
    const connection = await connect().connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("addresses");
    
    const person = { name: "Jack", age: 32 };
    let result = await personsCollection.insertOne(person);
    console.log(result);

    const address = { country: "korea", city: "seoul" };
    result = await addressesCollection.insertOne(address);
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

insertDocumentTest();