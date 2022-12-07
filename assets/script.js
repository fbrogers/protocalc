$(function(){
    var json = data;
    var jsonHtml = "";
    $.each(json.categories, function(ckey, category){
        jsonHtml += '<div class="card mb-3">';
        jsonHtml += '<div class="card-header"><b>'+ category.name + "</b> ";
        jsonHtml += '<span class="badge badge-success">' + category.weight + '</span>';
        jsonHtml += '</div>';
        jsonHtml += '<div class="card-body">';

        $.each(category.questions, function(qkey, question){
            var questionWeight = Number(Math.round(category.weight * (question.weight / 100) * 100) / 100).toFixed(2);

            jsonHtml += '<div class="form-group">';
            jsonHtml += '<label>' + question.text + ' ';
            jsonHtml += '<span class="qweight badge badge-warning">' + questionWeight + '</span> ';
            jsonHtml += '<span class="qscore badge badge-success"></span>';
            jsonHtml += '</label>';

            $.each(question.answers, function(akey, answer){
                jsonHtml += '<div class="radio"><label>';
                jsonHtml += '<input type="radio" name="q'+ckey+qkey+'" value="' + akey + '"> ' + answer.text + ' ';
                jsonHtml += '</label></div>';
            });

            jsonHtml += '</div>';
        });

        jsonHtml += '</div>';
        jsonHtml += '</div>';
    });
    $("#calcform").html(jsonHtml);

    function calcScore(){
        var score = 0;
        $(".qscore").each(function(){
            score += Number(Math.round($(this).text() * 100) / 100);
        });
        score = Math.round(score);
        scoreRounded = Math.ceil(score * 0.05)

        $("#score").html(score);
        $("#scoreRounded").html(scoreRounded);
    }

    function reset(){
        $("input:checked").prop("checked", false);
        $(".qscore").html("0");
        calcScore();
        jQuery('html,body').animate({scrollTop:0}, 500);
    }
    reset();

    $('.btn-reset').on("click", function(){
        reset();
    });

    $("#calcform input").on("change", function(){
        var inputParent = $(this).parent().parent().parent();
        var questionScoreContainer = inputParent.find("span.qscore:first");
        var questionScoreWeight = inputParent.find("span.qweight:first").html();
        var questionScore = $(this).val();
        var questionScale = inputParent.children().children("label").length - 1;
        var questionScoreCalc = Number(Math.round(questionScoreWeight * (questionScore / questionScale) * 100) / 100).toFixed(2);
        questionScoreContainer.html(questionScoreCalc);

        calcScore();
    });
})
