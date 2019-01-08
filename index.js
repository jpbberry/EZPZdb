var fs = require('fs')
function fl(s) {return './ezpzdb/db/' + s}
function fz(s,a) {return './ezpzdb/db/' + s + "/" + a}
exports.test = () => {
  console.log('hello world')
}
exports.create = (f,v) => {
  if(fs.existsSync(fl(f))) {
    if(fs.readdirSync(fl(f)).length > 0) {
      fs.readdirSync(fl(f)).forEach(a => {
        fs.unlinkSync(fz(f,a))
      })
    }
    fs.rmdirSync(fl(f))
  }
  fs.mkdirSync(fl(f))
  for(i=0;i<Object.keys(v).length;i++) {
    fs.writeFile(fz(f,Object.keys(v)[i].toString()),v[Object.keys(v)[i]], (err) => {
      if(err) {
        return err
      }
    })
  }
}
exports.set = (f,p,v) => {
  if(!fs.existsSync(fl(f))) {
    return {'error': 'place does not exist!', 'code': 404}
  } else {
    fs.writeFileSync(fz(f,p),v)
  }
}
exports.find = (f,p) => {
  if(!fs.existsSync(fl(f))) {
    return {'error': 'place does not exist!', 'code': 404}
  } else {
    return JSON.parse(fs.readFileSync(fz(f,p)))
  }
}
exports.findAll = (f) => {
  if(!fs.existsSync(fl(f))) {
    return {'error': 'place does not exist!', 'code': 404}
  } else {
    var res = {}
    let k = fs.readdirSync(fl(f))
    k.forEach(fe => {
      let va = fs.readFileSync(fz(f,fe)).toString()
      res[fe] = va
    })
    return res
  }
}
exports.delete = (f,p) => {
  console.log(fz(f,p))
  if(!fs.existsSync(fz(f,p))) {
    return {'error': 'place does not exist!', 'code': 404}
  } else {
    fs.unlinkSync(fz(f,p))
  }
}
exports.deleteAll = (f) => {
  if(!fs.existsSync(fl(f))) {
    return {'error': 'place does not exist!', 'code': 404}
  } else {
    if(fs.readdirSync(fl(f)).length > 0) {
      fs.readdirSync(fl(f)).forEach(a => {
        fs.unlinkSync(fz(f,a))
      })
    }
    fs.rmdirSync(fl(f))
  }
}