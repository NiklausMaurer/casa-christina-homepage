#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
# set -o xtrace # for debugging

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {

  az storage blob delete-batch --account-name casachristinaproduction --source '$web' --connection-string="${AZURE_STORAGE_CONNECTION_STRING}"
  az storage blob upload-batch --account-name casachristinaproduction --auth-mode key --destination '$web' --source home/.vitepress/dist --connection-string="${AZURE_STORAGE_CONNECTION_STRING}"

}

main "$@"
