import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";

let realPath = null;

export default {
  async index() {
    return JSON.parse(await fs.readFile(`${realPath}/app/db/db.json`));
  },

  async create(entry) {
    const { title, text } = entry;
    const newEntry = { id: uuidv4(), title, text };
    const currentEntry = await this.index();
    fs.writeFile(
      `${realPath}/app/db/db.json`,
      JSON.stringify([...currentEntry, newEntry])
    );
  },

  async remove(id) {
    const notesArray = await this.index();
    const index = notesArray.findIndex((i) => i.id === id);
    notesArray.splice(index, 1);
  },
};

(async () => {
  realPath = await fs.realpath("./");
})();
