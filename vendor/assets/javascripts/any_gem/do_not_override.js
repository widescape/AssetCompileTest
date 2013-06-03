$(function() {
  $('#message').html('<h3>The following line should say "Success!"</h3>');
});

window.checkForSuccess = function() {
  var result = $('#message .result')
  if (result.length == 2) {
    $('.observation').removeClass('success').addClass('failure').html('The problem is not solved yet. Both <code>message.js</code> are now executed.')
  }
  else if (result.text().match(/Success\! This/)) {
    if ($('body').hasClass('development-environment')) {
      $('#message').after('<ol class="observation"><li>Now stop the rails server,</li><li>run <code>$ rake assets:precompile</code>,</li><li>start the rails server in production (<code>$ rails s -e production</code>)</li><li>and reload this page.</li></ol>');
    }
    else if ($('body').hasClass('production-environment')) {
      $('#message').after('<p class="observation success">It works!</p>');
    }
  }
  else {
    $('#message').after('<p class="observation failure">The problem is not solved yet. <code>app/assets</code> does not override <code>vendor/assets</code>.</p>')
  }
};