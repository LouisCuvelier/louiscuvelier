import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

const imagesDirectory = path.join(process.cwd(), "public");
export default async function getBase64(imagePath) {
  try {
    const file = await fs.promises.readFile(
      path.join(imagesDirectory, imagePath)
    );

    const { base64 } = await getPlaiceholder(file);

    return base64;
  } catch (e) {
    console.error(e);
  }
}
