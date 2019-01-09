module.exports = (dir) => {
    var fs = require('fs')
    function fl(s) {return dir + '/' + s}
    function fz(s,a) {return dir + '/' + s + "/" + a}
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
        fs.mkdirSync(fl(f))
      }
      fs.writeFileSync(fz(f,p),v)
    }
    exports.find = (f,p) => {
      if(!fs.existsSync(fl(f))) {
        throw new Error('Entry does not exist!')
      } else {
        return fs.readFileSync(fz(f,p)).toString()
      }
    }
    exports.findAll = (f) => {
      if(!fs.existsSync(fl(f))) {
        throw new Error('Entry does not exist!')
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
      if(!fs.existsSync(fz(f,p))) {
        throw new Error('Entry or Place does not exist!')
      } else {
        fs.unlinkSync(fz(f,p))
      }
    }
    exports.deleteAll = (f) => {
      if(!fs.existsSync(fl(f))) {
        throw new Error('Entry does not exist!')
      } else {
        if(fs.readdirSync(fl(f)).length > 0) {
          fs.readdirSync(fl(f)).forEach(a => {
            fs.unlinkSync(fz(f,a))
          })
        }
        fs.rmdirSync(fl(f))
      }
    }
    exports.directory = process.env.PWD+'/'+dir.replace("./","")
    return exports
}