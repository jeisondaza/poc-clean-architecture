import { Users } from '@users/domain'

export interface CommonUsersState {
  sortOption: string
}

export interface LoadingUsersState {
  kind: 'LoadingUserState'
}

export interface LoadedUsersState {
  kind: 'LoadedUserState'
  users: Users
}

export interface ErrorUsersState {
  kind: 'ErrorUsersState'
  error: string
}

export type UsersState = (LoadingUsersState | LoadedUsersState | ErrorUsersState) & CommonUsersState

export const usersInitialState: UsersState = {
  kind: 'LoadingUserState',
  sortOption: ''
}
