REF=`git show-ref HEAD -s`

echo "Deploying ${SERVICE_NAME} using version ${REF} tag ${TAG_NAME}"
