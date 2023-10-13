let curTheme;
let sliderMode = 'bio' 
let sl1 = 'master in creating half-functioning websites, with 1 year of experience. Head of captcha development at the Steam platform and winner of the "Chief Nazi of the Year" award'
let skillList = 'HTML, CSS, JS, JSON, JQuery, SCSS, Feng Shui, Scrum&Agile.'
let html = 'HTML (Hypertext Markup Language) is a standardized hypertext markup language for documents for viewing web pages in a browser. Web browsers receive an HTML document from the server via HTTP/HTTPS protocols or open it from a local disk, then interpret the code into an interface that will be displayed on the monitor screen.'
let css = 'CSS is a formal language for describing the appearance of a document written using a markup language. CSS is used by web page creators to specify colors, fonts, styles, block placement, and other aspects of the appearance of those web pages.'
let js='JavaScript (often simply JS) is a lightweight, interpreted or JIT-compiled, object-oriented language with first-class functions. It is most widely used as a web page scripting language, but is also used in other software products, such as node.js or Apache CouchDB.'
let json='JSON (JavaScript Object Notation) is a simple data exchange format that is easy to read and write by both humans and computers. It is based on a subset of the JavaScript programming language defined in the ECMA-262 3rd Edition. JSON is a text format that is completely independent of the implementation language.'
let JQuery='jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility.'
let sass='Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
let FengShui='Taoist practice of symbolic development (organization) of space. Adepts believe that with the help of Feng Shui, one can choose the “best” place to build a house or burial. The stated goal of Feng Shui is to search for favorable flows of qi energy and use them for the benefit of a person.'
let Scrum7Agile='Anyone who frequently carries out complex projects has certainly heard of Scrum. Scrum is a tool from agile project management that was originally used in software development.'
let slideNum = 1
let maxNum = 2
let dog = 'true'
$('.prev').click(function(){

})


// bio proj skill
sliderOn=function(){
    slideClear()   
        $('.sl1').empty()
        $('.sl2').empty()
        $('.sl3').empty()
        $('.sl4').empty()
        $('.sl5').empty()
        $('.sl6').empty()
        $('.sl7').empty()
        $('.sl8').empty()
    if(sliderMode=='bio'){
        $('.sl1').append(`
        <h3 class="slideTitle">About Me</h3>
        <img src="./zeroga.png" alt="img" class="slideSelfie">
        <p class="slideTxt">${sl1}"</p>`)
        $('.sl2').append(`  
        <h3 class="slideTitle">Skills</h3>
        <p class="slideTxt">I have knowledge of ${skillList}</p>`)
        
    }
    
    else if(sliderMode=='skill'){
        $('.sl1').append(`
        <h3 class="slideTitle">HTML</h3>
        <img src="./zhtml.jpg" alt="HTML" class="slideSelfie">
        <p class="slideTxt">${html}</p>`)
        $('.sl2').append(`
        <h3 class="slideTitle">CSS</h3>
        <img src="./zcss.jpg" alt="CSS" class="slideSelfie">
        <p class="slideTxt">${css}</p>`)
        $('.sl3').append(`
        <h3 class="slideTitle">JS</h3>
        <img src="./zjs.png" alt="js" class="slideSelfie">
        <p class="slideTxt">${js}</p>`)
        $('.sl4').append(`
        <h3 class="slideTitle">JSON</h3>
        <img src="./zjson.png" alt="json" class="slideSelfie">
        <p class="slideTxt">${json}</p>`)
        $('.sl5').append(`
        <h3 class="slideTitle">JQuery</h3>
        <img src="./zjquery.png" alt="JQuery" class="slideSelfie">
        <p class="slideTxt">${JQuery}</p>`)
        $('.sl6').append(`
        <h3 class="slideTitle">SASS</h3>
        <img src="./zsass.png" alt="sass" class="slideSelfie">
        <p class="slideTxt">${sass}</p>`)
        $('.sl7').append(`
        <h3 class="slideTitle">Feng Shui</h3>
        <img src="./zfengshui.jpg" alt="FengShui" class="slideSelfie">
        <p class="slideTxt">${FengShui}</p>`)
        $('.sl8').append(`
        <h3 class="slideTitle">Scrum & Agile</h3>
        <img src="./zscrum.png" alt="Scrum&Agile" class="slideSelfie">
        <p class="slideTxt">${Scrum7Agile}</p>`)
    }
}
slideClear = function(){


        $('.sl1').css('display','none')
        $('.sl2').css('display','none')
        $('.sl3').css('display','none')
        $('.sl4').css('display','none')
        $('.sl5').css('display','none')
        $('.sl6').css('display','none')
        $('.sl7').css('display','none')
        $('.sl8').css('display','none')  
        // if(dog == 'true'){
            $(`.sl${slideNum}`).css('display','flex')
        // }
        // else{
            // $('.sl1').css('display','flex')
        // }
        }      


sliderOn()



$('#menuOpen').click(function(){
    // $('.menuOpen').css('display','none')
    // $('.menuBar').css('display','flex')
    $('.menuBar').css('right','13.5%')
    $('.menuBar').css('top','22%')

})
$('.closeMenu').click(function(){
    // $('.menuOpen').css('display','flex')
    // $('.menuBar').css('display','none')
    $('.menuBar').css('right','43.5%')
    $('.menuBar').css('top','106%')
})
$('.sepiaBlue').click(function(){
    $('.menuBar').css('background-color','#236B81')
    $('.mainPage').css('background-color','#D5D2C1')
    curTheme = 'sepiaBlue'
})
$('.cofee').click(function(){
    $('.menuBar').css('background-color','#6f4e37')
    $('.mainPage').css('background-color','#d4ceaa')
    curTheme = 'cofee'
})
$('.dark').click(function(){
    $('.menuBar').css('background-color','#6f4e37')
    $('.mainPage').css('background-color','#D5D2C1')
    curTheme = 'dark'
})
$('.white').click(function(){
    $('.menuBar').css('background-color','#111111')
    $('.mainPage').css('background-color','##bbbbbb')
    curTheme = 'white'
})


// slideNum sliderOn()
$('.prev').click(function(){
    if(slideNum>=2){
        slideNum=slideNum-1
        // dg = true
    }sliderOn()})
$('.next').click(function(){
    if(slideNum<=maxNum-1){
        slideNum=slideNum+1
        // dg = true
    }sliderOn()})

$('#skillBtn').click(function(){
    $('.menuBar').css('right','43.5%')
    $('.menuBar').css('top','106%')
    maxNum = 8
    sliderMode = 'skill'
    // dog=false
    sliderOn()
})
$('#infoBtn').click(function(){
    $('.menuBar').css('right','43.5%')
    $('.menuBar').css('top','106%')
    maxNum = 2
    sliderMode = 'bio'
    // dog=false
    sliderOn()
})

