import { Users, iUserService } from "@users/domain/"

export class UserService implements iUserService {
  
  get(): Promise<Users> {
    return fetch("https://dummyjson.com/users").then((response) => response.json())
  }
  
}