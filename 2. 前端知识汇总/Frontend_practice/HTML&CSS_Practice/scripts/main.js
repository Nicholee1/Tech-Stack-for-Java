const myImage = document.querySelector("img"); //选取元素

//图片切换
myImage.onclick = () => { //点击事件，箭头匿名函数
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");//弹出输入框，返回输入值
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName); //本地存储, 存储键值对，即使重启浏览器也依然存在
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}   