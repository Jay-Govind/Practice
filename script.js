let url = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", async () => {
  let country = input.value;
  let colleges = await getColleges(country);
  fname(colleges);
});

function fname(colleges) {
  let list = document.querySelector("#list");
  list.innerHTML = ""; // Clear previous results
  for (let col of colleges) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li); // Corrected method name
  }
}

async function getColleges(country) {
  try {
    let result = await axios.get(url + country);
    return result.data;
  } catch (er) {
    console.log(er);
  }
}
