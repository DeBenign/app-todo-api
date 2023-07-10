module.exports = {


  friendlyName: 'List',


  description: 'List all items in apptodo.',


  inputs: {
   

  },


  exits: {
    success: {
      description: ' List of items in Apptodo'
    },
    error: {
      description: 'Something went wrong',
    },

  },


  fn: async function (_, exits) {
    try{
      const list =await Apptodo.find()

      return exits.success({
        status: 'OK',
        data: list
      })
    }
    catch (error) {
      console.error(error)
      return exits.error({
        status: "error",
        description: "Something went wrong",
      })
    }
    // All done.
    return list;

  }


};
