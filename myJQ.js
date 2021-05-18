jQuery(document).ready(function($) {
    $('.btn_1').hide();
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function(temp) {
            $('.my_class').html('');
            for (var count = 0; count < temp.data.length; count++) {
                $('.my_class').append(' <div class="total"> <p class="av"> <img src="' + temp.data[count].avatar +
                    '" alt=""> </p> <p class="id">' + temp.data[count].id +
                    '</p> <p class="first_name ">' + temp.data[count].first_name +
                    '</p> <p class="last_name ">' + temp.data[count].last_name +
                    '</p> <p class="av_email">' + temp.data[count].email + '</p> </div>');
            }
        }
    });



    $('.btn_2').click(function() {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function(temp) {
                $('.my_class').html('');
                for (var count = 0; count < temp.data.length; count++) {
                    $('.my_class').append(' <div class="total"> <p class="av"> <img src="' + temp.data[count].avatar +
                        '" alt=""> </p> <p class="id">' + temp.data[count].id +
                        '</p> <p class="first_name ">' + temp.data[count].first_name +
                        '</p> <p class="last_name ">' + temp.data[count].last_name +
                        '</p> <p class="av_email">' + temp.data[count].email + '</p> </div>');
                }

            }
        });
        $('.btn_2').hide();
        $('.btn_1').show();
    });

    $('.btn_1').click(function() {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function(temp) {
                $('.my_class').html('');
                for (var count = 0; count < temp.data.length; count++) {
                    $('.my_class').append(' <div class="total"> <p class="av"> <img src="' + temp.data[count].avatar +
                        '" alt=""> </p> <p class="id">' + temp.data[count].id +
                        '</p> <p class="first_name ">' + temp.data[count].first_name +
                        '</p> <p class="last_name ">' + temp.data[count].last_name +
                        '</p> <p class="av_email">' + temp.data[count].email + '</p> </div>');
                }

            }
        });

        $('.btn_1').hide();
        $('.btn_2').show();
    });

});