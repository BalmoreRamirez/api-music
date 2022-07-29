const customHeader = (req, res, next)=>{
    try {
        const apikey = req.headers.api_key
        if (apikey==="leifer-01"){
            next()
        }else{
            res.status(403)
            res.send({error:"API KEY NO ES CORRECTA"})

        }

    }catch (e) {
        res.status(403)
        res.send({error:"ALGO OCURRIO EN EL CUSTOM HEADER"})

    }
}


module.exports = customHeader