# -
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .form {
          width: 600px;
          margin:  100px auto;
        }
        .row {
          width: 100%;
          display: flex;
          border-top: 1px solid #0094ff;
          border-bottom: 1px solid #0094ff;
        }
        .cols-1 {
          flex: 1;
        }
        .cols-2 {
          flex: 2;
        }
        .cell {
          border-left: 1px solid #0094ff;
          padding: 10px 6px;
          line-height: 42px;
          text-align: center; 
        }
        .cell:last-child{
          border-right: 1px solid #0094ff;
        }
        .text {
          width: 268px;
          height: 30px;
          padding: 4px;
        }
        .btn {
          height: 38px;
          width: 104px;
        }
      </style>
</head>
<body>
        <div class="form">
                <div class="row">
                  <div class="cell cols-1">请输入手机号码</div>
                  <div class="cell cols-2">
                    <input type="text" class="text">
                  </div>
                  <div class="cell cols-1">
                    <input type="button" class="btn" value="获取验证码" id="getCode" >
                  </div>
                </div>
              </div>
    
</body>
<script>
// 1.获取按钮
let btn = document.querySelector('#getCode');
// 2.注册点击事件
btn.onclick = function(){
    let time = 10;
    // 禁用按钮
    btn.disabled = true;
    btn.value = '获取验证码 ('+ time +') ';
    let intervalId = setInterval (function(){
time--;
btn.value = '获取验证码('+ time +')';
// 如果计时到0，须要停止
if(time === 0){
  clearInterval(intervalId);
  btn.disabled = false;
  btn.value = '获取验证码';
}
    },1000);
}
</script>
</html>
