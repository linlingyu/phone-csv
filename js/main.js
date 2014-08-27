void function(){
    var utility = require('utility').getInstance(),
        dataCenter = require('dataCenter').getInstance(),
        btn = document.getElementById('btnId');
    //
    btn.addEventListener('click', function(evt){
        var file = document.getElementById('fileId');
        if(!file.value){alert('未选择上传文件！'); return;}
        //判断输出文件是否存在
        if(!utility.existsAndOverride(file.value)){return;}
        var sepa = document.getElementById('separatorId').value,
            data = dataCenter.parse(file.value, {separator: sepa}),
            buf = dataCenter.buffer(data, {separator: sepa});
        alert('文件已经生成，请看' + utility.write(file.value, buf));
    }, false);
}();