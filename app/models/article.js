import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  ranking: DS.attr(),
  image: DS.attr(),
  banner:DS.attr()
});
