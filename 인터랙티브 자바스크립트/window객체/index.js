// window: 전역객체 Global Object
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

// 무엇을 사용하던 window객체의 내부 객체 이므로 아래처럼 굳이 'window.'을 붙일 필요 없음
window.console.log(window);
window.console.log(window.innerWidth);
window.console.log(window.innerHeight);