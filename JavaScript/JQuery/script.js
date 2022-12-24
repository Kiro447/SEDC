// sleect one div one para one h1 one h3 and a button 


// change text of first h1 
// add new para
// $(document).ready(function(){

// let div = $("#firstWrapper");
// let paragraph = $("p").first();
// let h3= $("h3").first();
// let h1 = $("h1").last();
// let btn = $("button");
// console.log(paragraph);
// })


$(document).ready(function(){
    let allElements = $("*");
    let mainTitleHeader = $("#mainTitle");
    console.log(allElements[0]);
    let innerWrapperElements = $(".innerWrapper")
    let paragraphs = $("p")
    // poveke selectori
    let multipleSelectors = $(".innerWrapper, .wrapper , #mainTitle")
    // console.log(multipleSelectors[0]);

    // for(let i = 0 ; i < multipleSelectors.length ; i++){
    //     console.log(i+1,multipleSelectors[i]);
    // }
    let firstParagraph = $("p:first"); // od html zemi go prviot p
    let lastParagraph = $("p:last");
    // multipleSelectors.first(); // od niza gi zima

    let firstParagraphFromAll = paragraphs.first().text("ChangedText"); // od site P zemi go prviot
    // console.log(firstParagraphFromAll);
    // paragraphs.last().hide();
    // paragraphs.last().show();
    paragraphs.last().css("color","red")
    paragraphs.last().after("<h2>After Header</h2>")
    paragraphs.last().before("<h2>Before Header</h2>")
    let ourButton = $("button");
    // button.on('click',function(){            Prv nacin
    //     console.log('btn is licked'); 
    // })

    ourButton.click(function(){
        $(this).text('Click On me plz')
        console.log('Button is clicked');
        let paragraph = $("p");
        paragraph.hide(); // gi krie site paragraphs na click
        paragraph.after.first(("<h2>Show new</h2>")) // posle site kreira novi
    })
    })
    
    
    




