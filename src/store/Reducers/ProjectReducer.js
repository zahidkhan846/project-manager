const initialState = {
  projects: [
    {
      id: "1",
      title: "burger builder",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae asperiores eos earum harum!",
    },
    {
      id: "2",
      title: "e-commerce store",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae asperiores eos earum harum!",
    },
    {
      id: "3",
      title: "portfolio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae asperiores eos earum harum!",
    },
  ],
};

const ProjectReducer = (state = initialState, action) => {
  return state;
};

export default ProjectReducer;
