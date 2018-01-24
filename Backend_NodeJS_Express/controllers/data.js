const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'list-fa2f9',
  keyFilename: './key/list-ac5618d82db1.json',
});

export const index = (req, res, next) => {
  const contactsRef = firestore.collection('contacts');
  const contactsData = [];

  contactsRef.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            var shortData = { name: doc.data().name,
                              id: doc.data().id
                            }
            contactsData.push(shortData);
        });
    })
    .then(() => {
      console.log('data push successful', contactsData);
      res.json({ data: contactsData });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
        res.json({
          result: 'failed',
          data: {},
          messege: `Error is : ${err}`
        });
    });
};

export const singleContact = (request, response, next) => {
  const contactRef = firestore.collection('contacts').doc(request.params.id);

  contactRef.get()
    .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
            response.json({
              result: 'ok',
              data: doc.data()
            });
        }
    })
    .catch(err => {
        console.log('Error getting document', err);
        response.json({
                result: 'failed',
                data: {},
                messege: `Error is : ${err}`
        });
    });
};

export const updateContact = (request, response, next) => {
  const contactRef = firestore.collection('contacts').doc(request.body.contactId.toString());

  contactRef.update(
    { rating: request.body.contactRating }
  ).then((res) => {
    console.log(res);
    response.json({
      result: 'ok'
    });
  }).catch(err => {
      console.log('Error updating document', err);
      response.json({
              result: 'failed',
              messege: `Error is : ${err}`
      });
  });
}
