setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("bg").style.background = "#000";
}, 3000);

function jump() {
  setTimeout(() =>{
    document.getElementById("button").style.border = "2px solid #3dbd00";
    document.getElementById("button").style.color = "#3dbd00";
    document.getElementById("button").style.background = "#fff";
    document.getElementById("mario").style.top = "30%";
  }, 200);
  document.getElementById("button").style.border = "2px solid #f3f3f3";
  document.getElementById("button").style.color = "#fff";
  document.getElementById("button").style.background = "#3dbd00";
  document.getElementById("mario").style.top = "13%";
};