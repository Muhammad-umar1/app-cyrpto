import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { QueryStatus } from "@reduxjs/toolkit/query";
import millify from "millify";

import { useGetCryptoDataQuery } from "../services/cryptoApi";

interface CryptoCurrenciesProps {
  simplified: Boolean;
}

const Cryptocurrencies: React.FC<CryptoCurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, status } = useGetCryptoDataQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  if (status === QueryStatus.rejected) return <div>Error</div>;
  useEffect(() => {
    if (status === QueryStatus.pending) return; // Don't perform any other logic while loading.

    const filteredData = cryptoList?.data?.coins.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [status, cryptoList, searchTerm]);

  return (
    <>
      {!simplified && (
        <div className="w-3/12 mb-10 mx-auto">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Cryptocurrency"
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="min-h-[60vh]">
        {cryptos?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="min-w-[250px]"
            key={currency?.uuid}
          >
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card
                title={`${currency?.rank}. ${currency?.name}`}
                extra={
                  <img
                    alt="loading... "
                    className="w-7"
                    src={currency?.iconUrl}
                  ></img>
                }
                hoverable
              >
                <p>Price: {millify(currency?.price)}</p>
                <p>Market Cap: {millify(currency?.marketCap)}</p>
                <p>Daily changes: {millify(currency?.changes)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
