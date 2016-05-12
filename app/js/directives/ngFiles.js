function ngFiles($parse) {
  'ngInject';

  const directive = {};

  directive.link = (scope, element, attrs) => {
    var model = $parse(attrs.ngFiles);
    var values = model(scope);
    var modelSetter = model.assign;
    element.bind('change', function () {
      angular.forEach(element[0].files, function (item) {
        var value = {
          // File Name
          name: item.name,
          //File Size
          size: item.size,
          //File URL to view
          url: URL.createObjectURL(item),
          // File Input Value
          _file: item
        };
        values.push(value);
      });
      scope.$apply(function () {
        modelSetter(scope, values);
      });
    });
  }

  return directive;
}

export default {
  name: 'ngFiles',
  fn: ngFiles
};
