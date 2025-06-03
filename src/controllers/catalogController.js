const games = [
  { id: 1, title: 'Cyber Adventure', category: 'Action', price: 40 },
  { id: 2, title: 'Witcher Hunt', category: 'RPG', price: 50 }
];

exports.getCatalog = (req, res) => {
  res.json(games);
};
