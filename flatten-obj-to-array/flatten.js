export const flatten = node => {

  const {
    children,
    name
  } = node;

  const filteredNode = (name % 2 ? [{
    name
  }] : [])

  return filteredNode.concat((children && children.length) ? children.map(n => flatten(n)) : []).flat()
}
