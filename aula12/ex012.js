var agora = new Date()
var minutos= new Date()

var hora = agora.getHours() 
console.log(`Agora são exatamente ${hora}horas.`)

if(hora<12){
    console.log(`bom dia, ${hora}horas.`)
}else{
    if( hora<18){
        console.log(`Boa tarde, ${hora}horas`)
    }else{
        console.log(`Boa noite, ${hora}horas`)
    }
}