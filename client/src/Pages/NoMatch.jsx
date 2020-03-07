import React from "react";
import Bootstrap from "../components/BootstrapComponents";

function NoMatch() {
  return (
    <Bootstrap.Container fluid>
      <Bootstrap.Row>
        <Bootstrap.Col size="md-12">
          <Bootstrap.Jumbotron>
            <h1>Maybe you're looking for your Pantry?...</h1>
            <h1>
              <a href="/pantry">
                <img alt="colored pantry" src="https://image.flaticon.com/icons/svg/1606/1606731.svg" height="100px"></img>
              </a>
            </h1>
          </Bootstrap.Jumbotron>
        </Bootstrap.Col>
      </Bootstrap.Row>
    </Bootstrap.Container>
  );
}

export default NoMatch;
