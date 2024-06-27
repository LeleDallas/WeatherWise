import { StatisticCard } from "@ant-design/pro-components"
import { Col, Flex, Typography } from "antd"
import WeekWeatherCard from "../components/Card/WeekWeatherCard"
import WeatherCard from "../components/Card/WheatherCard"
import { IconFont } from "../components/IconFont"
import { ForecastingUnits } from "../@types/api"
import { t } from "i18next"

type Props = {
    data?: Record<string, ForecastingUnits>
}
const { Text } = Typography

const Content = ({ data }: Props) => {

    const commonStyle = { background: 'transparent', filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))' }
    const isMobile = window.innerWidth < 768;

    return (
        data && <>
            <Flex wrap align="center" justify="space-evenly" style={{ paddingInline: 42 }}>
                <Flex wrap align="center" justify="center">
                    <IconFont
                        type={data[Object.keys(data)[0]].icon}
                        style={{ fontSize: 280, filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))' }}
                    />
                    <Flex vertical align="start">
                        <StatisticCard
                            style={{ background: 'transparent' }}
                            statistic={{
                                style: { fontSize: 26, color: '#C5C5C8' },
                                valueStyle: { fontSize: 70 },
                                description: t(data[Object.keys(data)[0]].weather_code),
                                suffix: data[Object.keys(data)[0]].temperature_2m_max.unit,
                                valueRender: () => <Text style={{ fontSize: isMobile ? 20 : 100 }}>{data[Object.keys(data)[0]].current}</Text>
                            }}
                        />
                    </Flex>
                </Flex>
                <Flex align="center" justify="space-between" wrap>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={8}
                    >
                        <StatisticCard
                            style={commonStyle}
                            statistic={{
                                title: t('apparent_temperature_min'),
                                value: data[Object.keys(data)[0]].temperature_2m_min.value,
                                suffix: data[Object.keys(data)[0]].temperature_2m_min.unit,
                                icon: <IconFont type="icon-Temperaturedown" style={{ fontSize: 60 }} />,
                            }}
                        />
                    </Col>
                    <Col xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={8}>
                        <StatisticCard
                            style={commonStyle}
                            statistic={{
                                title: t('apparent_temperature_max'),
                                value: data[Object.keys(data)[0]].temperature_2m_max.value,
                                suffix: data[Object.keys(data)[0]].temperature_2m_max.unit,
                                icon: <IconFont type="icon-Temperatureup" style={{ fontSize: 60 }} />,
                            }}
                        />
                    </Col>
                </Flex>
            </Flex >
            <WeatherCard data={data} />
            {/* <WeekWeatherCard data={data} /> */}
        </>
    )
}
export default Content