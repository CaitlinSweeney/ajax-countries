countries
  .factory('apiFactory', apiFactory)

apiFactory.$inject = ['$http']

function apiFactory ($http) {

  function getCountries () {
    return $http.get('http://raw.githubusercontent.com/RefactorU/exercise-solutions/master/node/NODE7.5-ajax-countries/models/countriesModel.json');
  }

  return {
    getCountries : getCountries
  }
}
