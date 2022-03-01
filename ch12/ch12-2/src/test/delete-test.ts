import { connect } from "../mongodb/client";

const deleteTest = async () => {
  try {
    const connection = await connect().connect();
    const db = await connection.db("ch12-2");
    const personsCollection = db.collection("persons");
    await personsCollection.insertMany([
      { name: "Jack" }, { name: "Tom" }, { name: "Jane" }
    ]);
    
    let result = await personsCollection.deleteOne({ name: "Tom" });
    console.log(result);
    result = await personsCollection.deleteMany({});
    console.log(result)
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

deleteTest();