import ghpages from "gh-pages";

ghpages.publish("./dist", { remote: "upstream", message: "Deployed" }, () => {
  console.log("Deploy successfully");
});
