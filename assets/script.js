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
            var questionWeight = Math.round(category.weight * (question.weight / 100));

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
            score += Math.round($(this).text());
        });
        scoreRounded = Math.round(score * 0.2)

        $("#score").html(score);
        $("#scoreRounded").html(scoreRounded);
    }

    function reset(){
        $("option:selected").prop("selected", false);
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
        var questionScoreCalc = Math.round(questionScoreWeight * (questionScore / questionScale));
        questionScoreContainer.html(questionScoreCalc);

        calcScore();
    });
})
