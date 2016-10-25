import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle() {
      var params = {
        author: this.get('author'),
        banner: false,
        content: this.get('content'),
        date: this.get('date'),
        image: this.get('image'),
        ranking: 1,
        title: this.get('title')
      }
      this.set('addNewArticle', false);
      this.sendAction('makeNewArticle', params);
    }
  }

});
