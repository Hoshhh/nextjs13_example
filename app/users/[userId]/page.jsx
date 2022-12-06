import { getUserById } from '../../../lib/prisma/users'
import User from './user'

const Page = async ({ params }) => {
  console.log(params)
  const { user } = await getUserById(params.userId)
  console.log(user)
  return <User user={user} />
}

export default Page