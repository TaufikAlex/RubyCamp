// Documentation babel preset-es2015
//https://www.npmjs.com/package/babel-preset-es2015

//https://stackoverflow.com/questions/33448675/babel-6-cli-unexpected-token-export
// this code inspiration with stackoverflow
import MesinHitung from './MesinHitung';
const mh = new MesinHitung();
const pi = 22/7;

mh.add (10).subtract(5).result();//1 + 10 - 5 =6
mh.add (3).multiply(4).divide(6).result(); // current result is 2 then the mhutate is : 6 + 3 * 4 /6 =6
mh.x =7; // set jari jari 7
console.log(`nilai sekarang : ${mh.x}`);
mh.multiply(2).multiply(pi).result();// Keliling lingkaran dengan jari jari 7 => 2 x pi x r =44
mh.x = 7; // set jari 7
mh.square().multiply(pi).result(); // luas lingkaran dengan jari jari 7 => pi x r pangkat 2 =154
mh.x =4;
mh.exponent(3).result(); // 4 pangkat 3 =64
