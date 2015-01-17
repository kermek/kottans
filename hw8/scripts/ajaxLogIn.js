function ajaxLogIn(sSelector){
  var c = this;

  c.init(sSelector);
  c.name                 = c.find('#form-login-name');
  c.password             = c.find('#form-login-password');
  
  c.submitLogInForm = function(event){
    event.preventDefault();
    $.ajax({
       'url'         : 'http://api.sudodoki.name:8888/login?t=' + new Date().getTime()
      ,'crossDomain' : true
      ,'method'      : 'POST'
      ,'dataType'    : 'json'
      ,'data'        : {
         login               : c.name.val()
        ,password            : c.password.val()
      }
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
            c.token = oServerResponse.token;
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

  c.elem.bind('submit', c.submitLogInForm);
}

ajaxLogIn.prototype = new component();