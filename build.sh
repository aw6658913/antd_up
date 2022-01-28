version=1.4.40
rootPath=pbxweb/
webConfigPath=config/web
webVesionPath=${webConfigPath}/version

#默认执行脚本
runScript=build-js

# test/prod
packageMode=$1

if [[ $packageMode == "prod" ]]
then
  runScript=build-js-prod
elif [[ $packageMode == "test" ]]
then
  runScript=build-js-test
fi

mkdir -p $webConfigPath && echo $version > $webVesionPath && yarn run $runScript && echo $version > $rootPath.version && tar -cvf pbxweb-p_series-$version.tar $rootPath
