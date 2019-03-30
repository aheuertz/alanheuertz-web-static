import { Promise } from "bluebird";
import Auth, { CognitoUser } from "@aws-amplify/auth";
import './AmplifyAuth';

interface MyPromise<R, E> {
  then: (callback: (result: R) => void) => MyPromise<R, E>;
  catch: (callback: (error: E) => void) => MyPromise<R, E>;
}

export type LogInErrorCode =
  'UserNotConfirmedException' |
  'PasswordResetRequiredException' |
  'NotAuthorizedException' |
  'UserNotFoundException';

export interface LogInError {
  code: LogInErrorCode;
}

type LogInFunction = (username: string, password: string) => MyPromise<CognitoUser, LogInError>;

export const logIn = (username: string, password: string) => {
  return new Promise<CognitoUser>((resolve: (user: CognitoUser) => void, reject: (error: LogInError) => void) => {
    Auth.signIn(username, password)
      .then((user: CognitoUser) => {
        console.log('Logged in', user);
        resolve(user);
      })
      .catch((error: LogInError) => {
        console.log('Failed to log in with username ' + username, error);
        reject(error);
      });
  });
}
