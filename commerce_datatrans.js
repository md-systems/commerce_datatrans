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

        // Hides continue button if Datatrans payment method selected.
        if ($('#paymentButton').length) {
          $('#edit-buttons').hide();
        }
      });

      // Shows continue button for any other payment method.
      if (!$('#paymentButton').length) {
        $('#edit-buttons').show();
      }
    }
  };

})(jQuery);
