import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabase();

  const data = db.collection("todos").find({}).toArray();

  res.status(200).json({ name: 'John Doe'},data)
}
