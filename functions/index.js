const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firebaseConfig = require('./src/firebase');

const adminApp = admin.initializeApp(firebaseConfig);

exports.setMetadata = functions.storage.object().onFinalize((object) => {
  const filePath = object.name;
  const { contentType } = object;

  const fileRef = adminApp.storage().bucket().file(filePath);

  const newMetadata = {
    cacheControl: 'public, max-age=3600',
  }

  // ここでcontentTypeに応じてメタデータを変えてみたりとか
  if (contentType.startsWith('image/')) {
    fileRef.setMetadata(
      newMetadata,
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
});
