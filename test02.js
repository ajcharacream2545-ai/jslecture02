//Identifier คือ ชื่อที่ Dev ตั้งขึ้นมาเอง (ตัวแปร, ฟังก์ชัน, ค่าคงที่, คลาส, ออปเจ็กต์) ต้องเป็นไปตามกฏการตั้งชื่อ
//- ไม่เว้นวรรค ไม่ขึ้นต้นด้วยตัวเลข ไม่ใช้คำสงวน/คำสัญ(reserved word/keyword)
//- ไม่ใช้สัญลักษณ์พิเศษ ยกเว้น _ , $
//- ควรตั้งเป็น Pascal Case, Camel Case, Snake Case
//-          StudentScore,  studentScore,  student_score/STUDENT_SCORE
 
 
// Code Block คือ ขอบเขตการทำงานของโปรแกรม เขียนอยู่ภายใต้ { }
 
 
//Variable ตัวแปร คือ ชื่อที่ Dev ตั้งขึ้นมาเอง เอาไว้เก็บข้อมูลที่เกิดขึ้นในโปรแกรม
var dti01 = 'aaa'   //แก้ไขได้  เป็น Global ใช้ที่ไหนก็ได้
let dti02 = 'bbb'   //แก้ไขได้  เป็น Local  ใช้เฉพาะที  ***
const dti03 = 'ccc'  //แก้ไขไม่ได้ เป็น Local ใช้เฉพาะที่  ***
 
dti01 = '111'
dti02 = '222'
// dti03 = '333'
{
    var dti04 = 'ddd'
    let dti05 = 'eee'
    const dti06 = 'fff'
    console.log(dti01, dti02, dti03, dti04, dti05, dti06)
}
 
console.log(dti01, dti02, dti03, dti04)

