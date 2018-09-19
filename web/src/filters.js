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

