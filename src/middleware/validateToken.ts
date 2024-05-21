import { Request, Response, NextFunction } from 'express';
import jose from 'jose';
import 'dotenv-safe/config';

const JWKS = jose.createRemoteJWKSet(
  new URL(`${process.env.HANKO_API_URL}/.well-known/jwks.json`)
);

function getTokenFromRequest(req: Request): string | null {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    return req.headers.authorization.split(" ")[1];
  }
  if (req.cookies && req.cookies.hanko) {
    return req.cookies.hanko;
  }
  return null;
}

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = getTokenFromRequest(req);
  
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    await jose.jwtVerify(token, JWKS);
    next();
  } catch (error) {
    console.error("Token validation error:", error);
    res.status(401).send("Unauthorized: Invalid token");
  }
}

export default validateToken;
