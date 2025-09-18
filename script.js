const getFactBtn = document.getElementById("get-fact-btn");
const langSelection = document.getElementById("language");
const factSpan = document.getElementById("fact");
const sourceSpan = document.getElementById("source");
const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
const getFact = async () => {
  console.log("clicked");
  const fact = await fetch(
    langSelection.value === "de" ? url + "?language=de" : url
  );
  const json = await fact.json();
  factSpan.innerText = json.text;
  sourceSpan.innerHTML = `<a target="_blank" href=${json.source_url}>${json.source}</a>`;
};

getFactBtn.addEventListener("click", getFact);

window.onload(getFact());
