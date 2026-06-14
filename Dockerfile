ARG SOURCE_IMAGE=alpine:latest
FROM ${SOURCE_IMAGE}

# This is a multi-arch Dockerfile that copies the source image
# The actual image content comes from the SOURCE_IMAGE build arg
