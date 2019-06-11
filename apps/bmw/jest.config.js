module.exports = {
  name: 'bmw',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bmw',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
