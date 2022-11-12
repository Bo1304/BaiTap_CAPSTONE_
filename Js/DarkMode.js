// /**
// Solution: 
// Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
// Dựa vào class dark, ta viết css dành riêng cho dark theme.

// Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

// */

// //gọi thẻ button có id là switchButton
// // gắn chức năng click cho switchButton
// document.getElementById("switchButton").onclick = function () {
//     //khi button được click thì tìm đến thẻ body có id là myBody
//     // dùng classlist để gọi thuộc tính class của thẻ body
//     //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
//     document.getElementById("body").classList.toggle("dark");
//     // document.getElementById(".container_out_gallery").classList.toggle("dark");
//   };
  


const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body ");


toggle.addEventListener("click",function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-bright-high-fill')){
    body.style.background = 'white ';
    body.style.color = 'black';
    body.style.transition = '2s';
    
  }else{
    body.style.background = 'black ';
    body.style.color = 'white';
    body.style.transition = '2s';
  }
  
})
