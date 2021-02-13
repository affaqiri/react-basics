#!/bin/bash
set -euo pipefail

AUTO_UPDATE_PRIVATE_PACKAGES="$(buildkite-agent meta-data get "auto_update_private_packages")"
echo $AUTO_UPDATE_PRIVATE_PACKAGES