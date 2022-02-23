let html = document.querySelector("#html");
let style = document.querySelector("#style");
let div1 = document.querySelector("#div1");
let string = `
/*我是一名前端新人,我的名字是陆治宇
 *接下来我要加样式了
 *首先我先准备一个div1
 */
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
 *首先把div变成一个圆
 */
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgb(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳两部分组成
 *一黑一白
 */
#div1{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上两个神秘小球*/
#div1::before{
  width:100px;
  height:100px;
  background:black;
  background: radial-gradient(circle, rgba(255,255,255,1) 32%, rgba(35,35,35,1) 32%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 100%);
  border-radius:50%;
  top:0;
  left:50%;
  transform:translateX(-50%);
}
#div1::after{
  width:100px;
  height:100px;
  background:white;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 32%, rgba(35,35,35,1) 32%, rgba(255,255,255,1) 32%);
  border-radius:50%;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
}
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    n = n + 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n + 1 < string.length) {
      step();
    }
  }, 10);
};
step();
