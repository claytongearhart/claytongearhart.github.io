import * as React from "react";
import { Helmet } from "react-helmet";
import { Github } from "@geist-ui/react-icons";
import {
  GeistProvider,
  CssBaseline,
  Text,
  Card,
  Page,
  Divider,
  Tooltip,
  User,
  Grid,
  Spinner,
} from "@geist-ui/react";

const GithubCard = () => {
  return (
    <Card shadow={true}>
      <Github />
    </Card>
  );
};

class IndexPage extends React.Component {
  render() {
    return (
      <GeistProvider>
        <CssBaseline />

        <Page
          dotBackdrop={true}
          style={{
            height: "100vh",
            width: "100vw",
            top: "0",
            left: "0",
            position: "absolute",
          }}
        >
          <Helmet>
            <title>C. Gearhart</title>
          </Helmet>

          <Grid.Container
            gap={0}
            style={{
              height: "100%",
              width: "100%",
              top: "0",
              left: "0",
              position: "absolute",
            }}
          >
            <Grid xs={8}>
              <Text h1>Gay porn</Text>
            </Grid>
            <Grid xs={16}>
              <Grid.Container gap={4}>
                <Grid xs={6} md={12}>
                  <GithubCard />
                </Grid>
                <Grid xs={6} md={12}>
                  <GithubCard />
                </Grid>
                <Grid xs={6} md={12}>
                  <GithubCard />
                </Grid>
                <Grid xs={6} md={12}>
                  <GithubCard />
                </Grid>
                <Grid xs={6} md={12}>
                  <GithubCard />
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
        </Page>
      </GeistProvider>
    );
  }
}

export default IndexPage;
