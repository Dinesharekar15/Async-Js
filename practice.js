// async await



function getData(dataId){
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data" ,dataId)
                resolve("done")
                    
                        
            },2000)
        })
}
    
async function getdata(){
    await getData(1)
    await getData(2)
    await getData(3)
}
getdata()



//promose chaining

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Data" ,dataId)
//             resolve("done")
                
                    
//         },2000)
//     })
// }

// getData(1)
// .then((res)=>{
//     return getData(2)
// }).then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     console.log(res)
// })





// Callback Hell

// function getData(dataId,getcallback){
//      setTimeout(()=>{
//         console.log("Data" ,dataId)
//         if(getcallback){
//             getcallback()
//         }
//     },2000)
//     }

//   getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
//   })  