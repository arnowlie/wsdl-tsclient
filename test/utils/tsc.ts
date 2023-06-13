import util from "util";

const exec = util.promisify(require("child_process").exec);
const pathToTsc = `tsc`;

export async function typecheck(pathToIndex: string) {
    await exec(`npm exec ${pathToTsc} ${pathToIndex} --noEmit`);
}
