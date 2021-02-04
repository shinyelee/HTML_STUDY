// 0부터 100까지 1은 몇 번 들어갔을까?

let s = ''
for(let i=0; i<100; i++) {
	s += i;
}
console.log(s);
console.log(s.match(/1/g).length);