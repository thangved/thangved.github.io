import ghpages from "gh-pages";

ghpages.clean();

ghpages.publish(
  "./dist",
  { remote: "upstream", message: "Deployed", branch: "gh-pages" },
  () => {
    console.log("Deploy successfully");
  }
);
