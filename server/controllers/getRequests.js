import userModel from '../models/userSchema.js';
import requestReceivedModel from '../models/requestReceived.js';

export async function getRequests(req, res, next) {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    console.log(user.accountId);

    if (user && user.accountId) {
      // Find requests received by accountId
      const list = await requestReceivedModel.find({ accountId: user.accountId }).sort({ date: -1 }).limit(10);
      console.log(list);

      // Ensure no circular references
      const sanitizedList = JSON.parse(JSON.stringify(list));

      res.status(200).json({ list: sanitizedList });
    } else {
      res.status(404).json({ message: 'User or account ID not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error', error });
  }
}
