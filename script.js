$(document).ready(function(){
    $('#submitI').on('click', function(){
        var apiBase = 'http://statenweb.mockable.io/conversions/';
        var input1 = $('#Centimeters').val();
        
        //console.log("Testing 123");
        axios.get(apiBase).then(function(response){
            //console.log(response);
            var num = response.data.centimetersInInch;
            //console.log(num);
            //alert(num*2);
            var output1 = inputI * num;
            $('answerI').html(output1);
        });
    });
});