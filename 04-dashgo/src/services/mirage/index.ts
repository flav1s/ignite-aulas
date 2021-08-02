import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    // Gera dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },
    seeds(server) {
      server.createList("user", 200); // server.createList(NAME_FACTORY, NUMBER_OF_ENTRIES)
    },
    routes() {
      this.namespace = "api"; // rotas sempre começam com /api
      this.timing = 750; // toda chamada ao miragejs demora 750 segundos (útil para testes de loading/spinner/etc)
      this.get("/users");
      this.post("/users");

      this.namespace = ""; // reseta o namespace para não confundir caso o tenha rotas api de dentro do next
      this.passthrough(); // todas as chamadas enviadas para /api passam pelo miragejs e se não forem detectadas pelo mirage, elas passam adiante para rotas do next
    },
  });

  return server;
}
