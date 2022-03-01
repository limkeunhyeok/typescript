import { connect } from './mongodb/client'
import {getFileNameAndNumber} from './utils'
import {csvFileReaderGenerator} from './csv/csvFileReaderGenerator'

const insertCsvToMongo = async(csvFilename: any, collectionName: any, index: any) => {
  try {
    const connection = await connect().connect()
    const db = await connection.db("ch12-2")
    const collection  = db.collection(collectionName)
    await collection.deleteMany({})
    await collection.createIndex(index)
    let line = 1
    for(let object of csvFileReaderGenerator(filename)) {
      await collection.insertOne(object)
      console.log(`${line++} inserted.`)
    }
    console.log('\n insertion complete.')
  } catch(e) {
    console.log(e)
  } finally {
    connect().close()
  }  
}

const [filename] = getFileNameAndNumber('./data/fake-1000.csv', 1)
insertCsvToMongo(filename, "users", {birthday: -1, name: 1})

