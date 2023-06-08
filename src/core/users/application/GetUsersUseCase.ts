import { Users ,iUserService } from "@users/domain";

export class GetUsersUseCase {
  private userService: iUserService;

  constructor(userService: iUserService){
    this.userService = userService
  }

  execute(): Promise<Users>{
    return this.userService.get()
  }
}