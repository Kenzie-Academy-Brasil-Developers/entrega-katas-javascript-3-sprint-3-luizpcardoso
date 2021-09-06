const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {

    let count = []

    for (let i =0 ; i<=25 ; i++) {

        count.push(i)

    }

    return count;

}

function kata2() {
    let count = []

    for (let i =25 ; i>0 ; i = i-1) {

        count.push(i)
    }
    return count;
}

function kata3() {
    let count = []

    for (let i =-1 ; i>=-25 ; i = i-1) {

        count.push(i)
    }
    return count;
}

function kata4() {

    let count = [];
    for (let i =-25 ; i<0 ; i++) {

        count.push(i);
    }
    return count;
}

function kata5() {

    let count = [];

    for (let i =25 ; i>=-25 ; i = i-2) {

        count.push(i);
    }
    return count;
}

function kata6() {

    let count = [];

    for (let i = 1 ; i<=100 ; i++) {

        if(!(i%3)){
            count.push(i);
        }
                
    }
    return count;
    
}

function kata7() {

    let count = [];

    for (let i = 1 ; i<=100 ; i++) {

        if(!(i%7)){
            count.push(i);
        }
                
    }
    return count;
}

function kata8() {

    let count = [];

    for (let i = 1; i<=100 ; i++) {

        if(!(i%3)){
            count.push(i);
        }
        else if (!(i%7)){
            count.push(i);
        }
        
    }
    return count;
}

function kata9() {

    let count = [];

    for (let i = 1 ; i<=100 ; i++) {

        if((i%2)&&!(i%5)){
            count.push(i);
        }               
    }
    return count;
}

function kata10(array) {

    return array
    
}

function kata11(array) {


    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

        if(!(array[i]%2)){
            count.push(array[i]);
        }
        
                
    }
    return count;


}

function kata12(array) {
  
    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

        if((array[i]%2)){
            count.push(array[i]);
        }
        
                
    }
    return count;
}


function kata13(array) {

    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

        if(!(array[i]%8)){
            count.push(array[i]);
        }
        
                
    }
    return count;
}

function kata14(array) {

    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

       let square = array[i]*array[i]
       
       count.push(square);
        
                
    }

    return count;
}

function kata15() {


    let count = 0;

    for (let i = 0 ; i< 20 ; i++) {

       
       
       count = count + i;
        
                
    }

    return count;
}

function kata16(array) {

    let count = 0;

    for (let i = 0 ; i< array.length ; i++) {

    
      count = count + array[i]
        
                
    }

    return count;
}

function kata17(array) {


    let count = array[0];

    for (let i = 0 ; i< array.length ; i++) {

    
      if(array[i]<count) {

        count = array[i]

      }
        
                
    }

    return count;
}

function kata18(array) {

    let count = array[0];

    for (let i = 0 ; i< array.length ; i++) {

    
      if(array[i]>count) {

        count = array[i]

      }
        
                
    }

    return count;
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
