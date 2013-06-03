$(function() {
  $('#message').append("<div class=\"result\"><p><strong class=\"failure\">Failure.</strong> This message was written by <code>message.js</code> from <strong class=\"failure\"><code>vendor/assets</code></strong>.</p><p>This means the file <code><strong>app/assets</strong><span class=\"secondary\">/javascripts/any_gem/message.js</span></code> <strong>does not</strong> override <code><strong>vendor/assets</strong><span class=\"secondary\">/javascripts/any_gem/message.js</span></code>.</p></div>");
  window.checkForSuccess();
});