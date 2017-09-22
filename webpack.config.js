var path=require('path');
var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'src');
var APP_FILE=path.resolve(APP_PATH,'index.jsx');

module.exports={
	entry:{
        index:APP_FILE
	},
	output:{
       path:ROOT_PATH,
       filename:'[name].js'
	},
	module:{
		loaders:[
		   {
		   	test:/.jsx$/,
		   	exclude:/^node_module$/,
		   	loader:'babel-loader',
		   	include:APP_PATH
		   },
		   {
		   	test:/.js$/,
		   	exclude:/^node_module$/,
		   	loader:'babel-loader',
		   	include:APP_PATH
		   },
		   {
		   	  test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                include:[APP_PATH]
		   }
		]
	},
	plugins:[

	],
	resolve:{
		extensions:['.js','.jsx','.less','.css','.scss']
	}
}