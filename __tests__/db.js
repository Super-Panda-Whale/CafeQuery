const { Pool } = require('pg'); // should create an instance of a new db (?)
const faker = require('@faker-js/faker'); // mock data to test our db functionality

xdescribe ('database testing', () => {
  let pgPool; // inits a db connection
  beforeAll(async () => {
    pgPool = new Pool({
      connectionString: 'postgres://pnpqhovz:xmn6RTTNcTruASv9i7J3ySrFkFTpQ84H@castor.db.elephantsql.com/pnpqhovz'
    });
    console.log('Connected to db server.');
  });

  // testing for table creation
  describe('user testing', () => {

    beforeEach(async () => {
      let createTableSQL =
        "CREATE TABLE 'testusers' ( 'id' INT(2) NOT NULL AUTO_INCREMENT, 'name' VARCHAR(100) NOT NULL, 'password' VARCHAR(50) NOT NULL, PRIMARY KEY ('id'))";
      await pgPool.query(createTableSQL);
    });
    
    afterEach(async () => {
      let dropTableSQL = "DROP TABLE IF EXISTS 'testusers';";
      await pgPool.query(dropTableSQL);
      await pgPool.end();
    });

    it('check testusers -> id is created (first 5)', async () => {
      const client = await pgPool.connect();
      await client.query('BEGIN');
      
      console.log(1)
      const total_test_users = 5;
      let insertQueries = [];
      for (let i = 0; i < total_test_users; i++) {
        let insertSQL = `INSERT INTO users (name, email) VALUES ('${faker.name.findName()}', '${faker.internet.password()}');`;
        insertQueries.push(client.query(insertSQL))
      };
      console.log({insertQueries});
      console.log(2)
      await Promise.all(insertQueries);
      const data = client.query('SELECT * FROM testusers');
      expect(data.rows.length).toBe(total_test_users)
      await client.query('ROLLBACK');
    });
  });

    
  //   it('should test', async () => {
  //     const client = await pgPool.connect();
  //     try {
  //         await client.query('BEGIN');

  //         const { rows } = await client.query('SELECT  AS "result"');
  //         console.log(rows)
  //         expect(rows[0]["result"]).toBe(1);

  //         await client.query('ROLLBACK');
  //     } catch(err) {
  //       throw err;
  //     } finally {
  //         client.release();
  //     }
  // })

  // describe('tests workspace db table queries', () => {
    
  //   beforeEach(async () => {
  //     let createTableSQL =
  //       "CREATE TABLE `testworkspace` ( `id` INT(2) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
  //     await pgPool.query(createTableSQL);
  //   })
    

  // })

  // describe('tests review db table queries', () => {
    
  //   beforeEach(async () => {
  //     let createTableSQL =
  //       "CREATE TABLE `testreview` ( `id` INT(2) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
  //     await pgPool.query(createTableSQL);
  //   })
    

  // })

});