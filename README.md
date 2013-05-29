# AssetCompileTest

A test app to verify the compile behavior of Rails/Sprockets. Based on the question ['Rails 3.2: How to override single files from gem assets for assets:precompile?' at StackOverflow](http://stackoverflow.com/questions/16435428/rails-3-2-how-to-override-single-files-from-gem-assets-for-assetsprecompile/16789937?iemail=1&noredirect=1#16789937).

## Instructions

1. Clone this project.
2. Run ```$ rails s``` and ```$ open http://0.0.0.0:3000``` to see the desired asset behavior: You should see the message *"Success! This message was written by message.js from app/assets."*
3. Stop rails, run ```$ rake assets:precompile```, start rails and reload the page to see the undesired behavior: You should see the message *"Failure. This message was written by message.js from vendor/assets."*

## Credits

Robert Wünsch, [www.widescape.net](http://www.widescape.net)

## License

AssetCompileTest is released under the [MIT License](http://opensource.org/licenses/MIT).
