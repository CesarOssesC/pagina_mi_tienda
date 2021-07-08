$(document).ready(function () {
    $("#dialogo_flotante_1, #dialogo_flotante_2, #dialogo_flotante_3, #dialogo_flotante_4, #dialogo_flotante_5").hide()
    $("#card1").hover(
        function () {
            $("#dialogo_flotante_1").fadeIn(500)
            // $(this).append($("<div> Producto con stock disponible</div>"));
        }, function () {
            $("#dialogo_flotante_1").fadeOut(500)
            // $(this).find("div").last().remove();
        }
    );

    $("#card2").hover(
        function () {
            $("#dialogo_flotante_2").fadeIn(500)
            // $(this).append($("<div> Producto con stock disponible</div>"));
        }, function () {
            $("#dialogo_flotante_2").fadeOut(500)
            // $(this).find("div").last().remove();
        }
    );

    $("#card3").hover(
        function () {
            $("#dialogo_flotante_3").fadeIn(500)
            // $(this).append($("<div> Producto con stock disponible</div>"));
        }, function () {
            $("#dialogo_flotante_3").fadeOut(500)
            // $(this).find("div").last().remove();
        }
    );

    $("#card4").hover(
        function () {
            $("#dialogo_flotante_4").fadeIn(500)
            // $(this).append($("<div> Producto con stock disponible</div>"));
        }, function () {
            $("#dialogo_flotante_4").fadeOut(500)
            // $(this).find("div").last().remove();
        }
    );

    $("#card5").hover(
        function () {
            $("#dialogo_flotante_5").fadeIn(500)
            // $(this).append($("<div> Producto con stock disponible</div>"));
        }, function () {
            $("#dialogo_flotante_5").fadeOut(500)
            // $(this).find("div").last().remove();
        }
    );

    // $(".card.fade").hover(function () {
    //     $(this).fadeOut(100);
    //     $(this).fadeIn(500);
    // });
})

