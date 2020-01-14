// function delay(timer,callback){
//     setTimeout(()=>{
//         callback()
//     },timer)
// }


// delay(1000,function(){
//     console.log("이녀석을 실행해라")
    
//     delay(1000,function(){
//         console.log("이녀석을 실행해라")
        
//         delay(1000,function(){
//             console.log("이녀석을 실행해라")
//         })
//     })
    
// })


// var a = 0;
//  function delayP(timer){
//     return new Promise((resolve,reject)=>{
//         a= a +1;
//         setTimeout(()=>{
//             resolve("성공" + a)
//         },timer)
//     })
// }


// delayP(1000).then((msg)=>{
//     console.log(msg)
//     return delayP(1000)
// }).then((msg2)=>{
//     console.log(msg2)
//     return 'wow'
// }).then((msg)=>{
//     console.log(msg)
// })






var a = 0;
 function delayP2(timer){
    return new Promise((resolve,reject)=>{
        a= a +1;
        setTimeout(()=>{
            console.log("실행",a)
            resolve("성공"+a)
        },timer)
    })
}


var k =async()=>{

    var b = await delayP2(1000);
    var c=  await delayP2(1000);
    console.log(b,c)
}

k();