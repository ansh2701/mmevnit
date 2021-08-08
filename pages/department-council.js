import Example from "../components/Example";

const departmentCouncil = () => {
  return (
    <div className="container">
      <Example />
      <Example />
      <Example />
      <Example />
      <Example />
      <Example />
      <Example />
      <style jsx>{`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        margin: 5vw;
        padding: 2vw;
      `}</style>
    </div>
  );
};

export default departmentCouncil;
