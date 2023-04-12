// lear
// IP Address Tracker

window.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#input-field");
  const checkBtn = document.querySelector(".check-btn");
  const ipText = document.querySelector("#ip");
  const locationText = document.querySelector("#location");
  const timezoneText = document.querySelector("#timezone");
  const ispText = document.querySelector("#isp");

  const mymap = L.map("map").setView([34.0614, -118.08162], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw",
    }
  ).addTo(mymap);
  const marker = L.marker([34.0614, -118.08162]).addTo(mymap);

  const getData = async () => {
    let newFile;
    let res;
    if (inputField.value.match(/[0-9]/)) {
      newFile = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_5n2Zv7Lr2vzzMP5c9s1xS9aXkvFg7&ipAddress=${inputField.value}`
      );
      res = await newFile.json();
      locationText.innerHTML = res.location.city;
      mymap.setView([res.location.lat, res.location.lng], 13);
      marker.setLatLng([res.location.lat, res.location.lng]);
      ipText.innerHTML = res.ip;
    } else {
      newFile = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=at_5n2Zv7Lr2vzzMP5c9s1xS9aXkvFg7&ipAddress=8.8.8.8&domain=${inputField.value}`
      );
      res = await newFile.json();
      locationText.innerHTML = res.location.country;
      ipText.innerHTML = res.ip;
      const idFile = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_5n2Zv7Lr2vzzMP5c9s1xS9aXkvFg7&ipAddress=${ipText.innerHTML}`
      );
      const idRes = await idFile.json();
      mymap.setView([idRes.location.lat, idRes.location.lng], 13);
      marker.setLatLng([idRes.location.lat, idRes.location.lng]);
    }
    timezoneText.innerHTML = res.location.timezone;
    ispText.innerHTML = res.isp;
  };

  checkBtn.addEventListener("click", () => {
    if (!inputField.value) {
      return alert("Please fill out the input field!");
    }

    getData();
  });
});
