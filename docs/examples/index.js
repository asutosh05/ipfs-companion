console.log("test")

async function test(){
    if (window.ipfs && window.ipfs.enable) {
      console.log("test1")
        const ipfs = await window.ipfs.enable({commands: ['id','dag','version']})
        const id= await ipfs.id()
        console.log(ipfs)
        console.log(id)
        console.log(await ipfs.swarm.peers())
        //const [{ hash }] = await ipfs.add(Buffer.from('i am 007'))
        const data = await ipfs.cat("QmNeJgbJxik9HXGTzEysu5NPcFodN2bHkgiELSGFzhBZuA")
        //console.log(hash)
        console.log(data.toString()) 
        
      } else {
        // Fallback
      }
}

test()
// window.alert("test")
// const node = new window.Ipfs()

// node.on('ready', () => {
//   // Ready to use!
//   // See https://github.com/ipfs/js-ipfs#core-api
// })


