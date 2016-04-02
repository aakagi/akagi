Template.hack.onRendered(function() {
  // Get the page height
  var elem = $('.field-body')[0];
  console.log(elem);
  var elemHeight = window.getComputedStyle(elem, null).height;
  var pxIndex = elemHeight.indexOf('px');
  var heightNum = Number(elemHeight.slice(0,pxIndex))
  Session.set('windowHeight', heightNum + 200);
})

Template.hack.helpers({
  projects: function() {
    return projects;
  },
  windowHeight: function() {
    return Session.get('windowHeight');
  }
});

Template.hack.events({
  'click .field-container': function () {
    Session.set('showHack', false);
  }
});