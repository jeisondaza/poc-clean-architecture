import Image from 'next/image'
import { dependenciesLocator } from '~/common/dependencies'

export async function UserTable () {
  const userPloc = dependenciesLocator.provideUsersPloc()
  await userPloc.getUsers()
  const state = await userPloc.state

  if (state.kind === 'LoadedUserState') {
    return (
      <main>
        <h1>Total users {state.users.total}</h1>
        <table>
          <tr>
            <th>N°</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Current Location</th>
          </tr>
          {state.users.users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <Image
                  src={user.image}
                  alt={`user: ${user.id} avatar`}
                  width={80}
                  height={80}
                />
              </td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </table>
      </main>
    )
  }
  return (
    <main>
      <h1>{state.kind}</h1>
    </main>
  )
}
