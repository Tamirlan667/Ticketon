function getKidsPartyList() {
  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "getKidsPartyList.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.send();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      displayVideos(data);
      console.log(data[0].id);
      console.log(data[0].name);
      console.log(data[0].overview);
      console.log(data[0].duration);
      console.log(data[0].sessions[0].city);
      console.log(data[0].sessions[0].location);
    }
  };
}
let displayVideos = (data) => {
  let row = document.getElementById("nope");
  row.innerHTML = "";
  if (!data) return;
  console.log(data);
  data.forEach((element) => {
    // let card = document.createElement("div");
    // card.setAttribute("class", "video__group");
    // card.addEventListener("click", (event) => {
    //   saveVideo(element);
    // });
    // let thumbnail = document.createElement("img");
    // thumbnail.src = element.snippet.thumbnails.medium.url;
    // thumbnail.setAttribute("class", "video__thumbnail");
    // let title = document.createElement("h3");
    // title.innerText = element.snippet.title;
    // title.setAttribute("class", "video__name");
    // card.append(thumbnail, title);
    // row.append(card);

    const video = `
        <div class="card border-no">
          <img
            src="${element.image_url}"
            class="card-img-top"
            style="border-radius: 0"
          />
          <div class="card-body">
            <p class="c-text">${element.name}</p>
            <a class="c-text orange-text">${element.premiere_date}</a>
          </div>
        </div>
          `;
    const videoGroup = document.createElement("div");
    videoGroup.classList.add("col-md-4");
    videoGroup.innerHTML += video;
    videoGroup.addEventListener("click", () => {
      // You can customize this part to define what happens when a video is clicked
      // For now, let's just log the video's title to the console
      saveSearchVideo(element);
    });
    row.appendChild(videoGroup);
  });
};
let saveSearchVideo = (element) => {
  localStorage.setItem("video_search", JSON.stringify(element));
  window.location.href = "./video_search.html";
};
getKidsPartyList();
let displaydata = (data) => {
  let row = document.getElementById("nope");
  row.innerHTML = "";
  if (!data) return;
  console.log(data);
  data.forEach((element) => {
    // let card = document.createElement("div");
    // card.setAttribute("class", "video__group");
    // card.addEventListener("click", (event) => {
    //   saveVideo(element);
    // });
    // let thumbnail = document.createElement("img");
    // thumbnail.src = element.snippet.thumbnails.medium.url;
    // thumbnail.setAttribute("class", "video__thumbnail");
    // let title = document.createElement("h3");
    // title.innerText = element.snippet.title;
    // title.setAttribute("class", "video__name");
    // card.append(thumbnail, title);
    // row.append(card);
    if (element.name === "Годзилла: Минус один") {
      const video = `
          <div class="col-md-4">
          <div class="card border-no">
            <img
              src="${element.image_url}"
              class="card-img-top"
              style="border-radius: 0"
            />
            <div class="card-body">
              <p class="c-text">${element.name}</p>
              <a class="c-text orange-text">${element.premiere_date}</a>
            </div>
          </div>
        </div>
            `;
      const videoGroup = document.createElement("div");
      videoGroup.classList.add("video__group");
      videoGroup.innerHTML += video;
      videoGroup.addEventListener("click", () => {
        // You can customize this part to define what happens when a video is clicked
        // For now, let's just log the video's title to the console
        saveSearchVideo(element);
      });
      row.appendChild(videoGroup);
    }
  });
};
function getMovieData() {
  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "getMovieList.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.send();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      displaydata(data);
      console.log(data[0].id);
      console.log(data[0].year_of_issue);
      console.log(data[0].name);
      console.log(data[0].sessions[0].adult_price);
      console.log(data[0].sessions[0].city);
      console.log(data[0].sessions[1].city);
    }
  };
}
function searchByDate() {
  var type = "MOVIE";
  var linkElement = document.querySelector(".col a");

  // Получить текстовое содержимое элемента <a>
  var value = linkElement.textContent;

  // Вывести значение в консоль (или выполнить другие действия)
  console.log(value);
  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "searchByDate.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "date=" + encodeURIComponent(value) + "&type=" + encodeURIComponent(type);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
      if (data.hasOwnProperty("error")) {
        console.error(data.error);
      } else {
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].name);
        }
      }
    }
  };
}
function searchByPattern() {
  var pattern = document.getElementById("search").value;
  // Type same as in Table
  var type = "FOR_KIDS";

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "searchByPattern.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "pattern=" +
    encodeURIComponent(pattern) +
    "&type=" +
    encodeURIComponent(type);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);

      if (data.hasOwnProperty("error")) {
        console.error(data.error);
      } else {
        for (var i = 0; i < data.length; i++) {
          // displayVideos(data);
          displayVideos(data);
        }
      }
    }
  };
}
var linkElement = document.querySelector(".col a");
function searchByDate(clickedElement) {
  var type = "FOR_KIDS";
  var date = clickedElement.getAttribute("data-date");

  // Обновить linkElement
  linkElement = clickedElement;
  console.log(date);
  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "searchByDate.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "date=" + encodeURIComponent(date) + "&type=" + encodeURIComponent(type);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);

      if (data.hasOwnProperty("error")) {
        console.error(data.error);
      } else {
        for (var i = 0; i < data.length; i++) {
          displayVideos(data);
        }
      }
    }
  };
}
