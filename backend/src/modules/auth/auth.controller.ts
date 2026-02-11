import { Request, Response } from 'express';
import { signupService, loginService } from './auth.service';
import { validateSignup, validateLogin } from './auth.validator';

export const signup = async (req: Request, res: Response) => {
  validateSignup(req.body);
  const token = await signupService(req.body);
  res.json({ token });
};

export const login = async (req: Request, res: Response) => {
  validateLogin(req.body);
  const token = await loginService(req.body);
  res.json({ token });
};
