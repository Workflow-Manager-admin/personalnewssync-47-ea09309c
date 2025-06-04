#!/bin/bash
cd /home/kavia/workspace/code-generation/personalnewssync-47-ea09309c/personal_news_sync
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

