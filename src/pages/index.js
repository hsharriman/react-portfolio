import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

import SEO from "../components/seo"
import ProjectLayout from "../components/projectlayout"
import GifTextButton from "../components/common/GifTextBUtton"

const IndexPage = () => (
  <ProjectLayout>
    <SEO title="Home" />
    {LandingPageLinks()}
  </ProjectLayout>
)

function LandingPageLinks() {
  let gifProps = {
    hoverColor:"pink",
    className: "circle star-l",
    gifName: "../../static/gifs/cursors/pt2pink.gif",
    href: "/#engineering",
    text: "Engineering Projects",
    position: {
      left: "3", 
      top: "10"
    }
  }
  return (
    <GifTextButton props={gifProps}
    />
  );
}

export default IndexPage