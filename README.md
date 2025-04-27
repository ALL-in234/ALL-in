
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    // 主畫面組件
    const MainScreen = ({ onShopClick, onGamesClick, onCalendarClick }) => (
      <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
        <div className="flex justify-between w-full mb-4">
          <button className="text-2xl">☰</button>
          <h1 className="text-xl font-bold">ALL IN</h1>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-full bg-black text-white p-4 rounded-lg mb-4">
          <p className="text-sm">帳戶餘額</p>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">HKD $10000</p>
            <p className="text-green-500 text-2xl font-bold">+$120</p>
          </div>
        </div>
        <div className="flex w-full mb-4">
          <button
            onClick={onShopClick}
            className="flex-1 bg-pink-500 text-white font-bold py-3 rounded-l-lg text-lg"
          >
            商店
          </button>
          <button
            onClick={onGamesClick}
            className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-r-lg text-lg"
          >
            遊戲 / 活動
          </button>
        </div>
        <div className="absolute bottom-16">
          <button
            onClick={onCalendarClick}
            className="bg-teal-500 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="fixed bottom-0 w-full bg-white flex justify-around py-4 border-t">
          <button className="text-3xl text-gray-600">🏠</button>
          <button className="text-3xl text-gray-600">🔍</button>
          <button className="text-3xl text-gray-600">↔️</button>
          <button className="text-3xl text-gray-600">💳</button>
        </div>
      </div>
    );

    // 商店畫面組件
    const ShopScreen = ({ onBackClick }) => (
      <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
        <div className="flex justify-between w-full mb-4">
          <button className="text-2xl">☰</button>
          <h1 className="text-xl font-bold">ALL IN</h1>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-full bg-black text-white p-4 rounded-lg mb-4">
          <p className="text-sm">帳戶餘額</p>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">HKD $10000</p>
            <p className="text-green-500 text-2xl font-bold">+$120</p>
          </div>
        </div>
        <div className="flex w-full justify-end mb-4">
          <button
            onClick={onBackClick}
            className="bg-black text-white font-bold py-2 px-4 rounded-full"
          >
            返回
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <button className="bg-red-500 text-white font-bold py-4 rounded-lg">房屋</button>
          <button className="bg-teal-400 text-white font-bold py-4 rounded-lg">汽車</button>
          <button className="bg-purple-500 text-white font-bold py-4 rounded-lg">股票</button>
          <button className="bg-green-500 text-white font-bold py-4 rounded-lg">加密貨幣</button>
          <button className="bg-cyan-500 text-white font-bold py-4 rounded-lg">服裝</button>
          <button className="bg-yellow-200 text-black font-bold py-4 rounded-lg">寵物</button>
        </div>
        <div className="fixed bottom-0 w-full bg-white flex justify-around py-4 border-t">
          <button className="text-3xl text-gray-600">🏠</button>
          <button className="text-3xl text-gray-600">🔍</button>
          <button className="text-3xl text-gray-600">↔️</button>
          <button className="text-3xl text-gray-600">💳</button>
        </div>
      </div>
    );

    // 遊戲畫面組件
    const GamesScreen = ({ onBackClick }) => (
      <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
        <div className="flex justify-between w-full mb-4">
          <button className="text-2xl">☰</button>
          <h1 className="text-xl font-bold">ALL IN</h1>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-full bg-black text-white p-4 rounded-lg mb-4">
          <p className="text-sm">帳戶餘額</p>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">HKD $10000</p>
            <p className="text-green-500 text-2xl font-bold">+$120</p>
          </div>
        </div>
        <div className="flex w-full justify-end mb-4">
          <button
            onClick={onBackClick}
            className="bg-black text-white font-bold py-2 px-4 rounded-full"
          >
            返回
          </button>
        </div>

        <div className="fixed bottom-0 w-full bg-white flex justify-around py-4 border-t">
          <button className="text-3xl text-gray-600">🏠</button>
          <button className="text-3xl text-gray-600">🔍</button>
          <button className="text-3xl text-gray-600">↔️</button>
          <button className="text-3xl text-gray-600">💳</button>
        </div>
      </div>
    );

    // 日曆畫面組件
    const CalendarScreen = ({ onBackClick }) => {
      const [focusedDate, setFocusedDate] = useState(new Date());
      const [selectedDate, setSelectedDate] = useState(new Date());
      const today = new Date();

      const firstDayOfMonth = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), 1);
      const lastDayOfMonth = new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 0);
      const firstDayWeekday = firstDayOfMonth.getDay();

      const previousMonth = () => {
        setFocusedDate(new Date(focusedDate.getFullYear(), focusedDate.getMonth() - 1, 1));
      };

      const nextMonth = () => {
        setFocusedDate(new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 1));
      };

      const selectDate = (date) => {
        setSelectedDate(date);
      };

      const addEvent = () => {
        if (selectedDate.getTime() === new Date(0).getTime()) {
          alert('請先選擇一個日期');
        } else {
          alert(`添加事件到 ${selectedDate.getDate()}日`);
        }
      };

      const days = [];
      for (let i = 0; i < firstDayWeekday; i++) {
        days.push(<div key={`empty-${i}`} className="p-2"></div>);
      }

      for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        const currentDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), day);
        const isSelected = currentDate.toDateString() === selectedDate.toDateString();
        const isToday = currentDate.toDateString() === today.toDateString();

        days.push(
          <div
            key={day}
            onClick={() => selectDate(currentDate)}
            className={`p-2 text-center cursor-pointer rounded-full ${
              isSelected ? 'bg-blue-200 font-bold' : ''
            } ${isToday ? 'border-2 border-red-500 rounded-full' : ''}`}
          >
            {day}
          </div>


        );
      }

      return (
        <div className="flex flex-col items-center h-screen bg-[#B2E4C9] p-4">
          <div className="flex justify-between w-full mb-4">
            <button className="text-2xl">☰</button>
            <h1 className="text-xl font-bold">ALL IN</h1>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
          <div className="w-full bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-bold">{`${focusedDate.getMonth() + 1}月 ${focusedDate.getFullYear()}`}</span>
              <div>
                <button onClick={previousMonth} className="text-xl mr-2">❮</button>
                <button onClick={nextMonth} className="text-xl">❯</button>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="font-bold">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 text-center">{days}</div>
          </div>
          <div className="absolute bottom-16">
            <button
              onClick={addEvent}
              className="bg-gray-300 text-black text-2xl w-12 h-12 rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
          <div className="fixed bottom-0 w-full bg-white flex justify-around py-4 border-t">
            <button onClick={onBackClick} className="text-3xl text-gray-600">🏠</button>
            <button className="text-3xl text-gray-600">🔍</button>
            <button className="text-3xl text-gray-600">↔️</button>
            <button className="text-3xl text-gray-600">💳</button>
          </div>
        </div>
      );
    };



    // 主應用程式組件
    const App = () => {
      const [screen, setScreen] = useState('main');

      const handleShopClick = () => setScreen('shop');
      const handleGamesClick = () => setScreen('games');
      const handleCalendarClick = () => setScreen('calendar');
      const handleBackClick = () => setScreen('main');

      return (
        <div>
          {screen === 'main' && (
            <MainScreen
              onShopClick={handleShopClick}
              onGamesClick={handleGamesClick}
              onCalendarClick={handleCalendarClick}
            />
          )}
          {screen === 'shop' && <ShopScreen onBackClick={handleBackClick} />}
          {screen === 'games' && <GamesScreen onBackClick={handleBackClick} />}
          {screen === 'calendar' && <CalendarScreen onBackClick={handleBackClick} />}
        </div>
      );
    };

    // 渲染應用程式
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  </script>
</body>
</html>
