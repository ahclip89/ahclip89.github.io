const opened_tile = document.getElementById("open_page");
const page = document.getElementById("selection_page");


// Load Descriptions
fetch("/assets/text/en_us.lang")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.tiles.length; i++) {
      const tile = data.tiles[i];
      const tile_element = document.createElement("div");
      let on_click_func = "";
      if (tile.page) {
        on_click_func = "open_tile(this, '" + tile.page + "')";
        tile_element.setAttribute("onclick", on_click_func);
      } else {
        tile_element.style.cursor = "default";
      }
      tile_element.className = "tile";
      tile_element.innerHTML = "<img src='" + tile.image.src + "' alt='" + tile.image.alt + "'><div><h2>" + tile.title + "</h2><p>" + tile.description + "</p></div>";
      page.appendChild(tile_element);
    }
  })
  .catch((error) => console.error("Error loading JSON file", error));

// Click Events
function open_tile(element, tile) {
  if (element.className == "tile"){
    
    opened_tile.style.visibility = "visible";
    
    opened_tile.classList.remove("closed");
    void opened_tile.offsetWidth;
    opened_tile.classList.add("open");

    console.log("pages/" + tile);

    document.querySelector(".selected iframe").src = "pages/" + tile;

  }

}
function close_tile(element) {
  opened_tile.style.visibility = "hidden";
  opened_tile.classList.remove("open");
  void opened_tile.offsetWidth;
  opened_tile.classList.add("closed");
}