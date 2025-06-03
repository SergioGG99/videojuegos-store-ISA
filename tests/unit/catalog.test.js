const { getCatalog } = require('../../src/controllers/catalogController');

test('debe devolver el catálogo de videojuegos', () => {
  const req = {};
  const res = {
    json: jest.fn()
  };

  getCatalog(req, res);
  expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([
    expect.objectContaining({ title: 'Cyber Adventure' })
  ]));
});
