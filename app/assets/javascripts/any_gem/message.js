$(function() {
  $('#message').append("<div class=\"result\"><p><strong class=\"success\">Success!</strong> This message was written by <code>message.js</code> from <strong class=\"success\"><code>app/assets</code></strong>.</p><p>This means the file <code><strong>app/assets</strong><span class=\"secondary\">/javascripts/any_gem/message.js</span></code> overrides <code><strong>vendor/assets</strong><span class=\"secondary\">/javascripts/any_gem/message.js</span></code>.</p></div>");
  window.checkForSuccess();
});