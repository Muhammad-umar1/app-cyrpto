import React, { useState } from "react";
import { Card, Select, Typography, Row, Col, Avatar } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../services/NewsApi";
import { useGetCryptoDataQuery } from "../services/cryptoApi";

interface cyrptoNewsProps {
  simplified: Boolean;
}
const { Option } = Select;
const { Text, Title } = Typography;

const News: React.FC<cyrptoNewsProps> = (props) => {
  const [newsCatergory, setNewsCatergory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetNewsQuery({
    newsCatergory,
    count: props.simplified ? 6 : 150,
  });
  const { data } = useGetCryptoDataQuery(100);

  const demoImage =
    "https://www.goodreturns.in/img/2023/10/cryptocurrency-1696564229.jpg";

  if (!cryptoNews?.value) {
    return <div>Lodaing..</div>;
  }

  return (
    <Row gutter={[20, 20]}>
      {!props.simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="w-44"
            placeholder="Select A Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCatergory(value)}
            // filterOption={(input, option) => {
            //   if (option && option.children) {
            //     return (
            //       option.children.toLowerCase().indexOf(input.toLowerCase()) >=
            //       0
            //     );
            //   }
            //   return false; // Return false if option or option.children is undefined
            // }}
            filterOption={(input, option) => {
              if (option && option.children) {
                const optionChildren = option.children as unknown as string;
                return (
                  optionChildren.toLowerCase().indexOf(input.toLowerCase()) >= 0
                );
              }
              return false;
            }}
          >
            <Option value="Cryptocurrency"> Cryptocurrency </Option>
            {data?.data?.coins.map((coin: any, i: any) => (
              <Option key={i} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i} className="">
          <Card hoverable className=" border border-slate-600 ">
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              className="min-h-[200px] flex flex-col justify-around p-0 -m-4 "
            >
              <div className="flex gap-3">
                <Title level={5}>{news.name}</Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="News"
                  className="w-[6rem] h-[5rem]"
                ></img>
              </div>
              <p>
                {news?.description.length > 100
                  ? `${news?.description.substring(0, 100)}...`
                  : news?.description}
              </p>
              <div className="flex justify-between">
                <div className="">
                  <Avatar
                    src={
                      news?.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Text className="ms-2">{news?.provider[0]?.name}</Text>
                </div>
                <Text className="mt-1">
                  {moment(news.datePublished).startOf("seconds").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
