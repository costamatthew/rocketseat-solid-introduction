import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.headers

      const user_id = id as string

      const list = this.listAllUsersUseCase.execute({ user_id })
      
      return response.status(200).json(list)
    } catch {
      return response.status(400).json({ error: "erro" })
    }
  }
}

export { ListAllUsersController };
