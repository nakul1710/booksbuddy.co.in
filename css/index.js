for (var i=0; i<9; i++){
    var star = " "
    for(var j=0; j<i+1; j++){
          star += "*"
        med = 9/2;
        if(j>med) {
            star += "*"
        }
        else{
            star += " "
        }
         star += " "
    }
    console.log(star) 
}

