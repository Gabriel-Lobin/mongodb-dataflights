db.voos.find({ $and: [
  { litrosCombustivel: { $exists: true, $not: { $gt: 600 } } },
  { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
  ] },
{ _id: false,
 vooId: true, 
 litrosCombustivel: true,
 "empresa.nome": true,
 }).limit(1);