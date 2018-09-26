//** Filtros gerais
//**
import Vue from 'vue';
import _ from 'lodash';

Vue.filter('formatDate', function(data){
  return new Date(data).toLocaleDateString('pt-BR')
});

Vue.filter('formatTime', function(data){
  return new Date(data).toLocaleTimeString('pt-BR')
});

Vue.filter('padZero', function(data, length){
  return _.padStart(data, length, '0')
});

Vue.filter('format', function(dado, fmt){
  if(fmt === 'date')
    return new Date(dado).toLocaleDateString('pt-BR')
  
  else if(fmt === 'code')
    return _.padStart(dado, 9, '0')
  
  else if(fmt === 'cpfcnpj')
    return dado.length > 11
          ? _.padStart(dado, 14, '0').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '\$1.\$2.\$3\/\$4\-\$5') 
          : _.padStart(dado, 11, '0').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4')
  else
    return dado
});
