#!/bin/bash

set -euo pipefail

AUTO_UPDATE_PRIVATE_PACKAGES="$(buildkite-agent meta-data get "auto_update_private_packages")"
echo $AUTO_UPDATE_PRIVATE_PACKAGES

# Create a pipeline with your trigger step
PIPELINE="steps:
  - trigger: \"first-pipeline\"
    label: \"First pipeline\"
    build:
      meta_data:
        auto_update_private_packages: $AUTO_UPDATE_PRIVATE_PACKAGES
"

# Upload the new pipeline and add it to the current build
echo "$PIPELINE" | buildkite-agent pipeline upload