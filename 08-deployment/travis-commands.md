# Travis commands

// Install Travis CLI (Ruby needed)
```
gem install travis
```

// Login to Travis
```
travis login --auto
```

// List repositories
```
travis repos --pro
```

// Creates deploy key in travis.yml file
```
travis encrypt $(heroku auth:token) --add deploy.api_key
```

// Add env variable
```
travis encrypt MY_SECRET_ENV=super_secret --add
travis encrypt SNYK_TOKEN=<token-value> --add
```
