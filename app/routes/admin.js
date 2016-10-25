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
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    },
    makeNewArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },
    updateArticle(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined)
          article.set(key,params[key]);
      });
      article.save();
      this.transitionTo('admin');
    }
  }
});
