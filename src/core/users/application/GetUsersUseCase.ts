import { Users, iUserService } from '@users/domain'

export class GetUsersUseCase {
  private readonly userService: iUserService

  constructor (userService: iUserService) {
    this.userService = userService
  }

  async execute (): Promise<Users> {
    return await this.userService.get()
  }
}
