const User = require('../models/user');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({message : "profile loaded successfully" ,user : user});
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, email, address } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.user._id, { username, email, address }, { new: true });
    res.status(200).json({message : "Profile updation success",updatedUser});
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile' });
  }
};
