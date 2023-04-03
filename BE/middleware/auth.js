const jwt = require("jsonwebtoken");

// Authorization: Bearer asgrjywgfjwgfjwefgweyugfu
// Task: delete "Bearer" and check token

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1]; // Cat khoang trang " " va bo qua authHeader[0] = "Bearer", chi lay [1] la chuoi token sau
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {
      ignoreExpiration: false,
    });
    req.userId = decoded; // tra ve field "userId" = ID cua user
    next(); //Allow
  } catch (err) {
    console.log(err);
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;
