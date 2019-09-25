
export interface AuthResponseData {
    kind: string;
    idToken: string;
    username: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }
  