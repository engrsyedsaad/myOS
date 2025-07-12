let menu = document.querySelector("#menu")
let start = document.querySelector("#start")
let center = document.querySelector("#center")
let temp = document.querySelector("#temp")
let city = document.querySelector("#city")
let searchbox = document.querySelector("#search input")
let searchbtn = document.querySelector("#search button")
let weatherapp = document.querySelector("#weatherapp")
let menuweather = document.querySelector("#menuweather")


// NoteBook things

const notepad = document.getElementById("notepadWindow");
const titleBar = document.getElementById("notepadTitle");
const minimizeBtn = document.getElementById("minimize");
const maximizeBtn = document.getElementById("size");
const closeBtn = document.getElementById("cross");
const taskbar = document.getElementById("taskbar");
const notebook = document.getElementById("notebook")
const items = document.getElementById("items")
const noteicon = document.getElementById("noteicon")

//Calculator 

const calmove = document.querySelector("#calcDragBar")
const Calcu = document.getElementById("calculatorWindow")
const Calmin = document.getElementById("calcMinimize");
const Calclose = document.getElementById("calcClose");
const Calicon = document.getElementById("Calicon")

//battery Percentage
const batteryText = document.getElementById("batteryText");
const batteryIcon = document.getElementById("batteryIcon");


///wifi

const wifiItems = document.querySelectorAll(".wifi-item");
const wifiConnectBox = document.getElementById("wifiConnectBox");
const wifiPassword = document.getElementById("wifiPassword");
const connectBtn = document.getElementById("connectWifiBtn");
const wifiicon =document.getElementById("wifiicon")



// weather Api 
const apikey = "2ed17dd4503f5af69c40d6531f6e0542";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// Weather app start .........
async function weather(city1) {
    const response = await fetch(apiurl + city1 + `&appid=${apikey}`)
    var data = await response.json()
    temp.innerHTML = Math.round(data.main.temp) + " °C"
    city.innerHTML = (data.name)
    document.querySelector("#wind").innerHTML = (data.wind.speed) + " km/h"
    document.querySelector("#temp1").innerHTML = Math.round((data.main.temp)) + " °C"
    document.querySelector("#city1").innerHTML = (data.name)
    document.querySelector("#humidity").innerHTML = (data.main.humidity)
    console.log(data.wind.speed)
    const wethers = data.weather
    wethers.map((item) => {
        console.log(item.main)
        if (item.main == "Clouds") {
            document.querySelector(".day").src = "clouds.png"
            document.querySelector(".day1").src = "clouds.png"
            document.querySelector("#type").innerHTML = "Cloudy"
        }
        else if (item.main == "Clear") {
            document.querySelector(".day").src = "sun.png"
            document.querySelector(".day1").src = "sun.png"
            document.querySelector("#type").innerHTML = "Sunny"
        }
        else if (item.main == "Rain") {
            document.querySelector(".day").src = "rain.png"
            document.querySelector(".day1").src = "rain.png"
            document.querySelector("#type").innerHTML = "Rainy"
        }
    });
}


// Start Manu function start ...........
let startm = function () {

    let flag = 0;
    start.addEventListener("click", function () {
        if (flag == 0) {
            menu.style.display = "block"
            weatherapp.classList.add("hidden");
            flag = 1;
        }
        else {
            menu.style.display = "none"

            flag = 0;
        }
    });

    center.addEventListener("click", function () {
        menu.style.display = "none"


        flag = 0;
        // document.documentElement.requestFullscreen()
    })
    menuweather.addEventListener("click", () => {
        console.log("clicked")
        weatherapp.classList.remove("hidden");
        weatherapp.classList.add("flex", "justify-center", "items-center");

    })

}

center.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("Right button click")
})

searchbtn.addEventListener("click", () => {
    weather(searchbox.value)
})


// NoteBook Function

const notepadd = function () {


    let isMaximized = false;

    // --- Dragging Logic ---
    let isDragging = false;
    let offsetX, offsetY;

    titleBar.addEventListener("mousedown", (e) => {
        if (isMaximized) return; // disable drag when maximized
        isDragging = true;
        offsetX = e.clientX - notepad.offsetLeft;
        offsetY = e.clientY - notepad.offsetTop;
        notepad.style.zIndex = 400;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            notepad.style.left = (e.clientX - offsetX) + "px";
            notepad.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // --- Maximize / Restore ---
    maximizeBtn.addEventListener("click", () => {
        if (!isMaximized) {
            notepad.style.width = "100%";
            notepad.style.height = "98%"; // 40px taskbar
            notepad.style.left = "0";
            notepad.style.top = "0";
            titleBar.classList.add("gap-300")
            titleBar.classList.remove("rounded-t-lg")
            isMaximized = true;
            notepad.style.zIndex = 9999;
        } else {
            notepad.style.width = "500px";
            notepad.style.height = "300px";
            notepad.style.left = "100px";
            notepad.style.top = "100px";
            titleBar.classList.remove("gap-300")
            titleBar.classList.add("rounded-t-lg")
            isMaximized = false;
        }
    });
    let isflag = 0;
    document.getElementById("menunotebook").addEventListener("click", () => {
        notepad.classList.remove("hidden")
        document.getElementById("notebookmin").classList.remove("hidden")
    })

    noteicon.addEventListener("dblclick", () => {
        if (isflag == 0) {
            notepad.classList.remove("hidden")
            document.getElementById("notebookmin").classList.remove("hidden")

            isflag = 1;
        }
        if (isflag == 1) {
            closeBtn.addEventListener("click", () => {
                notepad.classList.add("hidden");
                document.getElementById("notebookmin").classList.add("hidden")
                document.getElementById("textarea").value = "";
                isflag = 0;
            });
        }
    })


    minimizeBtn.addEventListener("click", () => {
        let ismin = 0
        if (ismin == 0) {
            notepad.classList.add("hidden")
            ismin = 1
        }
        if (ismin = 1) {
            document.getElementById("notebookmin").addEventListener("click", () => {
                notepad.classList.remove("hidden")
                ismin = 0
            })

        }
    });

}

//Calculator Function
const calDrag = function () {

    let isMaximized = false;

    // --- Dragging Logic ---
    let isDragging = false;
    let offsetX, offsetY;

    calmove.addEventListener("mousedown", (e) => {
        if (isMaximized) return; // disable drag when maximized
        isDragging = true;
        offsetX = e.clientX - Calcu.offsetLeft;
        offsetY = e.clientY - Calcu.offsetTop;
        Calcu.style.zIndex = 400;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            Calcu.style.left = (e.clientX - offsetX) + "px";
            Calcu.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    //Minimize

    let isflag = 0;
    document.getElementById("menucalculator").addEventListener("click", () => {
        Calcu.classList.remove("hidden")
        document.getElementById("calcumin").classList.remove("hidden")
    })

    Calicon.addEventListener("dblclick", () => {
        if (isflag == 0) {
            Calcu.classList.remove("hidden")
            document.getElementById("calcumin").classList.remove("hidden")

            isflag = 1;
        }
        if (isflag == 1) {
            Calclose.addEventListener("click", () => {
                Calcu.classList.add("hidden");
                document.getElementById("calcumin").classList.add("hidden")
                document.getElementById("Display").value = "";
                isflag = 0;
            });
        }
    })


    Calmin.addEventListener("click", () => {
        let ismin = 0
        if (ismin == 0) {
            Calcu.classList.add("hidden")
            ismin = 1
        }
        if (ismin = 1) {
            document.getElementById("calcumin").addEventListener("click", () => {
                Calcu.classList.remove("hidden")
                ismin = 0
            })

        }
    });


}


//battery
navigator.getBattery().then(function (battery) {
  

  function updateBatteryStatus() {
    let level = battery.level;
    let percentage = Math.round(level * 100);
    batteryText.textContent ="Battery-Status"+ "  :" +"  "+ percentage + "%";

    // Charging state
    if (battery.charging) {
      batteryIcon.src = "charging.png";
    } else {
      // Battery level based icons
      if (percentage >= 80) {
        batteryIcon.src = "100.png";
      } else if (percentage >= 50) {
        batteryIcon.src = "80.png";
      } else if (percentage >= 20) {
        batteryIcon.src = "50.png";
      } else {
        batteryIcon.src = "10.png";
      }
    }
  }
  batteryIcon.addEventListener("mouseover",function(){
    batteryText.classList="remove"
    batteryText.classList="absolute top-165 right-20 bg-gray-900 w-50 h-9 p-1 rounded text-center"
  })
  batteryIcon.addEventListener("mouseleave",()=>{
    batteryText.classList="hidden"
  })

  updateBatteryStatus();
  battery.addEventListener("levelchange", updateBatteryStatus);
  battery.addEventListener("chargingchange", updateBatteryStatus);
});




wifiicon.addEventListener("click",()=>{

    document.querySelector(".wifi-window").classList.remove("hidden")
    console.log("button clicked")

wifiItems.forEach(item => {
  item.addEventListener("click", () => {
    const ssid = item.dataset.name;
    wifiConnectBox.classList.remove("hidden");
    wifiConnectBox.setAttribute("data-selected-ssid", ssid);
  });
});

connectBtn.addEventListener("click", () => {
  const ssid = wifiConnectBox.getAttribute("data-selected-ssid");
  const password = wifiPassword.value;

  if (password.length >= 4) {
    alert(`Connecting to ${ssid} with password: ${password}`);
    // Optional: Simulate "Connected"
  } else {
    alert("Please enter a valid password");
  }
});
})
center.addEventListener("click",()=>{
    document.querySelector(".wifi-window").classList.add("hidden")
})



function updateClockAndDate() {
  const timeDisplay = document.getElementById("timeDisplay");
  const dateDisplay = document.getElementById("dateDisplay");

  const now = new Date();

  // 🗓️ Format Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  // 🕒 Format Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 to 12 for 12-hour format

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${ampm}`;

  // ⏱️ Show in DOM
  dateDisplay.textContent = formattedDate;
  timeDisplay.textContent = formattedTime;
}

// ⏲️ Start ticking every second
setInterval(updateClockAndDate, 1000);

// Start immediately
const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // Disable default menu
  contextMenu.style.top = `${e.clientY}px`;
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.classList.remove("hidden");
});

document.addEventListener("click", function () {
  contextMenu.classList.add("hidden");
});








updateClockAndDate();




calDrag()
startm();
notepadd()