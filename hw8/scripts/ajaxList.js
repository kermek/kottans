function ajaxList(sSelector){
  var l = this;

  l.elem = $(sSelector);

  l.show = function(){
    $.ajax({
       'url'         : 'http://api.sudodoki.name:8888/users?t=' + new Date().getTime()
      ,'crossDomain' : true
      ,'method'      : 'GET'
      ,'dataType'    : 'json'
      ,'data'        : ''
      ,'success'     : function(oServerResponse){}
      ,'error'       : function(oAjax){
        if (oAjax.status == 404){
          alert('AJAX backend is not found.');
        }
        else if (oAjax.statusText == 'timeout'){
          alert('AJAX request is timed out.');
        }
        else {
          alert('Totally unpredicted error.');
        }
      }
      ,'complete'    : function(oAjax){
        var oServerResponse = oAjax.responseJSON;
        if (oAjax.status == 200){
          if (oServerResponse != undefined){
            oServerResponse.forEach(function(val){
              var source = l.elem.html();
              var template = Handlebars.compile(source);
              l.elem.append(template(val));
            });
          }
          else {
            alert('The server has returned an incorrect '
              + 'response that cannot be parsed as JSON:\n'
              + oAjax.responseText);
          }
        }
      }
    });
  }
}

ajaxList.prototype = new component();