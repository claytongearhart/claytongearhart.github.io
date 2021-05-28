import { Card, Link, Text } from "@geist-ui/react";
import * as Icon from "@geist-ui/react-icons";
import * as React from "react";
import { useGet } from "restful-react";

const DynamicGithubCard = (props) => {
  let fullSourceUrl = "https://api.github.com/repos/" + props.location;
  const { data: repoData } = useGet({
    path: fullSourceUrl,
  });
  return (
    <Card shadow>
      <Icon.Github />
      <Text h3>
        <Link href={repoData && repoData.html_url} underline>
          {repoData && repoData.name}
          
        </Link>
      </Text>
      <Text p>{repoData && repoData.description}</Text>
    </Card>
  );
};

const StaticGithubCard = (props) => {
  return (
    <Card shadow style={{ padding: ".5rem" }}>

          <Text h4 >
            <Link href={props.href} underline>{props.Title}</Link>
          </Text>
          <Text p>{props.Description}</Text>
    </Card>
  );
};

export { DynamicGithubCard, StaticGithubCard };

