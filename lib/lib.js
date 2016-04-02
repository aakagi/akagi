renderedHeight = function() {
  var elem = $('.field-body')[0];
  var elemHeight = window.getComputedStyle(elem, null).height;
  var pxIndex = elemHeight.indexOf('px');
  var heightNum = Number(elemHeight.slice(0,pxIndex))

  return heightNum + 200;
}