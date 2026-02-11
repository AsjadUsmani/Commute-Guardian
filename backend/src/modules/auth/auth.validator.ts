import { LoginInput, SignupInput } from "./auth.types";

export const validateSignup = (data: SignupInput) => {
  if (!data.name || !data.email || !data.password) {
    throw new Error("All fields are required");
  }
};

export const validateLogin = (data: LoginInput) => {
  if (!data.email || !data.password) {
    throw new Error('Email and password required');
  }
};
