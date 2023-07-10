module.exports = {


  friendlyName: 'Add',


  description: 'Add apptodo.',


  inputs: {
      title:{
        type:'string'
      },
      body:{
        type : 'string'
      }
  },


  exits: {

    success:{
      statusCode: 201,
      description: "New record added",
    },
    error:{
      description: "Something went wrong"
    }
  },


  fn: async function (inputs, exits) {
    console.log("seeing in add ")
    try {
      let addRecord = await Apptodo.create({
      title: inputs.title,
      body: inputs.body
    }).fetch();

    return exits.success({
      status: "ok",
      data: addRecord
    });

    } catch (error) {
      console.log("Error" + error)
      return exits.error({
        status: "Error",
        description: "Something went wrong"
      })
    }

    
  }
};
