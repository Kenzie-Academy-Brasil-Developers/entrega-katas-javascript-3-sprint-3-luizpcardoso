const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(kataResult, kataSelected)  {

    const target = document.getElementsByTagName("body")[0];

    const paragraph = document.createElement("p")

    const conteudo = 'o kata selecionado foi o: ' + kataSelected +' com o resultado: ' + kataResult ;

    paragraph.innerText = conteudo;

    target.appendChild(paragraph)

    
    
}




function kata1() {

    let count = []

    for (let i =0 ; i<=25 ; i++) {

        count.push(i)

    }

    
    return showResults(count, "kata1");

}

function kata2() {
    let count = []

    for (let i =25 ; i>0 ; i = i-1) {

        count.push(i)
    }
    return showResults(count, "kata2");
}

function kata3() {
    let count = []

    for (let i =-1 ; i>=-25 ; i = i-1) {

        count.push(i)
    }
    return showResults(count, "kata3");
}

function kata4() {

    let count = [];
    for (let i =-25 ; i<0 ; i++) {

        count.push(i);
    }
    return showResults(count, "kata4");
}

function kata5() {

    let count = [];

    for (let i =25 ; i>=-25 ; i = i-2) {

        count.push(i);
    }
    return showResults(count, "kata5");
}

function kata6() {

    let count = [];

    for (let i = 1 ; i<=100 ; i++) {

        if(!(i%3)){
            count.push(i);
        }
                
    }
    return showResults(count, "kata6");
    
}

function kata7() {

    let count = [];

    for (let i = 1 ; i<=100 ; i++) {

        if(!(i%7)){
            count.push(i);
        }
                
    }
    return showResults(count, "kata7");
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
    return showResults(count, "kata8");
}

function kata9() {

    let count = [];

    for (let i = 1 ; i<=100 ; i++) {

        if((i%2)&&!(i%5)){
            count.push(i);
        }               
    }
    return showResults(count, "kata9");
}

function kata10(array) {

    return showResults(array, "kata10")
    
}

function kata11(array) {


    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

        if(!(array[i]%2)){
            count.push(array[i]);
        }
        
                
    }
    return showResults(count, "kata11");


}

function kata12(array) {
  
    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

        if((array[i]%2)){
            count.push(array[i]);
        }
        
                
    }
    return showResults(count, "kata12");
}


function kata13(array) {

    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

        if(!(array[i]%8)){
            count.push(array[i]);
        }
        
                
    }
    return showResults(count, "kata13");
}

function kata14(array) {

    let count = [];

    for (let i = 0 ; i< array.length ; i++) {

       let square = array[i]*array[i]
       
       count.push(square);
        
                
    }

    return showResults(count, "kata14");
}

function kata15() {


    let count = 0;

    for (let i = 0 ; i< 20 ; i++) {

       
       
       count = count + i;
        
                
    }

    return showResults(count, "kata15");
}

function kata16(array) {

    let count = 0;

    for (let i = 0 ; i< array.length ; i++) {

    
      count = count + array[i]
        
                
    }

    return showResults(count, "kata16");
}

function kata17(array) {


    let count = array[0];

    for (let i = 0 ; i< array.length ; i++) {

    
      if(array[i]<count) {

        count = array[i]

      }
        
                
    }

    return showResults(count, "kata17");
}

function kata18(array) {

    let count = array[0];

    for (let i = 0 ; i< array.length ; i++) {

    
      if(array[i]>count) {

        count = array[i]

      }
        
                
    }

    return showResults(count, "kata18");
}

kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10(sampleArray)
kata11(sampleArray)
kata12(sampleArray)
kata13(sampleArray)
kata14(sampleArray)
kata15()
kata16(sampleArray)
kata17(sampleArray)
kata18(sampleArray)


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
