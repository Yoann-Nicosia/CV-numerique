let redLine = "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 1400 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1130%26quot%3b)' fill='none'%3e%3crect width='1400' height='1000' x='0' y='0' fill='rgba(29%2c 29%2c 29%2c 1)'%3e%3c/rect%3e%3cpath d='M1653.7 466.8C1450.45 485.1 1258.63 924.2 966.14 906.8 673.65 889.4 799.32 105.38 622.36-90' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1448.32 317.47C1266.25 319.73 1119.4 534.01 750.93 527.47 382.46 520.93 292.19-105.31 53.54-159.63' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1656.08 854.33C1539.94 853.16 1432.36 729.33 1208.65 729.33 984.93 729.33 1049.47 901.93 761.21 854.33 472.96 806.73 516.95 116.51 313.78-22.28' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1633.81 555.6C1520.85 562.83 1504.4 831.35 1238.11 775.6 971.81 719.85 1036.25-16.34 842.4-191.43' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1479.93 670.35C1375.09 668.91 1279.76 545.35 1079.59 545.35 879.41 545.35 933.59 708.97 679.24 670.35 424.9 631.73 459.56 19.67 278.9-101.03' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1130'%3e%3crect width='100%' height='100%' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e)";
let test = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
function changeTheme() {
    document.getElementById("blueRod").style.backgroundColor = "red";
    document.getElementById("accueilRight").style.backgroundImage = "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 1400 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1130%26quot%3b)' fill='none'%3e%3crect width='1400' height='1000' x='0' y='0' fill='rgba(29%2c 29%2c 29%2c 1)'%3e%3c/rect%3e%3cpath d='M1653.7 466.8C1450.45 485.1 1258.63 924.2 966.14 906.8 673.65 889.4 799.32 105.38 622.36-90' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1448.32 317.47C1266.25 319.73 1119.4 534.01 750.93 527.47 382.46 520.93 292.19-105.31 53.54-159.63' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1656.08 854.33C1539.94 853.16 1432.36 729.33 1208.65 729.33 984.93 729.33 1049.47 901.93 761.21 854.33 472.96 806.73 516.95 116.51 313.78-22.28' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1633.81 555.6C1520.85 562.83 1504.4 831.35 1238.11 775.6 971.81 719.85 1036.25-16.34 842.4-191.43' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1479.93 670.35C1375.09 668.91 1279.76 545.35 1079.59 545.35 879.41 545.35 933.59 708.97 679.24 670.35 424.9 631.73 459.56 19.67 278.9-101.03' stroke='rgba(255%2c 0%2c 0%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1130'%3e%3crect width='100%' height='100%' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e)";
}

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}