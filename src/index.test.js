'use strict';

const fs = require('fs');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fileLineCounter = require('./index');

const expect = chai.expect;
chai.use(chaiAsPromised);

const TMP_FILE = 'test.tmp';

describe('file-lines-counter', () => {
  it('Should return Promise which resolves with a Number', async () => {
    let testString = '1\n2\n3\n4\n5\n';
    fs.writeFileSync(TMP_FILE, testString);

    const lineCountPromise = fileLineCounter(TMP_FILE);
    await Promise.all([
      expect(lineCountPromise).to.eventually.be.fulfilled,
      expect(lineCountPromise).to.eventually.be.a('number'),
    ]);

    fs.unlinkSync(TMP_FILE);
  });

  it('Should return 5 when a test file contains 5 newlines', async () => {
    let testString = '1\n2\n3\n4\n5\n';
    fs.writeFileSync(TMP_FILE, testString);

    const lineCount = await fileLineCounter(TMP_FILE);
    expect(lineCount).to.be.equal(5);

    fs.unlinkSync(TMP_FILE);
  });

  it('Should return 0 when a test file contains 0 newlines', async () => {
    let testString = '12345';
    fs.writeFileSync(TMP_FILE, testString);

    const lineCount = await fileLineCounter(TMP_FILE);
    expect(lineCount).to.be.equal(0);

    fs.unlinkSync(TMP_FILE);
  });

  it('Should return 0 when a test file is empty', async () => {
    let testString = '';
    fs.writeFileSync(TMP_FILE, testString);

    const lineCount = await fileLineCounter(TMP_FILE);
    expect(lineCount).to.be.equal(0);

    fs.unlinkSync(TMP_FILE);
  });
});
