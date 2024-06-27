import { AutoComplete, Dropdown, Flex } from 'antd';
import i18next, { t } from 'i18next';
import { City } from '../@types/api';
import { IconFont } from '../components/IconFont';

type AutoCompleteProps = {
    value: string;
    label: string;
    key: number;
    city: City;
};

type Props = {
    value: AutoCompleteProps[];
    handleChange: (value: string) => Promise<void>;
    handleSelect: (value: City) => void;
    setLanguage: (value: string) => void;
};

const Header = (props: Props) => {
    const { value, handleChange, handleSelect, setLanguage } = props;
    const items = [
        {
            label: 'IT',
            key: 2,
            icon: <img width="18" src={`${import.meta.env.VITE_GITHUB_FLAG_KEY}it.svg`} alt="it" />,
            onClick: () => {
                i18next.changeLanguage('it');
                setLanguage('it')
            },
        },
        {
            label: 'EN',
            key: 1,
            icon: <img width="18" src={`${import.meta.env.VITE_GITHUB_FLAG_KEY}gb.svg`} alt="gb" />,
            onClick: () => {
                i18next.changeLanguage('en');
                setLanguage('en')
            },
        }
    ]

    return (
        <Flex align="center" justify="center" gap={10}>
            <AutoComplete
                suffixIcon={<IconFont type="icon-nearbydestinations" style={{ fontSize: 22 }} />}
                allowClear
                placeholder={t("search_placeholder")}
                style={{ width: '90%', textAlign: 'center' }}
                options={value}
                showSearch
                onSelect={(_, data) => handleSelect(data.city)}
                onChange={handleChange}
                optionRender={({ data }) => (
                    <Flex align="center" gap={8}>
                        <p>{data.label}</p>
                        <img
                            width="18"
                            src={`${import.meta.env.VITE_GITHUB_FLAG_KEY}${data.city.country_code.toLowerCase()}.svg`}
                            alt={data.city.country_code}
                        />
                    </Flex>
                )}
            />
            <Dropdown menu={{ items }}>
                <IconFont type="icon-world" style={{ fontSize: 22 }} />
            </Dropdown>
        </Flex>
    );
};
export default Header;
