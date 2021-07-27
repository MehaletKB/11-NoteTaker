import { promises as fs } from "fs";

let realPath = null;

export default {
  async index() {
    return JSON.parse(await fs.readFile(`${realPath}/app/db/db.json`));
  },

  async create(newEntry) {
    const currentEntry = await this.index();
    fs.writeFile(
      `${realPath}/app/db/db.json`,
      JSON.stringify([...currentEntry, newEntry])
    );
  },

  // async remove(unwantedEntry) {
  //   fs.
  // },
};

(async () => {
  realPath = await fs.realpath("./");
})();
