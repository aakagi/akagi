Template.layout.events({
  'click .showField': function(target) {
    var fieldType = target.currentTarget.id;
    Session.set('fieldType', fieldType);
    Session.set('showField', true);
  }
});

Template.layout.helpers({
  showField: function() {
    return Session.get('showField');
  }
});
