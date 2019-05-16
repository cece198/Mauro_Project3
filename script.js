$(document).ready(function(){
    $('#submitI').on('click', function(){
        var apiBase = 'http://statenweb.mockable.io/conversions/';
        var input1 = $('#Inches').val();

        axios.get(apiBase).then(function(response){
            console.log(response);
            var num = response.data.centimetersInInch;
            var output1 = input1 * num;
            $('#answerI').html(output1);
        });
    });
    $('#submitC').on('click', function(){
        var apiBase = 'http://statenweb.mockable.io/conversions/';
        var input2 = $('#Centimeters').val();

        axios.get(apiBase).then(function(response){
            var num2 = response.data.inchesInCm;
            var output2 = input2 * num2;
            $('#answerC').html(output2);
        });

    });
});