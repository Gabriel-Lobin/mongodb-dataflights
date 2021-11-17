db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: 
    db.voos.find({ $and: [
  { natureza: { $eq: "Doméstica" } },
  { "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" } },
] }).count(),
});

db.resumoVoos.find({ empresa: /latam airlines brasil/i }, { _id: false });
