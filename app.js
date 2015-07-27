var Sequelize = require('sequelize');
var sequelize = new Sequelize('student', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

var  User  =  sequelize.define('User',   {  
    name:  Sequelize.STRING
}, {
    tableName: 'student_info',
    timestamps: false
});

User.create({
    name: 'Sam',
}).done(function() {
    User.findAll().then(function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].dataValues);
        }
    });
});

User.destroy({where:{name:'Sam'}});
