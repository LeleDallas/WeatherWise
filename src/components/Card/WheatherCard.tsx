import { StatisticCard } from "@ant-design/pro-components";
import { ForecastingUnits } from "../../@types/api";
import { IconFont } from "../IconFont";


type Props = {
    data: Record<string, ForecastingUnits>
}

const excludeKeys = ["apparent_temperature_max", "apparent_temperature_min", "temperature_2m_max", "temperature_2m_min"]

const WeatherCard = ({ data }: Props) => {
    console.log(data)
    return <StatisticCard.Group wrap style={{ background: "transparent" }} >
        {Object.entries(data[Object.keys(data)[0]]).map(([key, value]) => {
            if (typeof value === "object" && value.value != 0 && !excludeKeys.includes(key)) {
                return <StatisticCard
                    key={key}
                    style={{ background: "transparent", maxWidth: 250 }}
                    colSpan={{
                        xs: 24,
                        sm: 12,
                        md: 8,
                        lg: 6,
                        xl: 6,
                        xxl: 6,
                    }}
                    statistic={{
                        title: key,
                        value: value.value,
                        suffix: value.unit,
                        icon: <IconFont type={value.icon ?? ""} style={{ fontSize: 50 }} />
                    }}
                />
            }
        })}

    </StatisticCard.Group>
}

export default WeatherCard;