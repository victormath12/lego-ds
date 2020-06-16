const getProps = (nodeMap: NamedNodeMap) => {
  if (nodeMap) {
    removeFrameworkAttrs(nodeMap);
    const length = nodeMap.length;

    return Object.keys(nodeMap).reduce((props, current) => {
      try {
        const numCurrent = parseInt(current);
        if (numCurrent < length) {
          const property = nodeMap[current];
          return {
            ...props,
            [property.name]: property.value,
          }
        }
      } catch (err) { }
    }, {});
  }
  return {};
}

const removeFrameworkAttrs = (nodeMap: NamedNodeMap) => {
  const frameworkAttrsRegex = /(_ngcontent-|data-v-)/g;

  const invalidAttrs = Object.values(nodeMap)
    .filter(attr => attr.name.match(frameworkAttrsRegex));

  invalidAttrs.forEach(val => {
    nodeMap.removeNamedItem(val.name);
  });
}

export default getProps;
