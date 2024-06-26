export const enumToIconName = (value: number) => {
    switch (value) {
        case 0:
            return 'icon-Sun';
        case 1:
            return 'icon-sunny-light';
        case 2:
            return 'icon-cloudy-light';
        case 3:
            return 'icon-a-Overcastsky';
        case 45:
            return "icon-haze";
        case 48:
            return 'icon-a-Thefog';
        case 51:
            return 'icon-a-smallrain';
        case 53:
            return 'icon-a-moderaterain';
        case 55:
            return 'icon-a-heavyrain';
        case 56:
            return 'icon-a-Lightsnow';
        case 57:
            return 'icon-a-Heavysnow';
        case 61:
            return 'icon-a-heavyrain';
        case 63:
            return 'icon-rainstorm';
        case 65:
            return 'icon-thundershower';
        case 66:
            return 'icon-sleet';
        case 67:
            return 'icon-a-Lightsnow';
        case 71:
            return 'icon-SnowFallSlight';
        case 73:
            return 'icon-SnowFallModerate';
        case 75:
            return 'icon-SnowFallHeavy';
        case 77:
            return 'icon-snow';
        case 80:
            return 'icon-a-heavyrain';
        case 81:
            return 'icon-rainstorm';
        case 82:
            return 'icon-thundershower';
        case 85:
            return 'icon-SnowShowersSlight';
        case 86:
            return 'icon-SnowShowersHeavy';
        case 95: return "icon-rainstorm"
        case 96:
        case 99:
            return 'icon-thundershower';
        default:
            return 'icon-ClearSky';
    }
}
