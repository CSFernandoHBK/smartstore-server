import { ApplicationError } from "../protocols";


export function unauthorizedError(): ApplicationError {
    return {
      name: "UnauthorizedError",
      message: "You must be signed in to continue",
    };
}

export function notFoundError(): ApplicationError {
  return{
    name: "NotFoundError",
    message: "Content not found"
  }
}

export function conflictError(): ApplicationError {
  return{
    name: "conflictError",
    message: "Title already exists"
  }
}

export function forbiddenError(): ApplicationError {
  return{
    name: "forbiddenError",
    message: "Access denied"
  }
}

export function invalidCredentialsError(): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect",
  };
}

export function badRequestError(): ApplicationError {
  return {
    name: "badRequestError",
    message: "There is something wrong with your requisition",
  };
}