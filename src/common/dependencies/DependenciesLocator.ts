import { GetUsersUseCase } from "~/core";
import { UserService, UsersPloc } from "~/core/users/infrastructure";

function provideUsersPloc(): UsersPloc {
  const usersService = new UserService()
  const getUsersUseCase = new GetUsersUseCase(usersService)
  const userPloc = new UsersPloc(getUsersUseCase)

  return userPloc
}

export const dependenciesLocator = {
  provideUsersPloc
}