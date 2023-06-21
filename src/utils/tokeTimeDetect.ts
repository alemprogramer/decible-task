import jwt from 'jsonwebtoken';



const TokenExpiration = (access_token: string) => {
  const decodedToken: any = jwt.decode(access_token);
  console.log("🚀 ~ file: tokeTimeDetect.ts:18 ~ TokenExpiration ~ decodedToken:", decodedToken.exp>new Date())
  return decodedToken.exp>new Date()
};

export default TokenExpiration;


