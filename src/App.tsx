import { ProConfigProvider, StatisticCard } from '@ant-design/pro-components';
import { ConfigProvider, Flex, Typography } from 'antd';
import { useState } from 'react';
import { City, ForecastingUnits } from './@types/api';
import api from './api';
import WeekWeatherCard from './components/Card/WeekWeatherCard';
import WeatherCard from './components/Card/WheatherCard';
import { IconFont } from './components/IconFont';
import './i18n/config';
import Header from './layout/Header';
import MainLayout from './layout/MainLayout';

const { Text } = Typography

type AutoCompleteProps = {
  value: string;
  label: string;
  key: number;
  city: City;
}

function App() {
  const [value, setValue] = useState<AutoCompleteProps[]>([])
  const [data, setData] = useState<Record<string, ForecastingUnits>>()

  const handleChange = async (value: string) => {
    await api.cities.fetch(value).then((data) => {
      setValue(data?.results?.map((item: City) => {
        return {
          value: item.name,
          label: item.name,
          key: item.id,
          city: item,
        }
      }))
    })
  }

  const handleSelect = (value: City) => {
    api.weather.fetchForecast(value.latitude, value.longitude).then((data) => {
      setData(data)
    })
  }

  return (
    <ProConfigProvider dark>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "#0c398c",
            colorTextBase: "#ffffff",
            colorLink: "#f2f7fb",
            borderRadius: 16,
            wireframe: false
          }
        }}
      >
        <MainLayout>
          <Header value={value} handleSelect={handleSelect} handleChange={handleChange} />
          {data &&
            <>
              <Flex wrap align='center' justify='space-between' style={{ paddingInline: 42 }}>
                <Flex wrap align='center' gap={24}>
                  <IconFont type={data[Object.keys(data)[0]].icon} style={{ fontSize: 280, filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))" }} />
                  <Flex vertical align='start'>
                    <StatisticCard
                      style={{ background: 'transparent', }}
                      statistic={{
                        style: { fontSize: 26, color: '#C5C5C8', },
                        valueStyle: { fontSize: 80 },
                        description: data[Object.keys(data)[0]].weather_code,
                        suffix: data[Object.keys(data)[0]].temperature_2m_max.unit,
                        valueRender: () => <Text style={{ fontSize: 100 }}>{data[Object.keys(data)[0]].current}</Text>
                      }}
                    />
                  </Flex>
                </Flex>
                <Flex>
                  <StatisticCard.Group style={{ background: "transparent" }}>
                    <StatisticCard
                      colStyle={{ width: "unset" }}
                      style={{ background: "transparent", filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
                      statistic={{
                        title: 'Min',
                        value: data[Object.keys(data)[0]].temperature_2m_min.value,
                        suffix: data[Object.keys(data)[0]].temperature_2m_min.unit,
                        icon: <IconFont type='icon-Temperaturedown' style={{ fontSize: 60 }} />
                      }}
                    />
                    <StatisticCard
                      colStyle={{ width: "unset" }}
                      style={{ background: "transparent", filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
                      statistic={{
                        title: 'Max',
                        value: data[Object.keys(data)[0]].temperature_2m_max.value,
                        suffix: data[Object.keys(data)[0]].temperature_2m_max.unit,
                        icon: <IconFont type='icon-Temperatureup' style={{ fontSize: 60 }} />
                      }}
                    />
                  </StatisticCard.Group>
                </Flex>
              </Flex>
              <WeatherCard data={data} />
              <WeekWeatherCard data={data} />
            </>
          }
        </MainLayout>
      </ConfigProvider >
    </ProConfigProvider>


  )
}

export default App
