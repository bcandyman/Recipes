import React from "react";
import Bootstrap from "../components/BootstrapComponents";

function NoMatch() {
  return (
    <Bootstrap.Container fluid>
      <Bootstrap.Row>
        <Bootstrap.Col size="md-12">
          <Bootstrap.Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Bootstrap.Jumbotron>
        </Bootstrap.Col>
      </Bootstrap.Row>
    </Bootstrap.Container>
  );
}

export default NoMatch;
