import jwt from 'jsonwebtoken';

// Assuming you have the access_token value


const TokenExpiration = (access_token: string) => {
  // Decode the access token
  const decodedToken: any = jwt.decode(access_token);

  // Extract the expiration time from the decoded token
  const expirationTime = decodedToken.exp;

  // Convert the expiration time to a Date object
  
  return expirationTime
  
};

export default TokenExpiration;


