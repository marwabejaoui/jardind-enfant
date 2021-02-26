import jwt from "jsonwebtoken";

const secret = 'test';

const admin = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization.split(" ")[1];
      const isCustomAdmin = token.length < 500;
     
  
      let decodedData;
  
      if (token && isCustomAdmin) {      
        decodedData = jwt.verify(token, secret);
  
        req.adminId = decodedData?.id;

  
    } else {
      decodedData = jwt.decode(token);

      req.adminId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default admin;
