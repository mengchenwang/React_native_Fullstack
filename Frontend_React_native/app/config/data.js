const allContacts = 'http://localhost:3001/v1/contacts';
const contactURL = 'http://localhost:3001/v1/';

async function getAllContacts() {
  try {
    let response = await fetch(allContacts);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function getContact(id) {
  try {
    let singleContact = await (contactURL + id);
    let response = await fetch(singleContact);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function updateContact(id, rating) {
  try {
    let contactToUpdate = await (contactURL + id);
    let response = await fetch(contactToUpdate, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contactId: id,
        contactRating: rating
      })
    });
    let responseJson = await response.json();
    return responseJson.result;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export {getAllContacts};
export {getContact};
export {updateContact};
