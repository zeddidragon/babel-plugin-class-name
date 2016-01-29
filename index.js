module.exports = function(babel) {
  var addClassName = function(node) {
    if(node.id != null) {
      node.body.body.unshift({
        type: "ClassProperty",
        key: {
          name: "className",
          type: "Identifier"
        },
        value: {
          value: node.id.name,
          type: "Literal"
        },
        static: true,
        computed: false
      });
    }
  };
  return {
    visitor: {
      ClassDeclaration: addClassName,
      ClassExpression: addClassName
    }
  }
};

