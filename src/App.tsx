import { AutoComplete, ConfigProvider, Flex, Layout, theme, Tooltip } from 'antd';
import { useState } from 'react';
import { City } from './@types/api';
import api from './api';

const { Content } = Layout;

type AutoCompleteProps = {
  value: string;
  label: string;
  key: number;
  city: City;
}

function App() {

  const [value, setValue] = useState<AutoCompleteProps[]>([])
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
      console.log(data)
    })
  }


  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        "token": {
          "colorBgBase": "#0c398c",
          "colorTextBase": "#ffffff",
          "colorLink": "#f2f7fb",
          "borderRadius": 16,
          "wireframe": false
        }
      }}
    >

      <Layout style={{
        border: '1px solid #000',
        height: "100vh",
        padding: 24,
        textAlign: 'center',
        borderRadius: borderRadiusLG, margin: '24px 16px', overflow: 'initial',
      }}
      >
        <Content>
          <Flex align='center' justify='center' gap={10}>

            <AutoComplete
              style={{ width: "90%" }}
              options={value}
              showSearch
              onSelect={(_, data) => handleSelect(data.city)}
              onChange={handleChange}
              optionRender={({ data }) =>
                <Flex align='center' gap={8}>
                  <p>{data.label}</p>
                  <img width="18" src={`${import.meta.env.VITE_GITHUB_FLAG_KEY}${data.city.country_code.toLowerCase()}.svg`}
                    alt={data.city.country_code} />
                </Flex>
              }
            /><Tooltip title="Search for a city">
              <p>a</p>
            </Tooltip>
          </Flex>

        </Content>

      </Layout>
    </ConfigProvider >

  )
}

export default App
