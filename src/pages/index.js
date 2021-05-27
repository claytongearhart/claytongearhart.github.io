import InfiniteScroll from "react-infinite-scroll-component";
import * as React from "react";
import { Minus } from '@geist-ui/react-icons'
import {
  GeistProvider,
  CssBaseline,
  Text,
  Card,
  Code,
  Row,
  Dot,
  Note,
  Spacer,
  Page,
  Divider,
  Tooltip,
  User,
} from "@geist-ui/react";

class IndexPage extends React.Component {
  render() {
    return (
      <GeistProvider>
        <CssBaseline />
        <Page dotBackdrop={true}>
          <Card hoverable={true}>
            <Text h2>Hello There</Text>
            <Divider />
            <Text p>
              There is nothing here for the moment.
              <br />
              The root of this website has been used for mutiple things
              throughout it's lifespan; so until I get my full featured website
              finished there will be nothing at the{" "}
              <Tooltip
                text={"The base url (eg. claytongearhart.com)"}
                type="dark"
              >
                root
              </Tooltip>.
            </Text>
            <Divider />
            <User name="C. Gearhart">
              <User.Link href="https://www.instagram.com/clayton.gearhart/">
                @clayton.gearhart
              </User.Link>
            </User>
          </Card>
        </Page>
      </GeistProvider>
    );
  }
}

export default IndexPage;
