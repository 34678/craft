#!/bin/sh

if echo "$npm_execpath" | grep -q "yarn\.js$"; then
  echo "✅  Using yarn, all clear !"
else
  echo "⚠️  Use yarn not npm!" && exit 1
fi

