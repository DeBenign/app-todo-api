module.exports = {


  friendlyName: 'Delete',


  description: 'Delete apptodo.',


  inputs: {

    id:{
      description: "The id of the apptodo",
      type: 'number'
    }
  },


  exits: {

    success: {
      description: 'Todo was updated successfully',
    },
    notFound: {
      statusCode: 404,
      description: 'Todo with specified id not found',
    },
    error: {
      description: 'Something went wrong',
    },

  },


  fn: async function ({id}, exits) {
    try {
      const found = await apptodo.findOne({
        id
      })

      if (!found) {
        return exits.notFound({
          error: `Todo with id ${id} was not found`,
        });
      }

        await Todo.destroyOne({
          id
        })
    
        return exits.success({
          status: "ok",
          data: "Todo deleted successfully",
        });
      
      }
     catch (error) {
          console.error(error)
          return exits.error({
            status: "error",
            message: "Something went wrong",
          })
        }
    } 
    // All done.

  };
