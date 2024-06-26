import { StatisticCard } from "@ant-design/pro-components"
import { Flex } from "antd"
import { ForecastingUnits } from "../../@types/api"
import { IconFont } from "../IconFont"

const WeekWeatherCard = ({ data }: { data: Record<string, ForecastingUnits> }) =>
    <StatisticCard.Group wrap style={{ background: "transparent" }} direction="row"
        gutter={[16, 16]}>
        {Object.keys(data).splice(1, 7).map((key) =>
            <StatisticCard
                key={key}
                colSpan={{ xs: 24, sm: 12, md: 8, lg: 8, xl: 8, xxl: 4 }}
                style={{
                    background: "#13408D",
                    borderRadius: 20
                }}
                statistic={{
                    value: data[key].time,
                    icon: <IconFont type={data[key].icon} style={{ fontSize: 100 }} />,
                    description: <Flex align="center" justify="space-evenly">
                        <StatisticCard
                            style={{ background: "transparent" }}
                            statistic={{
                                description: "min",
                                value: data[key].temperature_2m_min.value,
                                suffix: data[key].temperature_2m_min.unit
                            }} />
                        <StatisticCard
                            style={{ background: "transparent" }}
                            statistic={{
                                description: "max",
                                value: data[key].temperature_2m_max.value,
                                suffix: data[key].temperature_2m_max.unit
                            }}
                        />
                    </Flex>,
                    // valueRender: () => <></>
                }}
            />
        )}
    </StatisticCard.Group>
export default WeekWeatherCard