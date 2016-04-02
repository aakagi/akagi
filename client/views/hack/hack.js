Template.hack.onRendered(function() {
  Session.set('windowHeight', renderedHeight());
});

Template.hack.helpers({
  projects: function() {
    return projects;
  }
});

Template.hack.events({

});