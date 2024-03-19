/* eslint-disable react/prop-types */
const GetTodos = ({ data }) => {
  const todoResults = data.map((el, inx) => {
    return (
      <div style={{ marginBottom: "5px" }} key={el.id}>
        <b>{++inx}- Name: </b>
        <span style={{ marginRight: "5px" }}>{el.title}</span>
        <button style={{ cursor: "pointer" }}>Show Details</button>
        <hr />
      </div>
    );
  });
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        backgroundColor: "greenyellow",
      }}
    >
      {todoResults}
    </div>
  );
};

export default GetTodos;
