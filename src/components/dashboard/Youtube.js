import React from "react";

import { Card, Elevation } from "@blueprintjs/core";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { dummyData } from "./dummyData";
import {
      normaliseYoutubeMetrics,
      normaliseEstimatedMinutesWatched,
      normaliseEstimatedMinutesPerCountry,
} from "../../common/utils/utils";
import "../../styles/graph.scss"

const Youtube = ({
      youtubeMetrics = dummyData.metric.youtubeMetrics,
      youtubeMinutesDay = dummyData.metric.youtubeMinutesDay,
      youtubeMinutesCountry = dummyData.metric.youtubeMinutesCountry,
}) => {
      const youtubeData = normaliseYoutubeMetrics(youtubeMetrics);
      const estimatedMinutesWatched =
            normaliseEstimatedMinutesWatched(youtubeMinutesDay);
      const estimatedMinutesWatchedCountry = normaliseEstimatedMinutesPerCountry(
            youtubeMinutesCountry
      );
      return (
            <div className="m-lg-4 m-md-4 m-sm-2">
                  <div className="m-2">
                        <h3>Youtube</h3>
                  </div>
                  <div>
                        <div className="d-flex justify-content-between flex-wrap mt-4">
                              <div className="m-2 line-graph-container">
                                    <Line
                                          data={estimatedMinutesWatched}
                                    />
                              </div>
                              <div className="m-2 bar-graph-container">
                                    <Bar
                                          data={estimatedMinutesWatchedCountry}
                                    />
                              </div>
                        </div>
                        <div className="d-lg-flex d-md-flex justify-content-between">
                              {youtubeData?.map((card) => {
                                    return (
                                          <div className="shadow-lg bg-body rounded-3 p-4">
                                                <Card
                                                      interactive={true}
                                                      elevation={Elevation.TWO}
                                                      key={card.title}
                                                >
                                                      <div className="align-self-center text-center">
                                                            <p className="blockquote fst-italic">
                                                                  {card.title}
                                                            </p>
                                                            <p>{card.description}</p>
                                                      </div>
                                                </Card>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
};

export default Youtube;