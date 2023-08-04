class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Here are some details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;
// const DeatailsFunc = () => {
//   visibility = !visibility;
//   renderVisibleApp();
// };
// const appRoot = document.getElementById("app");
// const renderVisibleApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={DeatailsFunc}>
//         {visibility ? "hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Here are some details</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// renderVisibleApp();
