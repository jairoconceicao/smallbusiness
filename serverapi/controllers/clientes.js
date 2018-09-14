module.exports = (function(){
  return {
    list: function(req, res) {
      let obj = [];
      
      obj.push({
        Id: 258954,
        NomeCliente: 'Jairo Pereira da Conceição',
        DataNasc: '1975-11-06'
      });
      obj.push({
        Id: 258900,
        NomeCliente: 'Jairo Pereira da Conceição',
        DataNasc: '1975-11-06'
      });
      obj.push({
        Id: 258800,
        NomeCliente: 'Jairo Pereira da Conceição',
        DataNasc: '1975-11-06'
      });

      res.json(obj);
    },
  
    create: function(req, res) {
  
    },
  
    edit: function(req, res) {
  
    },
  
    delete: function(req, res) {
  
    }
  };
}());
