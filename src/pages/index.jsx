import { CssBaseline, GeistProvider, Grid, Page } from "@geist-ui/react";
import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticGithubCard } from "./cards";

class IndexPage extends React.Component {
  render() {
    return (
      <GeistProvider>
        <CssBaseline />
        <Page
          dotBackdrop
          style={{
            height: "100vh",
            width: "100vw",
            top: "0",
            left: "0",
            position: "absolute",
          }}
        >
          <Helmet>
            <title> C.Gearhart </title>{" "}
          </Helmet>
          <Grid.Container
            gap={0}
            style={{
              height: "100%",
              width: "100%",
              padding: "4rem",
              top: "0",
              left: "0",
              position: "absolute",
            }}
          >
            <Grid xs={8}></Grid>{" "}
            <Grid xs={16}>
              <Grid.Container gap={4}>
                <Grid xs={6} md={12}>
                  <StaticGithubCard
                    href="https://github.com/claytongearhart/speedxx"
                    Title="Speed++"
                    Description="Speed++ was going to be a compiler for my S++ programming language, but when working on it I found c++ could do everything I wanted S++ to do, so I gave up, but I put a lot of time into it so I left it here, even though it doesn't work. "
                  ></StaticGithubCard>
                </Grid>{" "}
              </Grid.Container>{" "}
            </Grid>{" "}
          </Grid.Container>{" "}
        </Page>{" "}
      </GeistProvider>
    );
  }
}

export default IndexPage;
