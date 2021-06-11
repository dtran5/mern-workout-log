// model
const User = require("../models/user");
// password hashing
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signup new account
const signup = async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // if (password !== confirmPassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    // hashing our password
    // promise that returns string
    // salt is level of difficulty to hash password
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);

    // save new user to database
    // const newUser = new User({
    //   firstName,
    //   lastName,
    //   email,
    //   password: passwordHashed,
    // });

    const result = await User.create({
      email,
      password: passwordHashed,
      firstName,
      lastName,
    });
    // sign the token
    const token = jwt.sign(
      {
        // reading the id of the user in our database that we just created
        id: result._id,
        email: result.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ result, token });

    // send the token in HTTP-only cookie
    // res
    //   .cookie("thisIsCookieName", token, {
    //     httpOnly: true,
    //   })
    //   .send();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// log in to existing account
const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // this is document object as it exists in db
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ errorMessage: "User does not exist." });
    }
    // takes a string and compares to the hash
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCorrect) {
      return res.status(401).json({ errorMessage: "Wrong email or password" });
    }

    // if above passes, user is valid and run this -
    // sign the token
    const token = jwt.sign(
      {
        // reading the email of the user in our database that we just created
        // this is all of info I want stored in token
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.JWT_SECRET
      // { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });

    // send the token in HTTP-only cookie
    //   res
    //     .cookie("thisIsCookieName", token, {
    //       httpOnly: true,
    //     })
    //     .send();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// logout user by telling browser to clear cookie
const logout =
  ("/logout",
  (req, res, next) => {
    res
      .cookie("thisIsCookieName", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .send();
  });

exports.signup = signup;
exports.signin = signin;
exports.logout = logout;
