const webpack = require("webpack");
module.exports = {
    pluginOptions: new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
    }),
    //打包时下面的代码取消注释
    // baseUrl: './' // 加入这行就可以了

};