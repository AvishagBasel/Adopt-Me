import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundery from "./ErrorBoundery";
import ThemeContext from "./ThemeContext";

class Detail extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    if (!(this.state.animal || this.state.state)) {
      throw new Error("lnao you creashed");
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;
    console.log(this.state);

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundery>
      <Detail params={params} />
    </ErrorBoundery>
  );
};

export default WrappedDetails;
