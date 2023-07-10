module.exports = {


  friendlyName: 'Update',


  description: 'Update apptodo.',


  inputs: {
    id:{
      description: "The id of the apptodo",
      type: 'number',
    },

    title:{
      type: 'string'
    },

    body:{
      type: 'string',
    },
    isDone: {
      description: 'The updated status of the todo',
      type: 'boolean',
    },
    
    
    
  },


  exits: {
    success:{
      status: 201,
      description: "Apptodo was updated successfully"
    },

    notFound: {
      statusCode: 404,
      description: 'Todo with specified id not found',
    },

    error:{
      description: "Something went wrong"
    }
  },


  fn: async function (inputs, exits) {
  try {
    const found = await Apptodo.findOne({
      id: inputs.id
    })

    if (!found) {
      return exits.notFound({
        error: `Todo with id ${inputs.id} was not found`,
      });
    }

    const updatedTodo  = await Apptodo.updateOne({
      id: inputs.id
  }).set({title: inputs.title, body:inputs.body, isDone:inputs.isDone})

  return exits.success({
    status: "ok",
    data: updatedTodo,
  });
    
  } catch (error) {
    console.log("Error" + error)
    return exits.error({
      status: "error",
      description: "Something went wrong"
    })
  }
    // All done.
    return;

  }


};
