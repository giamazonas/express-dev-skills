const skills = [
  {text: 'invisibility', hasSkill: true, _id: 202920},
  {text: 'flying', hasSkill: false, _id: 202999},
  {text: 'time travel', hasSkill: true, _id: 202981},
  {text: 'controlled regeneration', hasSkill: false, _id: 202902}
]

const find = (conditions, callback) => {
  try{
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback 
    (null, skills)
  }catch (error) {
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
  skill._id = Date.now() % 10000000
  skill.hasSkill = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try {
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkills = skills.splice(idx, 1)
    if (!deletedSkills.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkills[0])
  } catch (error) {
    return callback(error, null)
  }
}

export {
  find, 
  findById,
  create,
  findByIdAndDelete,
}