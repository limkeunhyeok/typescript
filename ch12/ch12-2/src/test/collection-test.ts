import { connect } from "../mongodb/client";

const collectionTest = async () => {
  try {
    const connection = await connect().connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    const addressesCollection = db.collection("addresses");
    console.log(personsCollection, addressesCollection);
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

collectionTest();