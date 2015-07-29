<?php

/**
 * @file
 * Datatrans menu items callbacks.
 */

function commerce_datatrans_payment_processing($order_id, $payment_key) {
  $order = commerce_order_load($order_id);

  // On payment success, update transaction details and order status.
  if (isset($_POST['status']) && $_POST['status'] == 'success' && $order->data['payment_redirect_key'] == $payment_key) {
    // @todo Instance ID is missing for some reason!
    //$payment_method['instance_id'] = 'commerce_datatrans|commerce_payment_commerce_datatrans';

    // @todo Entire $payment_method array is missing now and should be loaded somehow.

    if (commerce_datatrans_redirect_form_validate($order, $payment_method)) {
      // Transaction save.
      _commerce_datatrans_transaction_save($payment_method, $order, $_POST, COMMERCE_PAYMENT_STATUS_SUCCESS);

      // Send the customer onto the next checkout page.
      commerce_datarans_redirect_pane_next_page($order, t('Customer successfully submitted payment at the payment gateway.'));
      drupal_goto(commerce_checkout_order_uri($order));
    }

  }
}
