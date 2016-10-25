import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thumbnail-display', 'Integration | Component | thumbnail display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thumbnail-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thumbnail-display}}
      template block text
    {{/thumbnail-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
