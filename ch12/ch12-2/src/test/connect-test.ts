import { connect } from "../mongodb/client";

const connectTest = async() => {
  try {
    await connect().connect();
    console.log("connection ok.", connect());
  } catch (e) {
    console.log(e);
  } finally {
    connect().close();
  }
}

connectTest();