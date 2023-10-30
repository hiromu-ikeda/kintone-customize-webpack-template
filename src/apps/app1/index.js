const events = ['app.record.create.show', 'app.record.edit.show'];
kintone.events.on(events, event => {
  console.log('hello world!')
});
