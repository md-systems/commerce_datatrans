(function ($) {

  Drupal.behaviors.datatransLightbox = {
    attach: function (context, settings) {

      // Register a trigger on the payment button, use once() to avoid
      // multiple triggers.
      $("#paymentButton", context).once('datatrans', function() {
        $(this).click(function () {
          $("form").submit(function (e) {
            e.preventDefault();
          });

          Datatrans.startPayment({"form": "#paymentButton"});
        });

        if ($('#paymentButton').length) {
          $('#edit-buttons').hide();
        }
      });

      if (!$('#paymentButton').length) {
        $('#edit-buttons').show();
      }
    }
  };

})(jQuery);
