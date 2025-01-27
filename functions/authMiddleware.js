const {getAuth} = require("firebase-admin/auth");


const verifyToken = async (req, res, next)=>{
    const token = rep.headers.authorization?.split("")[1];
    
    if(!token){
        return res.status(401).json({message: "No se proporcionó un token"});
    }

    try{
        const decodedToken = await getAuth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch(error){
        console.error("Error al verificar el token:", error);
        return res.status(403).json({message: "Token inválido"});


    };
};

module.exports = verifyToken;