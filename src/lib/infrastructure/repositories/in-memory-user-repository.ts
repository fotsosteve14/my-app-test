import type { User } from "$lib/domain/entities/user";
import type { UserRepository } from "$lib/domain/repositories/user-repository";

/** Replace with a database-backed implementation. */
export class InMemoryUserRepository implements UserRepository {
  private readonly users: User[] = [
    { id: "1", name: "Alan Turing", email: "alan@example.com" },
    { id: "2", name: "Ada Lovelace", email: "ada@example.com" },
  ];

  async findAll(): Promise<User[]> {
    return [...this.users];
  }
}
