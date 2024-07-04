const add = (a:number, b:number):number =>{
  let resultAdd = a+b
  return resultAdd
}

const nus = (c:number, d:number):number =>{
  let resultNus = c-d
  return resultNus
}

const all = ():number=>{
  let adden = add(4,2);
  let nusen = nus(10, 6);
  return adden-nusen
}
console.log(all())