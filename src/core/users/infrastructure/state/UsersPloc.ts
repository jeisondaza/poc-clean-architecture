import { Ploc } from "~/common";
import { GetUsersUseCase } from "@users/application";
import { usersInitialState, UsersState } from "./UserState";

export class UsersPloc extends Ploc<UsersState> {
  constructor( private getUsersUseCase: GetUsersUseCase) {
    super(usersInitialState)
  }

  async getUsers(){
    const users = await this.getUsersUseCase.execute()
    this.changeState({
      kind: 'LoadedUserState',
      users,
      sortOption : ''
    })
  }
}