function serialize2Json(form) {
  let obj = {}
  let arr = $(form).serializeArray()
  for(let i of arr) {
    obj[i.name] = i.value
  }
  console.log(obj)
  return obj
}