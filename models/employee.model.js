const mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required"
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

employeeSchema.path("email").validate(val => {
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(val);
}, "Invalid email");
mongoose.model("Employee", employeeSchema);
