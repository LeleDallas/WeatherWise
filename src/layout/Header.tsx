import { AutoComplete, Flex } from "antd"
import { IconFont } from "../components/IconFont"
import { City } from "../@types/api";


type AutoCompleteProps = {
    value: string;
    label: string;
    key: number;
    city: City;
}

type Props = {
    value: AutoCompleteProps[];
    handleChange: (value: string) => Promise<void>;
    handleSelect: (value: City) => void;
}

const Header = (props: Props) => {
    const { value, handleChange, handleSelect } = props
    return (
        <Flex align='center' justify='center' gap={10}>
            <AutoComplete
                suffixIcon={<IconFont type='icon-shower-night' style={{ fontSize: 22 }} />}
                allowClear
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
            />
        </Flex>
    )
}
export default Header