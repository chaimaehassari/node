const fs = require('fs');
fs.writeFile('welcome.text', 'hello Node',(err)=>{
    if(err) {
        console.error('erreur lors de la creation du ficher:',err);
        }
        else {
            console.log('fichier "welcom.texT" cree avec succes.');
            fs.readFile('welcome.text','utf8',(err,data)=>{
                if(err) {
                    console.error('erreur lors de la lecture du fichier:',err);
                    
                }else{
                    console.log('contenu du fichier welcome.txt:',data);
                }
            });
        }
});