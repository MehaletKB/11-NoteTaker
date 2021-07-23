import { create } from "domain";
import { promises as fs} from "fs";

let realPath = null;

export default {
    async index() {
        return JSON.parse(await fs.readFile(`${realPath}/app/db/db.json`));
    },

};



(async () => {
    realPath = await fs.realpath("./");
})();