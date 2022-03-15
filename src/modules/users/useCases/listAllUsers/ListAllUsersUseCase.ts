import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findUser = this.usersRepository.findById(user_id)

    if (!findUser) {
      throw new Error(`User not found`)
    }

    const isAdmin = findUser.admin

    if (!isAdmin) {
      throw new Error(`user does not have permission`)
    }

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
