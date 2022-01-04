const request = require('supertest');
const app=require('../app')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    let source='ja'
    let target='en'
    const res = await request(app)
      .post(`/?source=${source}&target=${target}`)
      .send({
        text:"元気ですか？"
      });
    expect(res.statusCode).toEqual(200);
    
  });

 it('should create a new post', async () => {
    let source='en'
    let target='fr'
    const res = await request(app)
      .post(`/?source=${source}&target=${target}`)
      .send({
        text:"Do you know me?"
      });
    expect(res.statusCode).toEqual(200);
    
  });

  it('should create a new post', async () => {
    let source='gu'
    let target='hi'
    const res = await request(app)
      .post(`/?source=${source}&target=${target}`)
      .send({
        text:"હું વધુ સારી રીતે જાણું છું."
      });
    expect(res.statusCode).toEqual(200);
    
  });



});