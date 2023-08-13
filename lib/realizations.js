import fs from "fs";
import path from "path";

const realizationsDirectory = path.join(process.cwd(), "data/realizations");

export function getSortedRealizationsData() {
  const fileNames = fs.readdirSync(realizationsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(realizationsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    return JSON.parse(fileContents);
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
