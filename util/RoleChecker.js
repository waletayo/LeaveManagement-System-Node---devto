const User = require("../authentication/auth.model");
const jwt = require("jsonwebtoken")

exports.ManagerChecker = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(400)
            .json("please login to continue")
    }
    if (token !== undefined) {
        let decodeToken = jwt.decode(token);
        let id = decodeToken.id;
        if (id) {
            let user = await User.findById(id);
            if (user && user.role !== 'manager') {
                return res.status(403).json({
                    status: false,
                    code: 403,
                    message: 'You are not authorized to do this action'
                })
            } else {
                return next();
            }
        }
    }
    return next();
}
