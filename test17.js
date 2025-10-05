//Arrow Function/ Function Arrow
//ใช้หลักการเดียวกับ Function Expression

let data1 = () => {
    console.log(11111)
}

const data2 = (n1,n2) => {
    console.log(n1+n2)
    return `Wow wow wow`
}
let data3 = 555
 
data1()
console.log( data2(100, 200) )
data1 = 'Hello'
console.log( data1)

//กรณีมีพารามิเตอร์แค่ตัวเดียว ไม่ต้องใส่วงเล็บรอบพารามิเตอร์
let info1 = param1 => {
    console.log(param1)
}
//กรณีมีแค่บรรทัดเดียวในฟังก์ชัน ไม่ต้องใส่ปีกกา {}
let info2 = param1 => console.log(param1)

let info3 = () =>{
    return 111;
}

//กรณีมีแค่คำสั่งเดียวในฟังก์ชัน และต้องการคืนค่า ไม่ต้องใส่ปีกกา {} และคำสั่ง return
let info4 = () => 111;