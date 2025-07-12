#!/bin/bash
# Compress all images in /images and /files

set -e

for dir in ../images ../files; do
  find "$dir" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -exec jpegoptim --strip-all --max=85 {} \;
  find "$dir" -type f -iname '*.png' -exec optipng -o7 {} \;
  find "$dir" -type f -iname '*.gif' -exec gifsicle -O3 -b {} \;
  find "$dir" -type f -iname '*.svg' -exec svgo {} \;
done

echo "Image compression complete!" 