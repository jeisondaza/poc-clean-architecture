import { Users, iUserService } from '@users/domain/'

export class UserService implements iUserService {
  async get (): Promise<Users> {
    return await fetch('https://dummyjson.com/users').then(async (response) => await response.json())
  }
}
