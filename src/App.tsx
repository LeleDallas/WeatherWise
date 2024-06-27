import { ProConfigProvider } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { useState } from 'react';
import { City, ForecastingUnits } from './@types/api';
import api from './api';
import './i18n/config';
import Header from './layout/Header';
import MainLayout from './layout/MainLayout';
import Content from './layout/Content';
import { cityToName } from './feature';

type AutoCompleteProps = {
    value: string;
    label: string;
    key: number;
    city: City;
}

function App() {
    const [value, setValue] = useState<AutoCompleteProps[]>([]);
    const [data, setData] = useState<Record<string, ForecastingUnits>>();
    const [language, setLanguage] = useState<string>('it');

    const handleChange = async (value: string) => {
        await api.cities.fetch(value, language).then((data) => {
            setValue(data?.results?.map((item: City) => {
                return {
                    value: cityToName(item),
                    label: cityToName(item),
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
                    <Header value={value} handleChange={handleChange} handleSelect={handleSelect} setLanguage={setLanguage} />
                    <Content data={data} />
                </MainLayout>
            </ConfigProvider >
        </ProConfigProvider>
    )
}

export default App;
