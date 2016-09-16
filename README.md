# codeigniter-reactjs-example

## Getting started

1. install php55-v8js by command `brew install homebrew/php/php55-v8js`
2. add `export PATH="$(brew --prefix homebrew/php/php55)/bin:$PATH"` to your `~/.bash_profile`
3. run `brew services start homebrew/php/php55`
4. `cd application/views` and run `npm install`
4. start php dev server from root folder of project `php -S localhost:8000`
5. optionally: `cp /usr/local/opt/php55/homebrew.mxcl.php55.plist ~/Library/LaunchAgents/`
               `launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.php55.plist`
