// if-else-if พิสูจน์หลายครั้ง
// (พิสูจน์มากกว่า น้อยกว่า เท่ากัน ไม่เท่ากัน ได้หมด)
 
let score = 20
 
if (score >= 80) {
    console.log('A')
}else if (score >= 70) {
    console.log('B')
}else if (score >= 60) {
    console.log('C')
}else if (score >= 50) {
    console.log('D')
}else if( score >= 40) {  // สามารถมี if(  ) ได้
    console.log('F')
}
 