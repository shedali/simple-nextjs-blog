const fs = require("fs");
const dirname = "./posts/";
const fm = require("front-matter");
const data = [];
const items = fs.readdirSync(dirname);
console.time("complete");
items.filter(name => name.indexOf("md") > -1).forEach(function(filename) {
  if (filename === ".DS_Store") return;
  data.push(fm(fs.readFileSync(dirname + filename, "utf-8")));
});
fs.writeFileSync("src/posts.json", JSON.stringify(data, null, " "));
console.timeEnd("complete");
