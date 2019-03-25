import { Role } from "./role";

export interface User {
  _id?: string;
  username: string;
  name: string;
  lastName: string;
  userRole?: Role;
}
