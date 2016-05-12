function capitalize() {

  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  };

}

export default {
  name: 'capitalize',
  fn: capitalize
};
