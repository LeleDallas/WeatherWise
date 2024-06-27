import { Col, Flex, Statistic } from 'antd';
import { ForecastingUnits } from '../../@types/api';
import { IconFont } from '../IconFont';
import i18next, { t } from 'i18next';
import { dateToDay } from '../../feature';

const WeekWeatherCard = ({ data }: { data: Record<string, ForecastingUnits> }) => {
    const language = i18next.language
    return (
        <Flex wrap style={{ background: 'transparent', marginTop: 22 }} gap={16} justify='center'>
            {Object.keys(data)
                .splice(1, 7)
                .map((key) => (
                    <Flex key={key}
                        wrap
                        align='center'
                        style={{
                            padding: 20,
                            background: '#13408D',
                            borderRadius: 20,
                        }}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8} >
                            <IconFont type={data[key].icon} style={{ fontSize: 100 }} />
                        </Col>
                        <Col xs={24} sm={24} md={16} lg={16} xl={16} >
                            <Statistic value={dateToDay(data[key].time, language)} />
                            <Flex align='center' justify='center' gap={16}>
                                <Statistic suffix={data[key].temperature_2m_min.unit} title={t("apparent_temperature_min")} value={data[key].temperature_2m_min.value} />
                                <Statistic suffix={data[key].temperature_2m_max.unit} title={t("apparent_temperature_max")} value={data[key].temperature_2m_max.value} />
                            </Flex>
                        </Col>
                    </Flex>
                ))}
        </Flex>
    )
}
export default WeekWeatherCard