//  Get seasons name by month

function getSeasons(month){
    let season;
    switch(true){
        case (month>=1 && month<=2 || month==12):
            season = 'Winter';
            break;
        case (month>=3 && month<=5):
            season ='Spring' 
            break;  
        case (month>=6 && month<=8):  
            season ='Summer'   
            break;
        case (month>=9 && month<=11):
            season ='Autumn'
            break;
        default: 
           return `invalid month`    
    }
    return `This is ${season}`
    
}
const per1 = getSeasons(12);
console.log(per1);
