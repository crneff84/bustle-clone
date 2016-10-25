import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      specialarticles: this.store.findAll('specialarticle')
    });
  },
  setupController(controller, models) {
    controller.set('articles', models.articles);
    controller.set('specialarticles', models.specialarticles);
  },
  actions: {

  }
});
