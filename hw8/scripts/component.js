function component(){
  this.elem = null;
  
  this.init = function(sSelector){
    this.elem = $(sSelector);
    if (!this.elem.length) {
      alert("Can't find element by selector " + sSelector);
      }
    }
  this.find = function(sSelector){
    return this.elem.find(sSelector);
    }
  this.vars = function(aElements, oHTMLElement){
    for (var propertyName in aElements){
      var sSelector = aElements[propertyName];
      this[propertyName] = oHTMLElement.find(sSelector);
      }
    }
  this.copyData = function(oSource, oDestination, aSelectors){
    $.each(aSelectors, function(i, sSelector){
      var oSourceElement = oSource.find(sSelector);       // копируемый элемент
      var oDestinationElement = oDestination.find(sSelector); // элемент назначение
      var tagName = oSourceElement.prop('tagName');
      
      if (tagName == 'IMG') {
        oDestinationElement.attr('src', oSourceElement.attr('src'));
        }
      else if (tagName == 'INPUT'
        ||   tagName == 'TEXTAREA') {
        oDestinationElement.val(oSourceElement.val());
        }
      else {
        oDestinationElement.html(oSourceElement.html());
        }
      });
    }
  }