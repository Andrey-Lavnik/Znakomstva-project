//проблемы: js работает только после смены языка, не знаю как обозначить 'пустоту' в input и после смены языка несколько раз если в инпутах ничего не написано то сообщение об необходимости ввести все значения выводится несколько раз


let mail_text = document.querySelector('.mail_text')
let mail_text_usa = document.querySelector('.mail_text_usa')
let mail_button_text = document.querySelector('.mail_button')
let mail_button_text_usa = document.querySelector('.mail_button_usa')

let hRUS = document.querySelector('.hrus')
let hUSA = document.querySelector('.husa')

let day = document.querySelector('.day')
let day_usa = document.querySelector('.day_usa')

let intrname = document.querySelector('.intrname') 
let intrname_usa = document.querySelector('.intrname_usa')

let word = document.querySelector('.word')
let word_usa= document.querySelector('.word_usa')

let head_text_rus = document.querySelector('.header_text')
let head_text_usa = document.querySelector('.header_text_usa')

let dat_text = document.querySelector('.dat_text')
let dat_text_usa = document.querySelector('.dat_text_usa')

let ruslengimg = document.querySelector('.header_imgrus')
let usalengimg = document.querySelector('.header_imgusa')
let rusleng = document.querySelector('.header_rus')
let usaleng = document.querySelector('.header_usa')

let yer = document.querySelector('.yer')
let yer_usa = document.querySelector('.yer_usa')

let month = document.querySelector('.month')
let month_usa = document.querySelector('.month_usa')

let emailbtn = document.querySelector('.emailbtn')
let emailbtn_usa = document.querySelector('.emailbtn_usa')

let passwordbtn = document.querySelector('.passwordbtn')
let passwordbtn_usa = document.querySelector('.passwordbtn_usa')

let acbtn = document.querySelector('.acbtn')
let acbtn_usa = document.querySelector('.acbtn_usa')



ruslengimg.addEventListener('click',()=>{
    usalengimg.classList.remove('none')
    usaleng.classList.remove('none')
    rusleng.classList.add('none')
    ruslengimg.classList.add('none')

    head_text_rus.classList.add('none')
    head_text_usa.classList.remove('none')

    mail_text.classList.add('none')
    mail_button_text.classList.add('none')
    mail_text_usa.classList.remove('none')
    mail_button_text_usa.classList.remove('none')

    hRUS.classList.add('none')
    hUSA.classList.remove('none')

    word.classList.add('none')
    word_usa.classList.remove('none')

    intrname.classList.add('none')
    intrname_usa.classList.remove('none')

    dat_text.classList.add('none')
    dat_text_usa.classList.remove('none')
    
    day.classList.add('none')
    day_usa.classList.remove('none')

    month.classList.add('none')
    month_usa.classList.remove('none')

    yer.classList.add('none')
    yer_usa.classList.remove('none')

    emailbtn.classList.add('none')
    emailbtn_usa.classList.remove('none')

    passwordbtn.classList.add('none')
    passwordbtn_usa.classList.remove('none')

    acbtn.classList.add('none')
    acbtn_usa.classList.remove('none')

    
    acbtn_usa.addEventListener('click', ()=>{
            let intrnamebtn_usa = document.querySelector('.intrname_usa').value
            console.log(intrnamebtn_usa)
            localStorage.setItem('name', intrnamebtn_usa)
        
        
        
            let daybtn_usa = document.querySelector('.day_usa').value
            if(daybtn_usa >= 1 && daybtn_usa <= 31){
                console.log(daybtn_usa);
                localStorage.setItem('day',daybtn_usa)
            }else{
                alert('in the day, enter a number from 1 to 31')  
                                       
            }
            
            
        
        
        
            let monthbtn_usa = document.querySelector('.month_usa').value
            if (monthbtn_usa >= 1 && monthbtn_usa <= 12){
                console.log(monthbtn_usa)
                localStorage.setItem('month',monthbtn_usa)
            }
            else{
                alert('in the month, enter a number from 1 to 12') 
                
            }
            
        
        
        
            let yerbtn_usa = document.querySelector('.yer_usa').value
            if (yerbtn_usa >= 1922 && yerbtn_usa <= 2022){  
                console.log(yerbtn_usa);
                localStorage.setItem('yer',yerbtn_usa)
            }
            else{
                alert('in the year, enter a number between 1922 and 2022')
                 
                
            }
            
            
        
        // yerbtn.addEventListener('click',()=>{
        //     yerbtn.classList.add('none')
        //     mas4.push(prompt('введите год'))
            
            
        // })
        
        
        
            let passbtn_usa = document.querySelector('.passwordbtn_usa').value
            if(passbtn_usa == undefined){
                alert('enter password')
            }
            else{
                console.log(passbtn_usa)
                localStorage.setItem('password', passbtn_usa)
            }
            
        
        
        
            let emailbtn_usa = document.querySelector('.emailbtn_usa').value
            if(emailbtn_usa == undefined){
                alert('enter your email address');
            }
            else{
                console.log(emailbtn_usa);
                localStorage.setItem('email', emailbtn_usa)
            }
        
    })
    
    
    
    
    
})

usalengimg.addEventListener('click',()=>{
    
    ruslengimg.classList.remove('none')
    rusleng.classList.remove('none')
    usaleng.classList.add('none')
    usalengimg.classList.add('none')

    head_text_rus.classList.remove('none')
    head_text_usa.classList.add('none')

    mail_text.classList.remove('none')
    mail_button_text.classList.remove('none')
    mail_text_usa.classList.add('none')
    mail_button_text_usa.classList.add('none')

    hRUS.classList.remove('none')
    hUSA.classList.add('none')

    intrname.classList.remove('none')
    intrname_usa.classList.add('none')

    word.classList.remove('none')
    word_usa.classList.add('none')

    dat_text.classList.remove('none')
    dat_text_usa.classList.add('none')
    day.classList.remove('none')
    day_usa.classList.add('none')

    month.classList.remove('none')
    month_usa.classList.add('none')

    yer.classList.remove('none')
    yer_usa.classList.add('none')

    emailbtn.classList.remove('none')
    emailbtn_usa.classList.add('none')

    passwordbtn.classList.remove('none')
    passwordbtn_usa.classList.add('none')

    acbtn.classList.remove('none')
    acbtn_usa.classList.add('none')

    
    acbtn.addEventListener('click',()=>{
            let intrnamebtn = document.querySelector('.intrname').value
            console.log(intrnamebtn)
            localStorage.setItem('name', intrnamebtn)
        
        
        
            let daybtn = document.querySelector('.day').value
            if(daybtn >= 1 && daybtn <= 31){
                console.log(daybtn);
                localStorage.setItem('day',daybtn)
            }else{
                alert('в дне введите число от 1 до 31')  
                                       
            }
            
            
        
        
        
            let monthbtn = document.querySelector('.month').value
            if (monthbtn >= 1 && monthbtn <= 12){
                console.log(monthbtn)
                localStorage.setItem('month',monthbtn)
            }
            else{
                alert('в месяце введите число от 1 до 12') 
                
            }
            
        
        
        
            let yerbtn = document.querySelector('.yer').value
            if (yerbtn >= 1922 && yerbtn <= 2022){  
                console.log(yerbtn);
                localStorage.setItem('yer',yerbtn)
            }
            else{
                alert('в году введите число от 1922 до 2022')
                
                
            }
            
            
        
        // yerbtn.addEventListener('click',()=>{
        //     yerbtn.classList.add('none')
        //     mas4.push(prompt('введите год'))
            
            
        // })
        
        
        
            let passbtn = document.querySelector('.passwordbtn').value
            if(passbtn == undefined){
                alert('введите парроль')
            }
            else{
                console.log(passbtn)
                localStorage.setItem('password', passbtn)
                
            }
            
        
        
        
            let emailbtn = document.querySelector('.emailbtn').value
            if(emailbtn == undefined){
                alert('введите адрес электронной почты');
            }
            else{
                console.log(emailbtn);
                localStorage.setItem('email', emailbtn)
            }
        
        
        
    
    }) 
    
    
})
    











const boybuttonon = document.querySelector('.boy_on')
const boybuttonoff = document.querySelector('.boy_off')
const gierlbuttonon = document.querySelector('.gierl_on')
const gierlbuttonoff = document.querySelector('.gierl_off')
const pol = document.querySelector('.pol')

var lengsmas = []

var polmas =[]
boybuttonoff.addEventListener('click',()=>{
    boybuttonoff.classList.add('none')
    boybuttonon.classList.remove('none')
    gierlbuttonoff.classList.remove('none')
    gierlbuttonon.classList.add('none')
    polmas.shift()
    polmas.push('мужской')
    localStorage.setItem('pol',polmas[0] )
    
})

gierlbuttonoff.addEventListener('click', ()=>{
    boybuttonoff.classList.remove('none')
    boybuttonon.classList.add('none')
    gierlbuttonoff.classList.add('none')
    gierlbuttonon.classList.remove('none')
    polmas.shift()
    polmas.push('женский')
    localStorage.setItem('pol',polmas[0])
    
})



 