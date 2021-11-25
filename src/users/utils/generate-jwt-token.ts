import jwt = require('jsonwebtoken');

export const generateAsccessToken = (id, role) => {
    const payload = {
    id,
    role
    }   
    return jwt.sign(payload, process.env.SECRET, {expiresIn: "24h"})
};