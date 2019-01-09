function EZPZ_DB(dir) {
  if(!dir) {
    throw new Error('Did not define directory!')
  }
  if (!(this instanceof EZPZ_DB)) {
    return new EZPZ_DB(dir);
  }
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  this.dir = process.env.PWD+'/'+dir.replace("./","");
  this.fl = function(s) {return dir + '/' + s}
  this.fz = function(s,a) {return dir + '/' + s + "/" + a}
}

var fs = require('fs')
EZPZ_DB.prototype.test = function() {
  console.log('hello world')
}
EZPZ_DB.prototype.create = function(f,v) {
  console.log(this)
  if(fs.existsSync(this.fl(f))) {
    if(fs.readdirSync(this.fl(f)).length > 0) {
      fs.readdirSync(this.fl(f)).forEach(a => {
        fs.unlinkSync(this.fz(f,a))
      })
    }
    fs.rmdirSync(this.fl(f))
  }
  fs.mkdirSync(this.fl(f))
  for(i=0;i<Object.keys(v).length;i++) {
    fs.writeFile(this.fz(f,Object.keys(v)[i].toString()),v[Object.keys(v)[i]], (err) => {
      if(err) {
        return err
      }
    })
  }
}
EZPZ_DB.prototype.set = function(f,p,v) {
  if(!fs.existsSync(this.fl(f))) {
    fs.mkdirSync(this.fl(f))
  }
  fs.writeFileSync(this.fz(f,p),v)
}
EZPZ_DB.prototype.find = function(f,p) {
  if(!fs.existsSync(this.fl(f))) {
    throw new Error('Entry does not exist!')
  } else {
    return fs.readFileSync(this.fz(f,p)).toString()
  }
}
EZPZ_DB.prototype.findAll = function(f) {
  if(!fs.existsSync(this.fl(f))) {
    throw new Error('Entry does not exist!')
  } else {
    var res = {}
    let k = fs.readdirSync(this.fl(f))
    k.forEach(fe => {
      let va = fs.readFileSync(this.fz(f,fe)).toString()
      res[fe] = va
    })
    return res
  }
}
EZPZ_DB.prototype.delete = function(f,p) {
  if(!fs.existsSync(this.fz(f,p))) {
    throw new Error('Entry or Place does not exist!')
  } else {
    fs.unlinkSync(this.fz(f,p))
  }
}
EZPZ_DB.prototype.deleteAll = function(f) {
  if(!fs.existsSync(this.fl(f))) {
    throw new Error('Entry does not exist!')
  } else {
    if(fs.readdirSync(this.fl(f)).length > 0) {
      fs.readdirSync(this.fl(f)).forEach(a => {
        fs.unlinkSync(this.fz(f,a))
      })
    }
    fs.rmdirSync(this.fl(f))
  }
}

module.exports = EZPZ_DB