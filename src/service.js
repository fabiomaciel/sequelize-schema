var model = require('./model')

class Service{
    constructor(tenant){
        this.tenant = tenant;
        this.model = model.schema(tenant);
    }

    findAll(){
        this.model.findAll().then(l => {
            res.send(l)
          });
    }
}


Service.get = function(tenant){
    return new Service(tenant || 'public');
}