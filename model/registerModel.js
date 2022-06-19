import "./connection.js"
import registerSchemaModel from "../schema/registerSchema.js"

class registerModel
{
    saveData(userDetails)
    {
        return new Promise((resolve,reject)=>{
            var obj = registerSchemaModel(userDetails)
        obj.save((err,result)=>{
            err ? reject(err): resolve(result)
        })
        })
    }
    fetchData(condition)
    {
        return new Promise((resolve,reject)=>{
            registerSchemaModel.find(condition,(err,result)=>{
                err ? reject(err):resolve(result)
            })
        })
    }
}
export default new registerModel()