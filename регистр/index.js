
const mail_text = document.querySelector('.mail_text')
const mail_text_usa = document.querySelector('.mail_text_usa')
const mail_button_text = document.querySelector('.mail_button')
const mail_button_text_usa = document.querySelector('.mail_button_usa')

const hRUS = document.querySelector('.hrus')
const hUSA = document.querySelector('.husa')

const day = document.querySelector('.day')
const day_usa = document.querySelector('.day_usa')

const intrname = document.querySelector('.intrname')
const intrname_usa = document.querySelector('.intrname_usa')

const word = document.querySelector('.word')
const word_usa= document.querySelector('.word_usa')

const head_text_rus = document.querySelector('.header_text')
const head_text_usa = document.querySelector('.header_text_usa')

const dat_text = document.querySelector('.dat_text')
const dat_text_usa = document.querySelector('.dat_text_usa')

const ruslengimg = document.querySelector('.header_imgrus')
const usalengimg = document.querySelector('.header_imgusa')
const rusleng = document.querySelector('.header_rus')
const usaleng = document.querySelector('.header_usa')










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

    localStorage.clear

    function NameNom(){
        const intrname = document.querySelector('.intrname').value
        console.log(intrname)
        const namevalue = localStorage.setItem('name', intrname)
        return{
            namevalue
        }
    }  
    
    function DayLengs(){
        const daybtn = document.querySelector('.day').value
        if(daybtn >= 1 && daybtn <= 31){
            console.log(daybtn);
            const dayvalue = localStorage.setItem('day',daybtn)
            return{
                dayvalue
            }
        }else{
            alert('в дне введите число от 1 до 31')  
            localStorage.removeItem('day')                        
        }
        
        
    }
    
    function MonthLengs(){
        const monthbtn = document.querySelector('.month').value
        if (monthbtn >= 1 && monthbtn <= 12){
            console.log(monthbtn)
            const monthvalue = localStorage.setItem('month',monthbtn)
            return{
                monthvalue
            }
        }
        else{
            alert('в месяце введите число от 1 до 12') 
            localStorage.removeItem('month')
        }
        
    }
    
    function YerLengs(){
        const yerbtn = document.querySelector('.yer').value
        if (yerbtn >= 1922 && yerbtn <= 2022){  
            console.log(yerbtn);
            const yervalue = localStorage.setItem('yer',yerbtn)
            return{
                yervalue
            }
        }
        else{
            alert('в году введите число от 1922 до 2022')
            localStorage.removeItem('yer') 
            
        }
        
        
    }
    // yerbtn.addEventListener('click',()=>{
    //     yerbtn.classList.add('none')
    //     mas4.push(prompt('введите год'))
        
        
    // })
    
    
    function PasswordLengs(){
        const passbtn = document.querySelector('.passwordbtn').value
        if(passbtn.value == null){
            alert('введите парроль')
        }
        else{
            console.log(passbtn)
            const passvalue = localStorage.setItem('password', passbtn)
            return{
                passvalue
            }
        }
        
    }
    
    function EmailLengs(){
        const emailbtn = document.querySelector('.emailbtn').value
        if(emailbtn.value == null){
            alert('введите адрес электронной почты');
        }
        else{
            console.log(emailbtn);
            const emailvalue = localStorage.setItem('email', emailbtn)
            return{
                emailvalue
            }
        }
    }
    
    const ac = document.querySelector('.acbtn')
    ac.addEventListener('click',()=>{
        PasswordLengs() 
        YerLengs() 
        MonthLengs() 
        DayLengs() 
        NameNom() 
        EmailLengs() 
        
        
    }) 
})

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

    localStorage.clear

    function NameNom(){
        const intrname = document.querySelector('.intrname').value
        console.log(intrname)
        const namevalue = localStorage.setItem('name', intrname)
        return{
            namevalue
        }
    }  
    
    function DayLengs(){
        const daybtn = document.querySelector('.day').value
        if(daybtn >= 1 && daybtn <= 31){
            console.log(daybtn);
            const dayvalue = localStorage.setItem('day',daybtn)
            return{
                dayvalue
            }
        }else{
            alert('in the day, enter a number from 1 to 31')  
            localStorage.removeItem('day')                        
        }
        
        
    }
    
    function MonthLengs(){
        const monthbtn = document.querySelector('.month').value
        if (monthbtn >= 1 && monthbtn <= 12){
            console.log(monthbtn)
            const monthvalue = localStorage.setItem('month',monthbtn)
            return{
                monthvalue
            }
        }
        else{
            alert('in the month, enter a number from 1 to 12') 
            localStorage.removeItem('month')
        }
        
    }
    
    function YerLengs(){
        const yerbtn = document.querySelector('.yer').value
        if (yerbtn >= 1922 && yerbtn <= 2022){  
            console.log(yerbtn);
            const yervalue = localStorage.setItem('yer',yerbtn)
            return{
                yervalue
            }
        }
        else{
            alert('in the year, enter a number between 1922 and 2022')
            localStorage.removeItem('yer') 
            
        }
        
        
    }
    // yerbtn.addEventListener('click',()=>{
    //     yerbtn.classList.add('none')
    //     mas4.push(prompt('введите год'))
        
        
    // })
    
    
    function PasswordLengs(){
        const passbtn = document.querySelector('.passwordbtn').value
        if(passbtn == null){
            alert('enter password')
        }
        else{
            console.log(passbtn)
            const passvalue = localStorage.setItem('password', passbtn)
            return{
                passvalue
            }
        }
        
    }
    
    function EmailLengs(){
        const emailbtn = document.querySelector('.emailbtn').value
        if(emailbtn == null){
            alert('enter your email address');
        }
        else{
            console.log(emailbtn);
            const emailvalue = localStorage.setItem('email', emailbtn)
            return{
                emailvalue
            }
        }
    }
    
    const ac = document.querySelector('.acbtn')
    ac.addEventListener('click',()=>{
        PasswordLengs()
        YerLengs()
        MonthLengs() 
        DayLengs()
        NameNom() 
        EmailLengs() 
            
        
        
        
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



 