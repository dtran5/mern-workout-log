const jwt = require("jsonwebtoken");

// next parameter means do some action then move to the next action

const auth = async (req, res, next) => {
  try {
    // check for valid token
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    // get our data from token
    let decodedData;

    if (token) {
      // verify gives us data from token
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      // this gives us logged in users id
      req.userId = decodedData.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
