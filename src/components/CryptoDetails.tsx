import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinUUID } = useParams();
  const { data } = useGetCryptoDetailsQuery(coinUUID);

  console.log("data of details:", data);
  const cryptoDetails = data?.data?.coin;
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="m-8">
      <Col className="flex justify-center items-center flex-col border border-slate-300 gap-10 py-2">
        <Title level={2} className="font-black text-blue-700">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) price
        </Title>
        <p className="text-base opacity-90 mb-5">
          {cryptoDetails?.name} live price in us Dollars
        </p>
        view value statistic, market cap and supply
      </Col>
      <Select
        defaultValue="7d"
        className="mt-5 w-52"
        placeholder="Select time period"
      >
        {time.map((date) => (
          <Option key={date}> {date} </Option>
        ))}
      </Select>
      <Row className="flex justify-between ">
        <Col className="flex justify-center items-center gap-10  w-full md:w-5/12">
          <Col className="">
            <Col className=" m-8">
              <Title level={3} className="font-extrabold mt-5 text-blue-700">
                {cryptoDetails?.name} value statistics
              </Title>
              <p className="text-base opacity-90 ">
                An overview showing the stats of {cryptoDetails?.name}
              </p>
            </Col>
            {stats.map(({ icon, title, value }) => (
              <Col className="flex justify-between text-base opacity-90 p-5 border-b-2 hover:bg-gray-50">
                <Col className="flex gap-3 text-base">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="font-extrabold">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className="flex justify-center items-center gap-10  w-full md:w-5/12">
          <Col className="">
            <Col className=" m-8">
              <Title level={3} className="font-extrabold mt-5 text-blue-700">
                Other statistics
              </Title>
              <p className="text-base opacity-90 ">
                An overview showing the stats of all other Cryptocurrenies
              </p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="flex justify-between text-base opacity-90 p-5 border-b-2 hover:bg-gray-50">
                <Col className="flex gap-3 text-base">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="font-extrabold">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
      </Row>
      <Row className="flex justify-between gap-5">
        <Col className="gap-10 mt-10 pt-10 w-full md:w-[45%]">
          <Row className="flex-[0.5]">
            <h3 className="font-extrabold">What is {cryptoDetails?.name}?</h3>
            <p>
              {cryptoDetails?.description
                ? HTMLReactParser(cryptoDetails?.description)
                : "Description not available"}
            </p>
          </Row>
        </Col>
        <Col className="gap-10 mt-10 pt-10  w-full  md:w-[45%]">
          <Title level={3} className="font-extrabold">
            {cryptoDetails?.name} Links
          </Title>
          {cryptoDetails?.links?.map((link: any) => (
            <Row
              className="flex justify-between items-center p-5 border-b-2 hover:bg-white"
              key={link?.name}
            >
              <Title level={5} className="transform capitalize">
                {link.type}
              </Title>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-base font-bold text-blue-700 "
              >
                {link?.name}
              </a>
            </Row>
          ))}
        </Col>
      </Row>
    </Col>
  );
};

export default CryptoDetails;
