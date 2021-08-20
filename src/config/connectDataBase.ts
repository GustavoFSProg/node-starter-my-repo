import mongoose from 'mongoose'

export default function connectDataBase(dataBase: string) {
  if (!dataBase) throw Error(`Connection string is required to start database`)

  mongoose.connect(dataBase, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
}
