
var Attribute_possibleTypes = ['Attribute']
module.exports.isAttribute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAttribute"')
  return Attribute_possibleTypes.includes(obj.__typename)
}



var AggregateAttrbute_possibleTypes = ['AggregateAttrbute']
module.exports.isAggregateAttrbute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAggregateAttrbute"')
  return AggregateAttrbute_possibleTypes.includes(obj.__typename)
}



var AggregateAttrbuteValue_possibleTypes = ['AggregateAttrbuteValue']
module.exports.isAggregateAttrbuteValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAggregateAttrbuteValue"')
  return AggregateAttrbuteValue_possibleTypes.includes(obj.__typename)
}



var Contract_possibleTypes = ['Contract']
module.exports.isContract = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContract"')
  return Contract_possibleTypes.includes(obj.__typename)
}



var Token_possibleTypes = ['Token']
module.exports.isToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}
