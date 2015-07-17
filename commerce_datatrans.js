(function ($) {

  Drupal.behaviors.datatransLightbox = {
    attach: function (context, settings) {


      $("#paymentButton", context)
        .click(function () {
          $("form").submit(function (e) {
            e.preventDefault();
          });

          Datatrans.startPayment({"form": "#paymentButton"});
        });
    }
  };

})(jQuery);
