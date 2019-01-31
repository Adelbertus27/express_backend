var express = require('express')
var cors = require('cors')
var upload = require('express-fileupload')

var app = express()
app.use(cors())
app.use(upload()) // Gunakan express-fileupload
app.use('/file', express.static('storage'))

app.get('/', (req,res)=>{
    res.send({status:'Server aktif'})
})

app.post('/', ()=>{
    if (req.files){
        console.log(req.files)
        var uploadFile = req.files.file
        var namaFile = uploadFile.name
        // res.send(req.files)
        uploadFile.mv('./storage/' + namaFile) // .mv untuk memindahkan data ke folder 
        if(error){
            res.send({status: error})
        } else {
            res.send({
                status: 'File terupload',
                // fileTerupload: namaFile
                fileTerupload: `https://localhost:1234/files/1.png` 
                 /*   diakses dari localhost yang diupload oleh front end
                   ada di pro 
                */
            })
        }
    }       
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})