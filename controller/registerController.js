import registerModel from "../model/registerModel.js"
class indexController
{
    saveDataController(userDetails)
    {
        return new Promise((resolve,reject)=>{
            registerModel.fetchData().then((result)=>{
                var l = result.length
                var _id = (l==0)?1:result[l-1]._id+1
                console.log(l);
                
                console.log(_id);
                userDetails = {...userDetails,"_id":_id}
                registerModel.saveData(userDetails).then((result)=>{
                    resolve(result)
                }).catch((err)=>{
                    reject(err)
                })
            }).catch((err)=>{
                console.log(err);
            })
        })
    }
    showData()
    {
        return new Promise((resolve,reject)=>{
            registerModel.fetchData().then((result)=>{
                resolve(result)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    findUser(userDetails)
    {
        return new Promise((resolve,reject)=>{
            registerModel.fetchData(userDetails).then((result)=>{
                resolve(result)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
}
export default new indexController()