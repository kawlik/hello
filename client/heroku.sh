#!/usr/bin/env sh


#   Config
#   *   *   *   *   *   *   *   *   *   *   *

#   abort on errors
set -e


#   Create commit
#   *   *   *   *   *   *   *   *   *   *   *

#   add files
git add .
git commit -m 'deploy'

#   Push commit
#   *   *   *   *   *   *   *   *   *   *   *

#   push
git push -f origin heroku


#   After deploy
#   *   *   *   *   *   *   *   *   *   *   *

#   log success
echo 'Deploy completed successfully!'