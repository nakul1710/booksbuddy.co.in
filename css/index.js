var num = 9;
for (var i=1; i<=num; i++){
    var star = ""
    var space = ""
    var lowerIndex = 1 + space/2
    var higherIndex = num - space/2
    for(var j=1; j<=i; j++){
        if(j > lowerIndex && j < higherIndex) {
            star += "*" 
        }else{
            star += " "
        }
    }
    console.log(star)
}

