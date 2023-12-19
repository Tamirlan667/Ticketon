function getUserByUsername() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "login.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "username=" +
    encodeURIComponent(username) +
    "&password=" +
    encodeURIComponent(password);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function registerUser() {
  var username = document.getElementById("usernameRegister").value;
  var email = document.getElementById("mailRegister").value;
  var password = document.getElementById("passwordRegister").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "register.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "username=" +
    encodeURIComponent(username) +
    "&email=" +
    encodeURIComponent(email) +
    "&password=" +
    encodeURIComponent(password);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

//SearchByPattern and Date
function searchByPattern() {
  var pattern = document.getElementById("search").value;
  // Type same as in Table
  var type = "MOVIE";

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
          console.log(data[i]);
        }
      }
    }
  };
}

function searchByDate() {
  var date = document.getElementById("date").value;
  var type = document.getElementById("typeDate").value;

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
          console.log(data[i].name);
        }
      }
    }
  };
}

function submitComment() {
  var eventType = document.getElementById("eventType").value;
  var eventID = document.getElementById("eventID").value;
  var userID = document.getElementById("userID").value;
  var comment = document.getElementById("comment").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "submitComment.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "eventType=" +
    encodeURIComponent(eventType) +
    "&eventID=" +
    encodeURIComponent(eventID) +
    "&userID=" +
    encodeURIComponent(userID) +
    "&comment=" +
    encodeURIComponent(comment);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function getEventByID() {
  var eventType = document.getElementById("eventTypeByID").value;
  var eventID = document.getElementById("eventIDByID").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "getEventByID.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "eventType=" +
    encodeURIComponent(eventType) +
    "&eventID=" +
    encodeURIComponent(eventID);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function buyTicket() {
  var user_id = document.getElementById("user_id").value;
  var event_type = document.getElementById("event_type").value;
  var event_id = document.getElementById("event_id").value;
  var price = document.getElementById("price").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "buyTicket.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "user_id=" +
    encodeURIComponent(user_id) +
    "&event_type=" +
    encodeURIComponent(event_type) +
    "&event_id=" +
    encodeURIComponent(event_id) +
    "&price=" +
    encodeURIComponent(price);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function sellTicket() {
  var user_id = document.getElementById("user_id_sell").value;
  var event_type = document.getElementById("event_type_sell").value;
  var event_id = document.getElementById("event_id_sell").value;
  var price = document.getElementById("price_sell").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "sellTicket.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "user_id=" +
    encodeURIComponent(user_id) +
    "&event_type=" +
    encodeURIComponent(event_type) +
    "&event_id=" +
    encodeURIComponent(event_id) +
    "&price=" +
    encodeURIComponent(price);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function getUserTickets() {
  var user_id = document.getElementById("user_id_get_tickets").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "getUserTickets.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data = "user_id=" + encodeURIComponent(user_id);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function buyGiftCard() {
  var gift_user_id_present = document.getElementById(
    "gift_user_id_present"
  ).value;
  var gift_user_id_get = document.getElementById("gift_user_id_get").value;
  var gift_amount = document.getElementById("gift_amount").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "buyGiftCard.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data =
    "gift_user_id_present=" +
    encodeURIComponent(gift_user_id_present) +
    "&gift_user_id_get=" +
    encodeURIComponent(gift_user_id_get) +
    "&gift_amount=" +
    encodeURIComponent(gift_amount);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

function getUserGifts() {
  var gift_user_id = document.getElementById("gift_user_id").value;

  var ajax = new XMLHttpRequest();
  var method = "POST";
  var url = "getUserGifts.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var data = "gift_user_id=" + encodeURIComponent(gift_user_id);

  ajax.send(data);

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
}

// All get functions below
function getMovieList() {
  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "getMovieList.php";
  var async = true;

  ajax.open(method, url, async);

  ajax.send();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      displayVideos(data);
      console.log(data[0].id);
      console.log(data[0].year_of_issue);
      console.log(data[0].name);
      console.log(data[0].sessions[0].adult_price);
      console.log(data[0].sessions[0].city);
      console.log(data[0].sessions[1].city);
    }
  };
}

function getTheatreList() {
  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "getTheaterList.php";
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
      console.log(data[0].sessions[0].adult_price);
      console.log(data[0].sessions[0].city);
    }
  };
}

function getConcertsList() {
  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "getConcertList.php";
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
      console.log(data[0].sessions[0].city);
      console.log(data[0].sessions[0].location);
    }
  };
}

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
let row = document.getElementById("nope");
console.log(row);
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
  });
};
let saveSearchVideo = (element) => {
  localStorage.setItem("video_search", JSON.stringify(element));
  window.location.href = "./video_search.html";
};
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
