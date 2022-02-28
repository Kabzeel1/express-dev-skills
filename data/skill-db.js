const skills = [
  {type: 'soccer', have: true, _id: 125223},
  {type: 'driving', have: true, _id: 127904},
  {type: 'skating', have: false, _id: 139608},
]

const find = (conditions, callback) => {
   try {
 if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
     if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.have = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedskill = skills.splice(idx, 1)
    if (!deletedskill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedskill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete
}