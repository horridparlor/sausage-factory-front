export type SystemUser = {
  authToken: string;
  userId: number;
  username?: string;
  firstname?: string;
  lastname: string;
  accessRights: AccessRights;
  subprocessId: number;
};

export type AccessRights = {
  isSuperAdmin?: boolean;
};

export type UserForm = {
  username: string;
  firstname?: string;
  lastname?: string;
  password: string;
  subprocessId: number;
  roleId?: number;
  accessRights?: AccessRights;
};
