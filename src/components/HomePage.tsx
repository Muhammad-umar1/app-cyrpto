import { Col, Row, Statistic, Typography } from "antd";
import React from "react";

import { useGetCryptoDataQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from ".";

const HomePage: React.FC = () => {
  const { Title } = Typography;
  const { data, isFetching } = useGetCryptoDataQuery(10);

  // Now you can use 'data' here
  type globalStats = {
    data?: {
      stats?: any;
    };
  };
  const globalStats: any | undefined = data?.data?.stats;
  // console.log(globalStats);

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats?.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <Row className="flex mt-10">
        <Col span={12} className="">
          <Title level={2} className="">
            Top 10 CryptoCurrencies in the World
          </Title>
        </Col>
        <Col span={4} offset={8} className="">
          <Title level={4} className="">
            <Link to="/cryptocurrencies" className="whitespace-wrap break-keep">
              Show More
            </Link>
          </Title>
        </Col>
      </Row>
      <Cryptocurrencies simplified />
      <Row className="flex mt-10">
        <Col span={12} className="">
          <Title level={2} className="">
            Latest Crypto News
          </Title>
        </Col>
        <Col span={4} offset={8} className="">
          <Title level={4} className="">
            <Link to="/News" className="whitespace-wrap break-keep">
              Show More
            </Link>
          </Title>
        </Col>
      </Row>
      <News simplified />
    </>
  );
};

export default HomePage;
