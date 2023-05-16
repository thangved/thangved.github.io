import "./style.css";

fetch("https://api.github.com/users/thangved/repos?per_page=100")
  .then((res) => res.json())
  .then((repos) => {
    const ghReposDom = document.getElementById("gh-repos");

    ghReposDom.innerHTML = ``;

    for (const repo of repos) {
      ghReposDom.innerHTML += `<li class="my-2">
        <a href="${
          repo.html_url
        }" target="_blank" class="text-blue-700  hover:underline">[${
        repo.language || "Mixed"
      }] ${repo.description || repo.html_url}</a>
      </li>`;
    }
  });
