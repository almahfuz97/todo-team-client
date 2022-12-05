import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const data = db.collection("todos").insertOne({email:"siamcse01@gmail.com"});
  res.status(200).json({ name: 'John Doe'},data)
}
