self.addEventListener("install" , (e)=>{
    console.log("service installing...");
    self.skipWaiting();
})


self.addEventListener("activate" , e=>{
    console.log("activating sw...")
})

self.addEventListener("fetch" , e=>{
    console.log("fetching ")
})