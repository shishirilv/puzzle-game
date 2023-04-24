//import { score } from "./index.js";
var s=localStorage.getItem("score");
var n=localStorage.getItem("n");
let h=document.getElementById("sc");
console.log(n);
console.log(s);
h.textContent="Your score is:"+s;