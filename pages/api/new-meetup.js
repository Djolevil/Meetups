import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/mew-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
       const data = req.body;

       const client = await MongoClient.connect('mongodb+srv://Stevizza:Kurchubic@cluster0.xtgqi.mongodb.net/meetups?retryWrites=true&w=majority');
       const db = client.db();

       const meetupsCollection = db.collection('meetups');
       const result = awaitmeetupsCollection.insertOne(data);

       console.log(result);

       client.close();

       res.status(201).json({ message: 'Meetup inserted!' });
    }
};

export default handler;