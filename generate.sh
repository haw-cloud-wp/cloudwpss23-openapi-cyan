#!/bin/sh
openapi-generator generate \
-i ../reference/customerfacing.yaml \
-g javascript \
-o .
--additional-properties=library=apollo
