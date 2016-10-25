import Ember from 'ember';

export default Ember.Component.extend({
  displayUpdate: false,
  actions: {
    destroyArticle(article) {
      if(confirm('Are you Sure, bro?')) {
        this.sendAction('destroyArticle', article);
      }
    },
    showUpdate() {
      this.set('displayUpdate', true);
    },
    updateArticle(article) {
      var params = {
        author: this.get('author'),
        banner: false,
        content: this.get('content'),
        date: this.get('date'),
        image: this.get('image'),
        ranking: 1,
        title: this.get('title')
      }
      this.set('displayUpdate', false);
      this.sendAction('updateArticle', article, params);
    }
  }
});
