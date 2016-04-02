Template.field.onRendered(function() {
  // Get the page height
  var elem = $('.field-body')[0];
  var elemHeight = window.getComputedStyle(elem, null).height;
  var pxIndex = elemHeight.indexOf('px');
  var heightNum = Number(elemHeight.slice(0,pxIndex))
  Session.set('windowHeight', heightNum + 200);
})

Template.field.helpers({
  fieldType: function() {
    console.log(Session.get('fieldType'))
    return Session.get('fieldType');
  },
  projects: function() {
    return projects;
  },

  windowHeight: function() {
    return Session.get('windowHeight');
  }
});

Template.field.events({
  'click .field-container, click .field-title': function () {
    Session.set('showField', false);
  },
  
});