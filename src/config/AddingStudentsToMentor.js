import axios from "axios";

const AddingStudentsToMentor = async (body) => {
  const result = await axios.post(
    "https://mentorsandstudents.herokuapp.com/assignmentor/newMentor",
    body
  );
  return result;
};

export default AddingStudentsToMentor;
