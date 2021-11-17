db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: 
    db.voos.find({ $and: [
  { natureza: { $eq: "Doméstica" } },
  { "empresa.nome": { $eq: "PASSAREDO" } },
] }).count(),
});

db.resumoVoos.find({ empresa: /passaredo/i }, { _id: false });