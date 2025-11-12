const Ticker = () => {
    return (
        <div className="w-full h-fit flex justify-center bg-white rounded-md border-2 border-white mt-2">
            <iframe
                title="Forex Rates"
                height="40"
                seamless={true}
                src="https://www.dailyforex.com/forex-widget/widget/42869"
                style={{
                    width: '100%',
                    height: '40px',
                    display: 'block',
                    border: '0px',
                    overflow: 'hidden',
                }}
            ></iframe>
        </div>
    );
};

export default Ticker;
