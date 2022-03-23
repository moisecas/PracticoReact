//crear la configuración de webpack 

const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //agregamos los plugin a un const para usarlas mas abajo

module.exports={ //objeto donde vamos a tener toda la configuración
    entry: './src/index.js', //punto de entrada 
    output:{ //donde va a estar el proyecto 
        path: path.resolve(__dirname, 'dist'), //crear un resolve para determinar donde va a estar el proyecto
        filename: 'bundle.js', //nombre al empaquetado 
        publicPath: '/' 
    },
    module: 'development', //agregar el modo desarrollador 
    resolve:{
        extensions:['.js','jsx'], //las ext que vamos a trabajar 
    },
    module:{ 
        rules:[ //configuraciones necesarias dentro de objetos 
            {
                test:/.(js|jsx)$/, //detecte extensiones que vamos a trabajar 
                exclude: /node_modules/, //excluir lo que no quiero que lea 
                use: {
                    loader: 'babel-loader' //
                }
            },
            {
                test:/\.html?$/, //ahora igual pero con html
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test:/\.(css|scss)$/, //identificacion de ext que vamos a usar 
                use: [ //añadir la configuración con las que vamos a trabajar, lo que instale por consola 
                    "style-loader",
                    "css-loader",
                    "sass-loader", 
                ], 
            }
        ]
    },
    plugins: [ //agregar los plugin que previamente necesitamos, los instanciados al inicio 
        new HtmlWebpackPlugin({
            template: './public/index.html', 
            filename: './index.html' 
        }), 
        new MiniCssExtractPlugin({ 
            filename:'[name].css'
        }),
    ],
	devServer: {
		historyApiFallback: true,
	}
}