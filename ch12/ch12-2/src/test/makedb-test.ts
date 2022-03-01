import { connect } from "../mongodb/client";

const makedbTest = async () => {
  try {
    await connect().connect();
    const db = await connect().db("ch12-2");
    console.log("db", db);
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

makedbTest();