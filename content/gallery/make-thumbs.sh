#!/bin/bash
cd $1
mkdir thumbs
for filename in *.jpg; do
  convert -define jpeg:size=720x400 $filename \
          -thumbnail '720x400>' thumbs/$filename
done
