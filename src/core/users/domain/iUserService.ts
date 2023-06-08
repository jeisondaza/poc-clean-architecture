import { Users } from "./User";

export interface iUserService {
  get(): Promise<Users>
}