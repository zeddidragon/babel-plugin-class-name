module.exports = function(babel) {
  var t = babel.types
  var addClassName = function(path) {
    var node = path.node 
    if(node.id != null) {
      node.body.body.unshift(t.classMethod(
        'get',
        t.identifier("className"),
        [],
        t.blockStatement([
          t.returnStatement(t.stringLiteral(node.id.name))
        ]),
        false,
        true
      ))
    }
  };
  return {
    visitor: {
      ClassDeclaration: addClassName,
      ClassExpression: addClassName
    }
  }
};

