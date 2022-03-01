// 버전 변경으로 교재와는 다름
import { MongoClient } from "mongodb";


export const connect = (mongoUrl: string = "mongodb://localhost:27017") => {
  const client = new MongoClient(mongoUrl);
  return client
}