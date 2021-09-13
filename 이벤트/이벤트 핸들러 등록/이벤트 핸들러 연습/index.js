const btn = document.querySelector('#btn');

function printBtn() {
  console.log(btn.outerHTML);
}
  
btn.onclick = function() {
  console.log('click!');
};
btn.onclick = printBtn;
btn.removeEventListener('click', printBtn);


function printHi() {
  console.log('Hi!');
}
 
btn.addEventListener('click', printBtn);
btn.removeEventListener('click', printHi);
btn.addEventListener('click', printHi);
btn.addEventListener('click', function() {
  console.log('click!');
});
btn.removeEventListener('click', function() {
  console.log('click!');
});