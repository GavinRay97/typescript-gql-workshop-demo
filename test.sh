#!/bin/bash

for operation in "migrate apply"; do
  hasura $operation --disable-interactive
done