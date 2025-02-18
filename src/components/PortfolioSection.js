import React from "react";
import _ from "lodash";

import { Link, withPrefix } from "../utils";
import PortfolioItem from "./PortfolioItem";

export default class PortfolioSection extends React.Component {
  renderProject(project, index, projectCount, viewAllLabel, viewAllUrl) {
    return <PortfolioItem key={index} project={project} />;
  }

  render() {
    const section = _.get(this.props, "section");
    const sectionId = _.get(section, "section_id");
    const title = _.get(section, "title");
    const subtitle = _.get(section, "subtitle");
    const layoutStyle = _.get(section, "layout_style", "mosaic");
    const viewAllLabel = _.get(section, "view_all_label");
    const viewAllUrl = _.get(section, "view_all_url");
    const projects = _.orderBy(
      _.get(this.props, "projects", []),
      "date",
      "desc"
    );
    const projectCount = _.size(projects);

    return (
      <section id={sectionId} className="section section--portfolio">
        <div className="container container--lg">
          {title && <h2 className="section__title line-top">{title}</h2>}
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
          <div className={`grid portfolio-feed portfolio-feed--${layoutStyle}`}>
            {_.map(projects, (project, index) =>
              this.renderProject(
                project,
                index,
                projectCount,
                viewAllLabel,
                viewAllUrl
              )
            )}
          </div>
        </div>
      </section>
    );
  }
}
