console.log(`Month of Year`);
function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`Month : 1 : January`);
            break;
            case 2:
            console.log(`Month : 2 : February`);
            break;
            case 3:
            console.log(`Month : 3 : March`);
            break;
            case 4:
            console.log(`Month : 4 : April`);
            break;
            case 5:
            console.log(`Month : 5 : May`);
            break;
            case 6:
            console.log(`Month : 6 : June`);
            break;
            case 7:
            console.log(`Month : 7 : July`);
            break;
            case 8:
            console.log(`Month : 8 : August`);
            break;
            case 9:
            console.log(`Month : 9 : September`);
            break;
            case 10:
            console.log(`Month : 10 : October`);
            break;
            case 11:
            console.log(`Month : 11 : November`);
            break;
            case 12:
            console.log(`Month : 12 : December`);
            break;
    
        default:console.log(`${monthNumber} : Invalid Month Entered.`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);