import { Entity } from "src/types";

export interface User extends Entity {
  username: string;
  email: string;
  role: string;
}
