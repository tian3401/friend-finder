var userScore =['','','','','','','']; 
var content; 
var options; 

$(document).ready(function(){
    friendoptions(); 
})

$('#hide').hide(); 

$('.dropOpt').on('click',function(){
    
    content = $(this).text();
    var dataVal = $(this).data('num');
    var summary = $(this).data('sum');
    var index; 
    
    // console.log(dataVal);
    $('.drop'+dataVal).text(content);
    var index = userScore[dataVal-1] = summary;
    

}); 


$('button').mousedown(function(){
    if(userScore.indexOf('')===-1){
    $('#hide').val(JSON.stringify(userScore));
    }
    else{

    }
}); 

//Gets info about all friends from the JSON output
function friendoptions(){
    $.ajax({
        url: '/users/rankings',
        method: 'GET',
    }).then (function(result){
       options=result; 
    //    console.log(options);
    })
};

function compare(){
    var bestScore=20;
    var score=0; 
    var friendscore, friendComp, friend; 
    //for loops the userScore array
    for(j=0; j<options.length; j++){
      //for loops the list of different friends and targets the userscore
    //e.g. options = [
    // 0: {id: 1, fullname: "Matthew Chen", link: "https://www.youtube.com/", gender: "Male", userscore: "[1,1,3,5,2,3,3]"}
    // 1: {id: 2, fullname: "Rebecca Pae", link: "https://www.youtube.com/", gender: "Female", userscore: "[1,1,2,5,2,3,3]"}
    // 2: {id: 3, fullname: "Geary Johnson", link: "https://www.youtube.com/", gender: "Male", userscore: "[2,1,1,3,2,4,3]"}
    // 3: {id: 4, fullname: "Samantha Lee", link: "https://www.youtube.com/", gender: "Female", userscore: "[1,1,4,3,1,1,1]"}
    //]
    friendScore = JSON.parse('['+ options[j].userscore +']'); 
    
    console.log(friendScore);
    //e.g. friendScore = [[1,1,3,5,2,3,3],[1,1,2,5,2,3,3],[2,1,1,3,2,4,3],[1,1,4,3,1,1,1]]

    // console.log( options[j].fullname + ':' + friendScore)
    //This for loop then takes each userscore and loops there the actual numbers a

    
    for(k=0;k<friendScore.length; k++){
        friendComp =friendScore[k];
        //e.g. friendComp = [1,1,3,5,2,3,3]
        
        //loops over each indiv num in friend score 
        for(m=0; m<friendComp.length; m++){
            score = 0;
            var abs = Math.abs(friendComp[m]-userScore[m])
            score += abs; 
            if(score < bestScore){
                bestScore = score
                friend = options[j].fullname;
                console.log(friend);
            }
            else{}
        
        }
    }
    ;
}
    

}; 

$('.execute').on('click', function(){
    compare(); 
}); 
    


    


 
