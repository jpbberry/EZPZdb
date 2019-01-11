var CryptoJS = require('cryptojs')
var fs = require('fs')
function EZPZ_DB(dir,pass) {
  if(!dir) {
    throw new Error('Did not define directory!')
  }
  if (!(this instanceof EZPZ_DB)) {
    return new EZPZ_DB(dir);
  }
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  if(!pass) {
    this.encrypt = function(m) {return m}
    this.decrypt = function(m) {return m}
  } else {
    this.encrypt = function(m) {return CryptoJS.Crypto.AES.encrypt(m,pass)}
    this.decrypt = function(m) {
      try {
        let k = CryptoJS.Crypto.AES.decrypt(m,pass)
        return k
      } catch(err) {
        throw new Error('Incorrect Password!')
      }
    }
  }
  this.dir = process.env.PWD+'/'+dir.replace("./","");
  this.fl = function(s) {return dir + '/' + s}
  this.fz = function(s,a) {return dir + '/' + s + "/" + a}
  this.direct = dir
}
EZPZ_DB.prototype.test = function() {
  console.log('hello world')
}
EZPZ_DB.prototype.create = function(f,v) {
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
    fs.writeFile(this.fz(f,Object.keys(v)[i].toString()),this.encrypt(v[Object.keys(v)[i]]), (err) => {
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
  fs.writeFileSync(this.fz(f,p),this.encrypt(v))
}
EZPZ_DB.prototype.find = function(f,p) {
  if(!fs.existsSync(this.fl(f))) {
    throw new Error('Entry does not exist!')
  } else {
    return this.decrypt(fs.readFileSync(this.fz(f,p)).toString())
  }
}
EZPZ_DB.prototype.findAll = function(f) {
  if(!fs.existsSync(this.fl(f))) {
    throw new Error('Entry does not exist!')
  } else {
    var res = {}
    let k = fs.readdirSync(this.fl(f))
    k.forEach(fe => {
      let va = this.decrypt(fs.readFileSync(this.fz(f,fe)).toString())
      res[fe] = va
    })
    return res
  }
}
EZPZ_DB.prototype.getAll = function() {
  let res = {}
  fs.readdirSync(this.direct).forEach(a => {
    let tr = {}
    fs.readdirSync(this.fl(a)).forEach(b => {
      tr[b] = this.decrypt(fs.readFileSync(this.fz(a,b)).toString())
    })
    res[a] = tr
  })
  return res;
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
EZPZ_DB.prototype.remove = function() {
  fs.readdirSync(this.direct).forEach(a => {
    this.deleteAll(a)
  })
}
EZPZ_DB.prototype.setNewDir = function(dir) {
  if(!dir) {
    throw new Error('Did not define new directory!')
  }
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  this.dir = process.env.PWD+'/'+dir.replace("./","");
  this.fl = function(s) {return dir + '/' + s}
  this.fz = function(s,a) {return dir + '/' + s + "/" + a}
  this.direct = dir
}
EZPZ_DB.prototype.backup = EZPZ_DB.prototype.export = function(bp) {
  if(!bp) {
    throw new Error('No backup file defined')
  }
  fs.writeFileSync(bp,JSON.stringify(this.getAll()))
}
EZPZ_DB.prototype.import = function(bp,rw) {
  rew = rw||false
  if(rew) {
    this.remove()
  }
  if(!fs.existsSync(bp)) {
    throw new Error('Backup file not defined')
  }
  let nb = JSON.parse(fs.readFileSync(bp))
  Object.keys(nb).forEach(a => {
    this.create(a,nb[a])
  })
}

module.exports = EZPZ_DB