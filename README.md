# createNpmPackage
a small demo to test how to create an react component thought npmpackage and publish!

#Demo
this demo make a react component to show how to publish a npm package

1. ./node_modules/.bin/rimraf lib 该命令行在每次对组件编译的时候清理输出的文件夹
2. ./node_modules/.bin/babel src --out-dir lib --source-maps --extensions .jsx --copy-files  该命令编译src 下的 格式的文件并输出到相应的路径中
最后在index.js 暴露封装的组件接口 注意用exports来抛出接口


