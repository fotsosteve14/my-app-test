import { listUsers } from "$lib/application/use-cases/list-users";
import { InMemoryUserRepository } from "./repositories/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();

/** Use cases wired with their implementations. */
export const useCases = {
  listUsers: listUsers(userRepository),
};
