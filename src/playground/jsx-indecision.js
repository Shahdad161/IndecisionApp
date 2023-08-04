const app = {
  title: "Indecision APP",
  subtitle: "This is info paragrph",
  options: [],
};

//JSX -JAVACRPT XML
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const onRemoveAll = () => {
  app.options.length = 0;
  render();
};
const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      {" "}
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are ur option" : "No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What should you do?
      </button>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {app.options.map((str) => {
          return <li key={str}>{str}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
