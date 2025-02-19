document.addEventListener("DOMContentLoaded", async () => {
  const username = "TarnaWijaya";
  const contributionsUrl = `https://github.com/users/${username}/contributions`;

  try {
    const response = await fetch(contributionsUrl);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const svg = doc.querySelector("svg.js-calendar-graph-svg");

    if (svg) {
      document.getElementById("contribution-graph").innerHTML = svg.outerHTML;
    }
  } catch (error) {
    console.error("Gagal memuat data kontribusi:", error);
  }
});

const style = document.createElement("style");
style.innerHTML = `
  #contribution-graph rect[data-level='0'] { fill: #161b22; }
  #contribution-graph rect[data-level='1'] { fill: #0e4429; }
  #contribution-graph rect[data-level='2'] { fill: #006d32; }
  #contribution-graph rect[data-level='3'] { fill: #26a641; }
  #contribution-graph rect[data-level='4'] { fill: #39d353; }
`;
document.head.appendChild(style);