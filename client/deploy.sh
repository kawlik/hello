#!/usr/bin/env sh


#   Config
#   *   *   *   *   *   *   *   *   *   *   *

#   abort on errors
set -e


#   Build app
#   *   *   *   *   *   *   *   *   *   *   *

#   build
npm run build

#   go to build folder
cd dist


#   Create commit
#   *   *   *   *   *   *   *   *   *   *   *

git init
git add -A
git commit -m 'deploy'


#   Push commit
#   *   *   *   *   *   *   *   *   *   *   *

git push -f git@github.com:kawlik/hello.git main:gh-pages


#   After deploy
#   *   *   *   *   *   *   *   *   *   *   *

#   go to dev folder
cd -

#   log success
echo 'Deploy completed successfully!'