const data = require('./data.json').data;
module.exports = {
    configureWebpack: {
        devServer: {
            before(app)
            {
                app.get('/api/data',function(req,res){
                    res.json({hoteldt:data});
                })
            }
        }
    }
}
