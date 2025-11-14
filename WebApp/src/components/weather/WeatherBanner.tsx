import Text from '../../stylizedComponents/Text';
import { titleProps } from '../../types/props';
import { lc_coordinates, lc_locations } from '../../consts/consts';
import useWeatherData from '../../hooks/use-weather';

const WeatherBanner = ({
    location = lc_locations.nyc,
    coordinates = lc_coordinates.nyc,
    className = "h-full w-1/4 flex flex-col items-center rounded-md"
}: titleProps) => {
    const { weatherData, loading } = useWeatherData(coordinates);

    const currentForcast = () => {
        const period = weatherData.periods[0];
        return (
            <div className={className}>
                {period.detailedForecast
                    .split('. ')
                    .map(
                        (sentence: string, index: number) =>
                            index < 3 && (
                                <Text
                                    key={index}
                                    classNameProps="text-sm line-clamp-2 text-center"
                                    content={sentence}
                                />
                            ),
                    )}
            </div>
        );
    };

    const forcast = () => {
        return (
            <div className="h-fit w-full pl-4 pr-4 flex flex-row justify-center items-center">
                {currentForcast()}
            </div>
        );
    };

    const titles = () => {
        return (
            <div className="h-fit w-full flex-row flex pl-2 pr-2 mb-2">
                <div className="h-fit w-1/4 text-center">
                    <Text
                        classNameProps="font-bold text-xl"
                        content={`Current Weather in ${location}`}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="h-30 mt-2 flex flex-col bg-white p-2 pt-0 items-center rounded-2xl">
            {titles()}
            {loading ?
                <Text
                    classNameProps="text-2xl text-center"
                    content="Loading Weather Data..."
                />
            :   forcast()}
        </div>
    );
};

export default WeatherBanner;
