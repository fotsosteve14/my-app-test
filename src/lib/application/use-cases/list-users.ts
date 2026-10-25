import type { User } from "$lib/domain/entities/user";
import type { UserRepository } from "$lib/domain/repositories/user-repository";

/** Lists users sorted by name. */
export function listUsers(users: UserRepository) {
  return async (): Promise<User[]> => {
    const all = await users.findAll();
    return all.sort((a, b) => a.name.localeCompare(b.name));
  };
}
