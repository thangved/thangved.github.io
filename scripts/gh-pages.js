import ghpages from "gh-pages";

ghpages.clean();

ghpages.publish("./dist", () => {
  console.log("Deploy successfully");
});
