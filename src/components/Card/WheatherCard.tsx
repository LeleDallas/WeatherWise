import { StatisticCard } from "@ant-design/pro-components";
import { ForecastingUnits } from "../../@types/api";
import { IconFont } from "../IconFont";


type Props = {
    data: Record<string, ForecastingUnits>
}

const excludeKeys = ["apparent_temperature_max", "apparent_temperature_min", "temperature_2m_max", "temperature_2m_min"]

const WeatherCard = ({ data }: Props) =>
    <StatisticCard.Group wrap style={{ background: "transparent" }} >
        {Object.entries(data[Object.keys(data)[0]]).map(([key, value]) => {
            if (typeof value === "object" && value.value != 0 && !excludeKeys.includes(key)) {
                return <StatisticCard
                    key={key}
                    style={{ background: "transparent", maxWidth: 300 }}
                    colSpan={{
                        xs: 24,
                        sm: 12,
                        md: 8,
                        lg: 6,
                        xl: 6,
                        xxl: 6,
                    }}
                    statistic={{
                        title: value.title,
                        value: value.value,
                        suffix: value.unit,
                        icon: <IconFont type={value.icon ?? ""} style={{
                            fontSize: 50,
                            filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"

                        }} />
                    }}
                />
            }
        })}
    </StatisticCard.Group>


export default WeatherCard;