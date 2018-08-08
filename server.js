var express = require('express');
var app = express();
var PORT =process.env.PORT||3000;
var todos =[{
	id:1,
	description : 'meet me',
	completed   : false
},{
	id : 2,
	description : 'shopping',
	completed : true
},{
	id:3,
	description : 'play',
	completed: true
}];
app.get('/',function ( req,res) {
	res.send('todo API ');
});
app.get('/todos',function(req,res){
      res.json(todos);
});
app.get('/todos/:id',function(req,res){
	var idnum = parseInt (req.params.id,10);
	var matchedid;
	todos.forEach(function(todo){
		if(idnum===todo.id)
		{
			matchedid = todo; 
		}
	});
		if(matchedid){
			res.json(matchedid);
		}else{
			res.status(404).send();
		}
	});
app.listen(PORT,function() {
	console.log('express on port'+PORT);
});