## install

yarn add hf-loading

## component

```javascript
<Loading>
```

## features

- support RWD
- support full page loading and block loading

## property

- show
- type
  - fullPage: full page loading
  - default: you don't need write type, default is block loading.

## CSS

.loading-center: background can change images of spinner.

## Demo

```javascript
import React from "react";
import Loading from "./Loading";

class App extends React.Component {
  state = {
    show: false
  };
  componentDidMount() {
    //fake fetch API here
    this.setState({
      show: true
    });
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, 2000);
  }
  render() {
    const { show } = this.state;
    return (
      <div className="App">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum,
        molestiae magni vel rerum, eveniet, explicabo numquam officiis aut
        maxime veniam blanditiis vitae porro iusto ea quibusdam! Reiciendis, sit
        quis?
        <div className="box">
          <Loading show={show} type="fullPage" />
        </div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae
        reprehenderit voluptates iusto ut eum maxime nihil vel, rerum culpa,
        quae delectus quasi voluptatem! Id blanditiis laudantium sequi obcaecati
        eum.
      </div>
    );
  }
}

export default App;
```
