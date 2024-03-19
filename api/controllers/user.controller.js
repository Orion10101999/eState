

const test = (req ,resp ) =>{
    resp.json({
        message : "API Route is Working Hello World"
    })
    console.log(req.body);
}



export { test }

