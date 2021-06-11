let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//위 세라인: html은 views에 넣었고 
app.use(express.static('public'));
//나머지는 public에 넣었다.
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});// 웹 서버를 동작시켜 준다.
//로컬에서 프론트 엔드 작업을 끝난 후 백엔드 작업자가 정리하여 배포한다. AWS를 현업에서 백엔드 작업자가 많이 사용한다.
