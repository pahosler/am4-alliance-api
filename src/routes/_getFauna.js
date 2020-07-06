import faunadb from 'faunadb';
const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnADvsSZphACAJMZtbFfkj4b83lYv_oQQGQRCyce',
});

const getFauna = async () => {
  try {
    let { data } = await client.query(
      q.Get(q.Ref(q.Collection('team'), '270057444654187008'))
    );
    let { members } = data;
    members = members.sort((a, b) => {
      let nameA = a.company.toUpperCase();
      let nameB = b.company.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return members;
  } catch (err) {
    console.log(err);
  }
};

export default getFauna;
