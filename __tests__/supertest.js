const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route Integration', () => {
  const dummyData = {
    workspaceName: 'Cafe Boulud',
    zipcode: 12345,
    address: 'addy',
    wifi: 'High speed and reliable',
    type: 'Cafe',
    quiet: 'No',
    outlets: 'Many and accessible',
    laptopRestrictions: false,
    crowded: 'Very busy',
    outdoorSeating: true,
    petFriendly: false,
    url: 'joey.com',
    seating: '0-10',
    other: 'Hello I dont like coffee'
  };

  describe('testing workspace routes', () => {
    
    it('returns a status code 200 if server is connected', async () => {
      const res = await request(server).get('/workspace/id/1')
      expect(res.statusCode).toBe(200);
    });

    it('returns a status code 201 if workspace is created', async () => {
      const res = await request(server).post('/workspace').send(dummyData);
      expect(res.statusCode).toBe(201);
    });

    it('responds with the created workspace entry', async () => {
      const res = await request(server).post('/workspace').send(dummyData);
      expect(Object.values(res.body[0]).slice(1)).toEqual(Object.values(dummyData));
    });

    it('responds with workspace entries that match the query zipcode', async () => {
      const res = await request(server).get('/workspace?zipcode=12345');
      expect(res.body.length).not.toEqual(0);
    });

    it('responds with workspace that matched workspace ID', async () => {
      const id = 4;
      const res = await request(server).get(`/workspace/id/${id}`);
      expect(res.body[0].workspaceid).toEqual(id)
    });

  });

  describe('testing review routes', () => {

    it('returns a status code 200 if server is connected', async () => {
      const res = await request(server).get('/reviews/1')
      expect(res.statusCode).toBe(200);
    });
    
  });
  
});

