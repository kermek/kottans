module.exports = function getDependencies(tree) {
  var dependencies = [];
  return (function getCurrent(tree, dependencies) {
    Object.keys(tree).forEach(function(element) {
      if (element === 'dependencies') getCurrent(tree[element], dependencies);
      if (element != 'version' && element != 'dependencies' && element != 'name') {
        var lib = element + '@' + tree[element]['version'];
        if (dependencies.indexOf(lib) === -1) {
          dependencies.push(lib);
          dependencies.sort();
          if (tree[element].hasOwnProperty('dependencies')) {
            getCurrent(tree[element]['dependencies'], dependencies);
          } 
        }
      }
    });
    return dependencies;
  })(tree, dependencies);
}