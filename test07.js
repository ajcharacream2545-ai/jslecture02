//Switch พิสูตรหลายครั้ง
//พิสูตรได้เฉพาะ เท่ากัน หรือไม่เท่ากัน

switch ( bus_no ){
    case 84:
        console.log('ไปวัดไร่ขิง');
        break;

    case 57:
        console.log('พาต้า');
        break;

    case 123:
        console.log('สนามหลวง');
        break;

    case 515:
        console.log('ไปอนุสาวรีย์');
        break;
        default: console.log('ไม่รู้จักคันนี้'); //default ไม่มีก็ได้
   
}
 